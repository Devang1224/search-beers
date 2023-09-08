import React, { useEffect, useState } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./home.css";
import axios from "axios";
import Card from "../../components/card/Card";


const Home = () => {
  const [beersData, setBeersData] = useState([]);
  const [searchValue,setSearchValue] = useState(null);

  const fetchBeers = async () => {
    try {
      const data = await axios.get(`https://api.punkapi.com/v2/beers${ searchValue?`?beer_name=${searchValue}`:"" }`);
      setBeersData(data.data);

    } catch (err) {}
  };

  useEffect(() => {
    fetchBeers();
  }, [searchValue]);

  return (

    <div className="home">
      <SearchBar setSearchValue={setSearchValue}/>
      <div className="card-container">
        {

        beersData.length?
        beersData.map((item) => (
          <Card key={item.id} data={item}/>
        ))
        :
        <div className="error">Not Found</div>
        
        }

      </div>
    </div>

  );
};

export default Home;
