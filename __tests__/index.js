process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; //not safe, but Immowelt has a SSL mess
const index = require('../src');

it('exports the list of available cities', () => {
    const cities = index.cities;
    expect(Array.isArray(cities)).toBe(true);
    expect(cities.length).toBeGreaterThan(10);
});

it('scraps the first page of the Berlin apartment list and its apartments', () => {
    const promise = index.scrapCity('Berlin');
    expect(promise instanceof Promise).toBe(true);

    return promise.then((result) => {
        expect(Array.isArray(result.items)).toBe(true);
        expect(result.items.length).toBe(20);
        expect(result.pagination.page).toBe(1);
        expect(result.pagination.totalPages).toBeGreaterThan(50);

        result.items.forEach((apartment) => {
            expect(apartment.rentBase).toBeGreaterThan(200);
            expect(apartment.rooms).toBeGreaterThan(0);
            expect(apartment.postalCode).toBeTruthy();
            expect(apartment.city).toBe('Berlin');
            expect(apartment.images.length).toBeGreaterThan(0);
        });
    });
});

it('scraps the second page of the Köln apartment list and its apartments', () => {
    const promise = index.scrapCity('Köln', 2);
    expect(promise instanceof Promise).toBe(true);

    return promise.then((result) => {
        expect(Array.isArray(result.items)).toBe(true);
        expect(result.items.length).toBe(20);
        expect(result.pagination.page).toBe(2);
        expect(result.pagination.totalPages).toBeGreaterThan(5);

        result.items.forEach((apartment) => {
            expect(apartment.rentBase).toBeGreaterThan(100);
            expect(apartment.rooms).toBeGreaterThan(0);
            expect(apartment.postalCode).toBeTruthy();
            expect(apartment.city).toBe('Köln');
            expect(apartment.images.length).toBeGreaterThan(0);
        });
    });
});
