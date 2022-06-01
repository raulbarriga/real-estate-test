# Project Status:

- It currently fetches data & displays it over the console (I have to hard code the city & state on the api website)

## What I'm currently working on:

- Currently going over pagination.
-- The api shows a default limit of 200 per request
-- I can workout paginating that fetched data, showing some data little by little (using the length property of the initial fetch request)

-- so to get the total amount of pages:

-- have a totalItems & itemsPerPage variables: 
```
let totalItems = 13;
const ITEMS_PER_PAGE = 5;
```
-- Then do some math to get the amount of pagination buttons to show:
```
Math.ceil(totalItems / ITEMS_PER_PAGE);
```
-- In this example, you'll have a total of 3 pagination buttons then (13/5 = 2.6, rounded up = 3 pages)

## from udemy course on pagination:
- if our pageSize is 10 (i.e. show 10 items per page) & we only have 6 items, then pagination isn't even gonna display

- have a currentPage variable: `Number(pageNumber || 1)`
- have a total count of items (the api already gives a length property for this #): `count = property.length`
- 