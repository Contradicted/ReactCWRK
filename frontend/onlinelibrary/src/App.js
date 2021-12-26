import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DataUpdate from "./components/UpdateData";
import DisplayCovidData from "./components/DisplayDatabase";
import DeleteCovidData from "./components/DeleteData";
import displayDocs from "./components/DisplayDocuments";
import displayStates from "./components/DisplayStates";
import InsertData from "./components/AddData";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <center><h2> COVID-19 VACCINATION SYSTEM </h2></center>
          <br />
          <nav className="navbar navbar-expand-xs navbar-light bg-warning px-2">
            <Link to="/" className="navbar-brand"><h4>Add Data</h4></Link>
            <Link to="/DisplayData" className="navbar-brand"><h4>Display All Data</h4></Link>
            <Link to="/DisplayDocs" className="navbar-brand"><h4>Display Documents</h4></Link>
            <Link to="/DisplayStates" className="navbar-brand"><h4>Display States</h4></Link>
          </nav>
          <br />
          <Route path="/" exact component={InsertData} />
          <Route path="/edit/:id" component={DataUpdate} />
          <Route path="/Delete/:id" component={DeleteCovidData} />
          <Route path="/DisplayData" component={DisplayCovidData} />
          <Route path='/DisplayDocs' component={displayDocs} />
          <Route path='/DisplayStates' component={displayStates} />
        </div>
      </Router>
    );
  }
}
