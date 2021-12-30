import User from "./User"

const SearchResults = ({ searchResults }) => {
    
    return (
        <>
            <div className="row space-between padding-x-6 ff-title fs-10">
                <p className="">
                    {searchResults.length} Results
                </p>
            </div>
            {searchResults.map((result) => (
                <User user={result.user} id={result.id} key={result.id}/>
            ))}
        </>
    )
}

export default SearchResults
