import React, { useState } from "react";

export default function displayDocs() {

    const [state, setState] = useState({
        booktitle: "",
        author: "",
        formate: "",
        Topic: "",
        state: "",
        deaths: 0,
        cases: 0,
        date: "",
        PubYear: 1990,
    });

    return (
        <div style={{ marginTop: 10 }}>
            <h3>Add Data</h3>
            <form method="Post">
                <div className="form-group">
                    <label>Enter State: </label>
                    <input className="form-control"
                        type="text" name="state"
                        value={state.state} />
                </div>
                <div className="form-group">
                    <label>Enter Date: </label>
                    <input className="form-control"
                        type="date" name="date"
                        value={state.date} />
                </div>
            </form>
        </div>
    )
}