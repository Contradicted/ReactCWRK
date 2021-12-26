import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DisplayData from './DisplayData';
// we use functional  components. usestate hook the received data is stored in the state variable of the componenet  using setState the Data is 
//rendered using a separate functional component Display Data In Display data, we  pass the state variable Books  as data recieved  axious lib
export default function DisplayCovidData() {
    const [Books, setBooks] = useState([]);
    const url = "http://localhost:5000/alldata/"

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setBooks(res.data)
            })
            .catch(err => {
                console.log("error has occured")
            })
    }, [])
    return (
        <div>
            <DisplayData Books={Books} />
        </div>
    )
}