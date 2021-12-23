import React, { useEffect, useState } from "react";
import axios from "axios";

function Book_UpDateForm(props) {
    const [state, setState] = useState({
        booktitle: "",
        author: "",
        formate: "",
        deaths: 0,
        cases: 0,
        PubYear: 1990
    });

    let url = "http://localhost:5000/"


    // this is on compunt Did Mount Event analogy
    useEffect(() => {
        axios.get('http://localhost:5000/getbook/' + props.match.params.id)
            .then(res => {
                // set the state variable from the data received from the axios api
                console.log("update fun" + res.data)
                setState(res.data)
            }) //

            .catch(err => {
                console.log("error has occured")
            })
    }, []);



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

            deaths: state.deaths,
            cases: state.cases,
            formate: state.formate

        }

        axios.post(url + "updatebook/" + props.match.params.id, bookdata)
            .then(res => console.log(res.data));


    }
    return (
        <div style={{ marginTop: 10 }}>
            <h3> Update Data Id: {state.booktitle}</h3>
            <form onSubmit={OnSubmit} method="Post">
                <div className="form-group">
                    <label>State: </label>
                    <input className="form-control" type="text" name="booktitle"
                        value={state.booktitle}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Date: </label>
                    <input className="form-control" name="author"
                        value={state.author}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>
                        Number of Deaths :{" "}
                        <input className="form-control"
                            type="number" name="deaths" value={state.deaths}
                            onChange={handleChange} min="0" max="50" />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Number of Cases :{" "}
                        <input className="form-control"
                            type="number" name="cases" value={state.cases}
                            onChange={handleChange} min="0" max="50" />
                    </label>
                </div>

                <br />
                <br />
                {/* <label>
                    Publication Year (between 1980 and 2020):
                    <input
                        type="range"
                        name="PubYear"
                        min="1980"
                        max="2020"
                        value={state.PubYear}
                        onChange={handleChange}
                    />


                </label> */}
                <center>
                    <div className="form-group">
                        <input type="submit" value="Update" className="btn btn-primary" />
                    </div>
                </center>
            </form>

        </div>
    );
}

export default Book_UpDateForm;