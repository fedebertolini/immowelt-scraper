const fs = require('fs');
const scraper = require('../../src/scrapers/apartment');

it('scraps the apartment1.html', () => {
    const file = fs.readFileSync(`${process.cwd()}/__tests__/scrapers/pages/apartment1.html`);
    const apartment = scraper.scrap(file);

    expect(apartment.rentBase).toBe(889);
    expect(apartment.rentTotal).toBe(null);
    expect(apartment.area).toBe(80);
    expect(apartment.rooms).toBe(3);
    expect(apartment.address).toBe(null);
    expect(apartment.postalCode).toBe('10115');
    expect(apartment.city).toBe('Berlin');
    expect(apartment.availableFrom).toBe(null);
});

it('scraps the apartment2.html', () => {
    const file = fs.readFileSync(`${process.cwd()}/__tests__/scrapers/pages/apartment2.html`);
    const apartment = scraper.scrap(file);

    expect(apartment.rentBase).toBe(725);
    expect(apartment.rentTotal).toBe(915);
    expect(apartment.area).toBe(81.45);
    expect(apartment.rooms).toBe(2);
    expect(apartment.address).toBe('Goltzstraße 13 B');
    expect(apartment.postalCode).toBe('10781');
    expect(apartment.city).toBe('Berlin');
    expect(apartment.availableFrom).toBe(null);
});
