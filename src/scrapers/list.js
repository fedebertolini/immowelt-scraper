const cheerio = require('cheerio');

const scrapApartment = ($apartmentNode) => {
    const apartment = {};

    apartment.url = $apartmentNode.find('.js-listitem > a').attr('href');

    return apartment;
};

const scrapPagination = $ => ({
    page: parseInt($('#pnlPaging .ci_color').text(), 10),
    totalPages: parseInt($('#pnlPaging .btn_01').last().text(), 10),
});

exports.scrap = (page) => {
    const $ = cheerio.load(page, {
        decodeEntities: false,
        normalizeWhitespace: true,
    });

    const apartments = $('.js-object').map((i, apt) => scrapApartment($(apt))).get();
    const pagination = scrapPagination($);

    return {
        items: apartments,
        pagination,
    };
};
