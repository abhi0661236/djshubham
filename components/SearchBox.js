import React from 'react'
import { BiSearch } from 'react-icons/bi'

const SearchBox = ({border = false, inputClassName}) => {
    
    return (
        <div>
            <div className={`${border ? "border border-dark border-1" : "shadow-lg"} w-fit mx-auto py-2 px-5 rounded-pill`}>
                <div className="d-flex align-items-center">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        className={`searchInput border-0 p-2 border-0 outline-0 text-secondary ${inputClassName || ""}`}
                        placeholder='Search here...'
                    />
                    <BiSearch />
                </div>
            </div>
        </div>
    )
}

export default SearchBox