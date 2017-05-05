const request = require('request');
const listScraper = require('./scrapers/list');
const apartmentScraper = require('./scrapers/apartment');
const cityPaths = require('./cityPaths.json');

const host = 'https://www.immowelt.de';

const filterOptions = {
    'newest': 'sort=createdate%2Bdesc&', 
    'relevance': 'sort=relevanz&',
    'priceAsc': 'sort=price&',
    'priceDesc': 'sort=price%2Bdesc&'
};

const getListUrl = (city, filter, page) => {
    const cityPath = cityPaths[city];
    if (!cityPath) {
        throw new Error(`Invalid city: ${city}`);
    }
    return `${host}/liste/${cityPath}/wohnungen/mieten?${filter}cp=${page}`;
};

const scrapApartment = url => new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
        if (error) {
            reject(error);
            return;
        }
        if (response.statusCode !== 200) {
            reject(`Invalid response: ${response.statusCode}`);
            return;
        }
        const apartment = apartmentScraper.scrap(body);
        apartment.url = url;

        resolve(apartment);
    });
});

const scrapCity = (city, filter = filterOptions['newest'], page = 1) => new Promise((resolve, reject) => {
    let url;
    try {
        url = getListUrl(city, page);
    } catch (e) {
        reject(e);
        return;
    }

    request(url, (error, response, body) => {
        if (error) {
            reject(error);
            return;
        }
        if (response.statusCode !== 200) {
            reject(`Invalid response: ${response.statusCode}`);
            return;
        }
        const apartments = listScraper.scrap(body);
        const apartmentPromises = apartments.items.map(apt => scrapApartment(host + apt.url));

        resolve(Promise.all(apartmentPromises).then(items => ({
            items,
            pagination: apartments.pagination,
        })));
    });
});

exports.cities = Object.keys(cityPaths);
exports.filterOptions = filterOptions;
exports.scrapCity = scrapCity;
