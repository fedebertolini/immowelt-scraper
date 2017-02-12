# immowelt-scraper
Web scrapper for the [Immowelt apartment listing](https://www.immowelt.de/suche/wohnungen/mieten).

## Installation
```
npm install immowelt-scraper --save
```

## Usage

```
const scraper = require('immowelt-scraper');
```

#### Cities
You can get the available cities:
```
scraper.cities
```

Output:
```
[
    'Berlin',
    'Bielefeld',
    'Bochum',
    'Bonn',
    'Bremen',
    'Dortmund',
    'Dresden',
    'Duisburg',
    'Düsseldorf',
    'Essen',
    'Frankfurt',
    'Hamburg',
    'Hannover',
    'Köln',
    'Leipzig',
    'Mannheim',
    'München',
    'Nürnberg',
    'Stuttgart',
    'Wuppertal'
]
```

#### Scrap city
You can get all listed apartments for a specific city and a specific page (defaults to 1):
```
scraper.scrapCity('Berlin', 1)
```
This will return a `Promise` that resolves in an object with two properties: an array of apartments
and an object with the pagination info.

Output:
```
{
  items:[
    {
      rentBase:437.25,
      rentTotal:651.25,
      area:55,
      rooms:2,
      availableFrom:null,
      postalCode:'13585',
      city:'Berlin',
      address:'Blumenstraße 7',
      url:'https://www.immowelt.de/expose/2DEXW4A'
    },
    {
      rentBase:863,
      rentTotal:null,
      area:75,
      rooms:2,
      availableFrom:null,
      postalCode:'10437',
      city:'Berlin',
      address:'Kopenhagener Straße 40',
      url:'https://www.immowelt.de/expose/2DWVW4A'
    },
    {
      rentBase:1520,
      rentTotal:1975,
      area:95,
      rooms:2,
      availableFrom:null,
      postalCode:'10119',
      city:'Berlin',
      address:'Choriner Strasse 7',
      url:'https://www.immowelt.de/expose/2DUDT4A'
    }
  ],
  pagination:{
    page:1,
    totalPages:90
  }
}
```
