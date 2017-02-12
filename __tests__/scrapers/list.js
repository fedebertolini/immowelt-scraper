const fs = require('fs');
const scraper = require('../../src/scrapers/list');

it('scraps the first page of the Berlin apartment\'s list', () => {
    const file = fs.readFileSync(`${process.cwd()}/__tests__/scrapers/pages/listFirstPage.html`);
    const { items, pagination } = scraper.scrap(file);

    expect(items.length).toBe(20);
    expect(pagination.page).toBe(1);
    expect(pagination.totalPages).toBe(90);

    items.forEach((item) => {
        expect(item.url).toBeTruthy();
    });
});

it('scraps the fourth page of the Berlin apartment\'s list', () => {
    const file = fs.readFileSync(`${process.cwd()}/__tests__/scrapers/pages/listFourthPage.html`);
    const { items, pagination } = scraper.scrap(file);

    expect(items.length).toBe(20);
    expect(pagination.page).toBe(4);
    expect(pagination.totalPages).toBe(90);

    items.forEach((item) => {
        expect(item.url).toBeTruthy();
    });
});

it('scraps the last page of the Berlin apartment\'s list', () => {
    const file = fs.readFileSync(`${process.cwd()}/__tests__/scrapers/pages/listLastPage.html`);
    const { items, pagination } = scraper.scrap(file);

    expect(items.length).toBe(16);
    expect(pagination.page).toBe(90);
    expect(pagination.totalPages).toBe(90);

    items.forEach((item) => {
        expect(item.url).toBeTruthy();
    });
});
