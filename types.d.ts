// to store the result
// all pages will have id, title, extract
// thumbnail is optional
type Result = {
    pageid: string,
    title: string, 
    extract: string, 
    thumbnail?: {
        source:string, 
        width: number, 
        height: number,
    }
}

// there is not always guaranteed, but the query is optional and the pages returned would also be optional as there might not be a return. 
// the pages will come as an array of results. 
type SearchResult = {
    query?: {
        pages?: Result[],
    },
}