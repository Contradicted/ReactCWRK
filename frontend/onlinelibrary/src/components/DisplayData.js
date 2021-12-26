import { Link } from 'react-router-dom';
const ShowCovidData = (props) => {
    const Data = props.CData
    if (Data.length > 0) {
        return (
            Data.map((data, index) => {
                return (
                    <tr>
                        <td>{data.state}</td>
                        <td>{data.deaths}</td>
                        <td>{data.cases}</td>
                        <td>{data.date}</td>
                        <td>
                            <Link to={"/edit/" + data._id}>Edit</Link>
                        </td>
                        <td>
                            <Link to={"/Delete/" + data._id}>Delete</Link>
                        </td>
                    </tr>
                )
            })
        )
    } else
        return (<h1>No Data Returned </h1>)
}
export default function DisplayData(props) {

    const CovidData = props.CovidData
    return (
        <div>
            <h3>Book List</h3>
            <table className="table table-striped" class="table table-hover" style={{ marginTop: 20 }} >
                <thead>
                    <tr>
                        <th>State</th>
                        <th>Deaths</th>
                        <th>Cases</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    < ShowCovidData CData={CovidData} />
                </tbody>
            </table>
        </div>

    )
}