export default function displayStates() {

    return (
        <div style={{ marginTop: 10 }}>
            <h3>Number of Cases in a Single Day</h3>
            <form method="Post">
                <div className="form-group">
                    <label>Enter Number of Cases: </label>
                    <input className="form-control"
                        type="text" name="no-of-cases" />
                </div>
            </form>
        </div>
    )

}