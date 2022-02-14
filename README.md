# Submission for cord Coding Challenge (Front-end)

## Introduction 
A UI exercise which uses [theMovieDB] to populate a list of movies based on search filters such as keywords and year, with the capacity to include filtering by genre, min. rating, and language.

### Methodology
A react front end is built using a hook-based approach, with styling via styled-components.

Packages used in the repo:
- `React`
- `styled-components`
- `lodash` (debounce)
- `dotenv`
- `jest` (testing)

## Installation

Use npm to install required packages.

```bash
npm install
```
**Note: .env.sample must be renamed to .env before starting the API.** 

## Usage
To start the API, run the command below. 

```bash
npm start
```
By default the project will run at http://localhost:3000/discover

### Funtionality
On desktop, a pair of searchbars can be used to narrow the search. Otherwise, the movies displayed are the most popular movies on TMDB in descending order. Filters are shown below, but currently do not change the displayed results.

On mobile, the keyword search bar is at the top of the page, with the year accessible via the filters button to the right.

## Implementations of note

### 
- **Design Theme**: Values reused throughout the designs such as colours and mobile screen-size for media queries are implemented using a theme. This theme is accessible to all styled-components via React context.
- **Rate Limiting**: Although TMDB has no rate limiting as of [Dec. 2019](https://developers.themoviedb.org/3/getting-started/request-rate-limiting), a debouncing mechanism has been utilised to reduce request frequency to the API. As such, a search request will only be sent to the API after input events have ceased for more than 500ms. This delay can be easily set to a customised value. See [lodash docs](https://lodash.com/docs/4.17.15) for more.
- **Testing**: Unit testing is provided via Jest.