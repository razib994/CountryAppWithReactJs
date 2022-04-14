import React, {useEffect, useState} from 'react';

const Search = (props) => {
    const [searchText, setSearchText] = useState("");

    const handleData = (e) => {
        setSearchText(e.target.value)
    };
    useEffect(() => {
        console.log(searchText)
        props.onSearch(searchText);
    },[searchText]);
    return (
        <div>
            <input className="form-control mb-4" type="text" placeholder="Searching......" value={searchText} onChange={handleData} />
        </div>
    );
}

export default Search;