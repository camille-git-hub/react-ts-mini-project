
type SearchBarProps = {
    searchTerm: string,
    onSearchTermChange: (value: string) => void,
    onSearch: () => void,
    loading: boolean
}

export function SearchBar ({searchTerm, onSearchTermChange, loading, onSearch}: SearchBarProps){
    return (
        <div className="hero-content">
            <label htmlFor="search" className="input">
            <input id="search" type="search" value={searchTerm} onChange={(e) => onSearchTermChange(e.target.value)} placeholder="What artwork are you looking for?" />
            </label>
            <button className="btn" onClick={onSearch} disabled={loading}>Search</button>
        </div>
    )
}

