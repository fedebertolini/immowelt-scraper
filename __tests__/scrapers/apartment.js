const fs = require('fs');
const scraper = require('../../src/scrapers/apartment');

it('scraps the apartment1.html', () => {
    const file = fs.readFileSync(`${process.cwd()}/__tests__/scrapers/pages/apartment1.html`);
    const apartment = scraper.scrap(file);

    expect(apartment.id).toBe('2D7C24A');
    expect(apartment.rentBase).toBe(889);
    expect(apartment.rentTotal).toBe(null);
    expect(apartment.area).toBe(80);
    expect(apartment.rooms).toBe(3);
    expect(apartment.address).toBe(null);
    expect(apartment.postalCode).toBe('10115');
    expect(apartment.city).toBe('Berlin');
    expect(apartment.availableFrom).toBe(null);
    expect(apartment.images).toEqual([
        'https://media-pics2.immowelt.org/8/0/7/7/8B5D454FEA824C4391AE954401FF7708.jpg',
    ]);
});

it('scraps the apartment2.html', () => {
    const file = fs.readFileSync(`${process.cwd()}/__tests__/scrapers/pages/apartment2.html`);
    const apartment = scraper.scrap(file);

    expect(apartment.id).toBe('2DKF449');
    expect(apartment.rentBase).toBe(725);
    expect(apartment.rentTotal).toBe(915);
    expect(apartment.area).toBe(81.45);
    expect(apartment.rooms).toBe(2);
    expect(apartment.address).toBe('Goltzstraße 13 B');
    expect(apartment.postalCode).toBe('10781');
    expect(apartment.city).toBe('Berlin');
    expect(apartment.availableFrom).toBe(null);
    expect(apartment.images).toEqual([
        'https://media-pics2.immowelt.org/C/6/4/8/196DC5D9B85B40BC8342DE0B3334846C.jpg',
        'https://media-pics2.immowelt.org/E/A/8/0/66839D351E6D431B9E62ED713A8A08AE.jpg',
        'https://media-pics2.immowelt.org/E/B/3/1/57651B55B55D4B578DA5D3507BDA13BE.jpg',
        'https://media-pics1.immowelt.org/6/0/2/5/5173FEEB9C4149E7A36AB8AB80705206.jpg',
    ]);
});

it('scraps the apartment3.html', () => {
    const file = fs.readFileSync(`${process.cwd()}/__tests__/scrapers/pages/apartment3.html`);
    const apartment = scraper.scrap(file);

    expect(apartment.id).toBe('2DDGQ4A');
    expect(apartment.rentBase).toBe(1210);
    expect(apartment.rentTotal).toBe(1525);
    expect(apartment.area).toBe(111);
    expect(apartment.rooms).toBe(3);
    expect(apartment.address).toBe(null);
    expect(apartment.postalCode).toBe('50667');
    expect(apartment.city).toBe('Köln');
    expect(apartment.availableFrom).toBe(null);
    expect(apartment.images).toEqual([
        'https://media-pics2.immowelt.org/C/6/4/8/196DC5D9B85B40BC8342DE0B3334846C.jpg',
        'https://media-pics2.immowelt.org/E/A/8/0/66839D351E6D431B9E62ED713A8A08AE.jpg',
        'https://media-pics2.immowelt.org/E/B/3/1/57651B55B55D4B578DA5D3507BDA13BE.jpg',
    ]);
});

it('scraps the apartment4.html', () => {
    const file = fs.readFileSync(`${process.cwd()}/__tests__/scrapers/pages/apartment4.html`);
    const apartment = scraper.scrap(file);

    expect(apartment.id).toBe('2DV424A');
    expect(apartment.rentBase).toBe(760);
    expect(apartment.rentTotal).toBe(950);
    expect(apartment.area).toBe(75);
    expect(apartment.rooms).toBe(3);
    expect(apartment.address).toBe(null);
    expect(apartment.postalCode).toBe('51069');
    expect(apartment.city).toBe('Köln');
    expect(apartment.availableFrom).toBe(null);
    expect(apartment.images).toEqual([]);
});
