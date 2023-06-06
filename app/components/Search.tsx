'use client'
import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"


export default function Search() {
    //this is a search that will request results from wikipeida

    //create a search use state
    const [search, setSearch] = useState('')
    // create a router 
    const router = useRouter()
    
    // create and event handler that handles submit
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        // stop page reloading
        e.preventDefault()
        // set search to be an empty string after the submit has been completed
        setSearch('');
        //then the router will be used to push to a new url that is the root and the search term
        // this takes to the dynamic page
        router.push(`/${search}/`)
    }

  return (
    // form that runs the handle submit when submitted
    <form className="w-50 flex justify-center md:justfiy-between" onSubmit={handleSubmit}>
        {/* controlled input that sets state as type
            as the value is changed the setSearch is changed
        */}
        <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white p-2 w-80 text-xl rounded-xl"
            placeholder="Search"
            />
        <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2">
            🚀
        </button>
    </form>
  )
}
