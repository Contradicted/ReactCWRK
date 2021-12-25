import React, { useState } from "react";
import axios from 'axios';

export default function InsertData() {
    let url = "http://localhost:5000/"
    const [state, setState] = useState({
        state: "",
        deaths: 0,
        cases: 0,
        date: "",
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
        const coviddata = {
            state: state.state,
            deaths: state.deaths,
            cases: state.cases,
            date: state.date,
        }

        axios.post(url + "adddata", coviddata)
            .then(res => console.log(res.data));
    }

    return (
        <div style={{ marginTop: 10 }}>
            <h3>Add Data</h3>
            <form onSubmit={OnSubmit} method="Post">
                <div className="form-group">
                    <label>State: </label>
                    <input className="form-control"
                        type="text" name="state"
                        value={state.state}
                        onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label for="date">Date: </label>
                    <input className="form-control"
                        type="date" name="date" format="yyyy-mm-dd" value={state.date}
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