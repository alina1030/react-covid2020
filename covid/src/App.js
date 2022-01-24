import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import covid from "./images/covid.png";
import {Card,Table} from "./components";

function App() {
  let today = new Date();
  
  let date =  today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  const [totalIndiaCase,setTotalIndiaCase] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalStateWiseCount,setTotalStateWiseCount] = useState([]);
  const [totalStateArrayLength,setTotalStateArrayLength] = useState("");
  let [filteredData] = useState();
  useEffect(() =>{
    loadData();
  },[]);

  const loadData = async () =>{
      setLoading(true);
      const resp = await axios.get("https://data.covid19india.org/data.json")
      setTotalIndiaCase(resp.data.statewise.slice(0,1));
      const totalStateCount = resp.data.statewise.slice(1);
      setTotalStateWiseCount(totalStateCount);
      setTotalStateArrayLength(totalStateCount.length);
      setLoading(false);

  };

  const stateSearch = (searchText) => {
    filteredData = totalStateWiseCount.filter((value)=>{
      return value.state.toLowerCase().includes(searchText.toLowerCase());
    });
    setTotalStateWiseCount(filteredData);
  }

  return (
    <div className="App">
      <span>
        <img src = {covid} style={{height:"70px"}} alt="COVID-19" />
        <h1>Live India Tracker</h1>
      </span>
      <h4>As of {date}</h4>
      <Card totalIndiaCase={totalIndiaCase}/>
      <Table 
      totalStateWiseCount={totalStateWiseCount}
      totalStateArrayLength={totalStateArrayLength}
      loading={loading}
      loadData={loadData}
      filteredData={filteredData}
      stateSearch={stateSearch}
      />
    </div>
  );
}

export default App;
