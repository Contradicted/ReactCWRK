import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';
import DisplayData from './DisplayData';
export default function DeleteBook(props) {
    const [state, setState] = useState([]);


    useEffect(() => {
        console.log("useeff delete" + props.match.params.id)
        axios.post("http://localhost:5000/deleteBook/" + props.match.params.id)
            .then(res => {
                axios.get("http://localhost:5000/alldata")
                    .then(res => {

                        setState(res.data)
                        console.log("data set in the state and state length" + state.length)
                    })
                    .catch(err => {
                        console.log("error has occured")
                    })
            })
            .catch(err => {
                console.log("error has occured")
            })
    }, [props.match.params.id])


    return (
        <div>
            <DisplayData Books={state} />
        </div>
    )
}