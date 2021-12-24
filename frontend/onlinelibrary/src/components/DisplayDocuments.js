import React from 'react';

export default function displayDocs() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3>Add Data</h3>
            <form onSubmit={OnSubmit} method="Post">
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