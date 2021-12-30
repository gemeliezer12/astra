const SearchBar = ({handleSearch, setSearch}) => {
    return (
    
        <input className="height-100pc width-100pc padding-x-6 padding-y-4 border-radius-4 fs-14" type="text" placeholder="Search for a Trainer" style={{
            backgroundColor: "var(--bg-color-1)",
        }} onChange={(e) => handleSearch(e.target)}/>
    )
}

export default SearchBar
