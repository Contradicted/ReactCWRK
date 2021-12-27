import axios from "axios";
import React, { useEffect, useState } from "react";

const ShowDocuments = (props) => {

    const Data = props.CData
    if (Data.length > 0) {
        return (
            Data.map((data, index) => {
                return (
                    <tr>
                        <td>{data.cases}</td>
                        <td>{data.deaths}</td>
                    </tr>
                )
            })
        )
    } else
        return (<h1>No Data Returned </h1>)
}

export default function DisplayDocs() {

    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);

    const [CovidData, getDocuments] = useState('');
    const url = "http://localhost:5000/getinfo/"

    useEffect(() => {
        axios.get(url)
            .then(res => {
                getDocuments(res.data)
            })
            .catch(err => {
                console.log("error has occured")
            })
    })

    function getData(val) {
        setData(val.target.value)
        setPrint(false)
    }

    return (
        <>
            <div className="form-group">
                <label>Enter State: </label>
                <input
                    className="form-control" type="text"
                    onChange={getData} name="state" />
                <br></br>
                <button className="btn btn-primary" onClick={() => setPrint(true)}>Show Documents</button>
            </div>

            <div>
                {
                    print ?
                        <div>
                            <div>
                                <p></p>
                                <h3>Showing info on:  <b>{data}</b></h3>
                            </div>

                            <table className="table table-striped" class="table table-hover" style={{ marginTop: 20 }} >
                                <thead>
                                    <tr>
                                        <th>Cases</th>
                                        <th>Deaths</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <ShowDocuments CData={CovidData} />
                                </tbody>
                            </table>
                        </div>
                        : null
                }
            </div>
        </>
    )

}
