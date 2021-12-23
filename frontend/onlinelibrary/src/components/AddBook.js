import React, { useState } from "react";
import axios from 'axios';

export default function Book_Form() {
    let url = "http://localhost:5000/"
    const [state, setState] = useState({
        booktitle: "",
        author: "",
        formate: "",
        Topic: "",
        deaths: 0,
        cases: 0,
        date: { year: 0, month: 0, day: 0 },
        PubYear: 1990,
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value,
        });
    };

    const OnSubmit = (e) => {
        e.preventDefault();
        const bookdata = {
            booktitle: state.booktitle,
            PubYear: state.PubYear,
            author: state.author,
            Topic: state.Topic,
            deaths: state.deaths,
            cases: state.cases,
            date: state.date,
            formate: state.formate
        }

        axios.post(url + "addbooks", bookdata)
            .then(res => console.log(res.data));
    }

    return (
        <div style={{ marginTop: 10 }}>
            <h3>Add Data</h3>
            <form onSubmit={OnSubmit} method="Post">
                <div className="form-group">
                    <label>State: </label>
                    <input className="form-control"
                        type="text" name="booktitle"
                        value={state.booktitle}
                        onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label for="date">Date: </label>
                    <input className="form-control"
                        type="date" name="date" value={state.date}
                        onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>
                        Number of Deaths: {" "}
                        <input className="form-control"
                            type="number" name="deaths" value={state.deaths}
                            onChange={handleChange}
                            min="0" max="50" />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Number of Cases: {" "}
                        <input className="form-control"
                            type="number" name="cases" value={state.cases}
                            onChange={handleChange}
                            min="0" max="50" />
                    </label>
                </div>
                {/* <div>
                    <label>
                        Publication Year (between 1980 and 2020):
                        <input
                            type="range" name="PubYear"
                            min="1980" max="2020" value={state.PubYear}
                            onChange={handleChange} />
                    </label>
                </div> */}

                <div className="form-group">
                    <center>
                        <input type="submit" value="Add Data"
                            className="btn btn-primary" />
                    </center>
                </div>
            </form>
        </div>
    )
}