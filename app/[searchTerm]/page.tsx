import getWikiResults from "@/lib/getWikiResults"
import Item from "./components/Item"

// props to check the search term paramater that is of type string
type Props = {
    params: {
        searchTerm: string
    }
}


export async function generateMetadata({ params: {searchTerm }}: Props) {
    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
    const data  = await wikiData
    // replace the browser generated 20% with spaces
    const displayTerm = searchTerm.replaceAll('20%', ' ')

    if(!data?.query?.pages) {
        return {
            title: `${displayTerm} not found!`
        }
    }
  
  return ({
    title: `🚀${displayTerm}`,
    description: `Search Results for ${displayTerm}`
})
}


// create an async function
// pass the params in and the searchterm value
export default async function SearchResults({ params: {searchTerm }}: Props) {
    // get the data from wiki, this is a call to getWikiresults with the searchTerm passed in
    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
    // await the the promise and asign to a new identifer
    const data  = await wikiData
    //define the results
    // it could be undefined, not sure if get the data query
    const results: Result[]| undefined = data?.query?.pages

    // get the content
    const content = (
        <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
            {/* use of terneray operator for an if statement */}
            {results
            // if results is true then map through the values within the results
                ? Object.values(results).map(result => {
                    // stringify the result from the json as different paragraphs
                    return <Item key={result.pageid} result={result}/>
            })
            // if not found then return the search term and not found
            : <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
        }

        </main>
    )
  
    return (
        content
  )
}