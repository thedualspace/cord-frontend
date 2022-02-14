import { fetchPopularMovies, fetchAllGenres, searchMovies } from "./index.js";

//Popular movies
test("Fetches popular movies from TMDB", async () => {
    expect(
        await fetchPopularMovies()
    ).hasOwnProperty("results");
})

//Genres
test("Fetches all genres and their ids from TMDB", async () => {
    expect(
        await fetchAllGenres()
    ).hasOwnProperty("genres");
})

//Search
test("Fetches movies from TMDB using any search keyword", async () => {
    expect(
        await searchMovies("Encanto")
    ).hasOwnProperty("results");
})

test("Fetches specific movies from TMDB based on keyword", async () => {
    const searchResults = await searchMovies("Lion King");
    const results = searchResults.results;
    //This is the id from TMDB that corresponds to the original Lion King film
    const lionKingId = 8587

    //Checking that the lion king is returned somewhere in the results array
    expect(results).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                id: lionKingId
            })
        ])
    )
})

// Note that TMDB requires a keyword for this endpoint, 
// so we do not test for year searches without keywords
test("Fetches specific movies from TMDB based on keyword and year", async () => {
    const searchResults = await searchMovies("Toy", "1999");
    const results = searchResults.results;
    //This is the id from TMDB that corresponds to the original Lion King film
    const ToyStory2Id = 863 

    //Checking that the lion king is returned somewhere in the results array
    expect(results).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                id: ToyStory2Id
            })
        ])
    )
})