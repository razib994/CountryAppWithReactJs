import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import Countries from "./Countries";
import Search from "./Search";

const url ="https://restcountries.com/v3.1/all";
function App() {
    const [error, setError] = useState(null);
    const [isloading, setLoading] = useState(false);
    const [countries, setCountries] = useState([]);
    const [filterCountry, setFilterCountry] = useState(countries);

    const fetchData = async (url) => {
        setLoading(true);
        try{
            const response = await fetch(url);
            const data = await response.json();
            setCountries(data);
            setFilterCountry(data)
            setLoading(false);
            setError(null)
        }catch (error){
            setLoading(false);
            setError(error)

        };

    };

    useEffect(() => {
        fetchData(url)
    },[])

    const handleSearch = (searchValue) => {
        let search = searchValue.toLowerCase()
        const newCountries = countries.filter((country) => {
            const countryName = country.name.common.toLowerCase();
            return countryName.startsWith(search);
        });
        setFilterCountry(newCountries)
    }
  return (
    <>
        <div className="container">
            <div className="row">
      <h2 className="text-center p-4"><b>Country App</b></h2>
         <Search onSearch={handleSearch}/>
        {isloading && <h4> Loading..... </h4>}
        {error && <h4>{error.message}</h4>}
        {countries && (<Countries countries={filterCountry}/>)}
    </div>
        </div>
    </>
  );
}

export default App;
