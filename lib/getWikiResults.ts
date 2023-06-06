export default async function getWikiResults(searchTerm: string) {
  
    // this relates to the wikipedia api to request
    const searchParams = new URLSearchParams({
        action: 'query',
        generator: 'search', 
        //search term is being passed in here
        gsrsearch: searchTerm,
        gsrlimit: '20',
        prop:'pageimages|extracts',
        exchars:'100',
        exintro:'true',
        explaintext:'true',
        exlimit:'max',
        format:'json',
        origin:'*',
    })

    // await the fetch from the website, applying the correct search paramaters for that site. 
    const response = await fetch('https://en.wikipedia.org/w/api.php?'+ searchParams)
  
    // respond with the json 
    return response.json()
}
