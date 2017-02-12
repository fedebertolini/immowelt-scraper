const cheerio = require('cheerio');

const parseArea = (text) => {
    const areaRegex = /(\d*.\d*) m²/.exec(text);
    return areaRegex ? parseFloat(areaRegex[1].replace(',', '.')) : null;
};

const parsePrice = (text) => {
    const sanitizedText = text.replace('.', '').replace(',', '.');
    const priceRegex = /(\d+\D?\d*)\s*(?:&euro;|€)/.exec(sanitizedText);
    return priceRegex ? parseFloat(priceRegex[1]) : null;
};

const parseAddress = (text) => {
    const result = {};

    const regex = /(\d{5}) (\D+) \(.+\),? ?(.*)?/.exec(text);
    result.postalCode = regex ? regex[1] : null;
    result.city = regex ? regex[2] : null;
    result.address = regex ? (regex[3] || null) : null;
    return result;
};

const parseRentTotal = ($) => {
    let price = null;
    const priceRows = $('#divPreise .datatable .datarow');
    for (let i = 0; i < priceRows.length; i++) {
        const row = priceRows.eq(i);
        if (row.find('.datalabel').text().trim() === 'Warmmiete') {
            return parsePrice(row.find('.datacontent').text());
            break;
        }
    }
    return price;
};

exports.scrap = (page) => {
    const $ = cheerio.load(page, {
        decodeEntities: false,
        normalizeWhitespace: true,
    });

    let apartment = {};

    apartment.rentBase = parsePrice($('.hardfacts .hardfact').eq(0).text());
    apartment.rentTotal = parseRentTotal($);
    apartment.area = parseArea($('.hardfacts .hardfact').eq(1).text().replace(',', '.'));
    apartment.rooms = parseInt($('.hardfacts .hardfact').eq(2).text(), 10);
    apartment.availableFrom = null;

    const addressInfo = parseAddress($('.location span').text());
    apartment = Object.assign(apartment, addressInfo);

    return apartment;
};
