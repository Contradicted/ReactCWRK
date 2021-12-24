import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Book_Form from "./components/AddBook";
import Book_UpDateForm from "./components/BookUpdate";
import FncDisplayBooks from "./components/DsplyBk_fncCompt";
import DeleteBook from "./components/Delete_Book";
import displayDocs from "./components/DisplayDocuments";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <center><h2> COVID-19 VACCINATION SYSTEM </h2></center>
          <br />
          <nav className="navbar navbar-expand-xs navbar-light bg-warning px-2">
            <Link to="/" className="navbar-brand"><h4>Add Data</h4></Link>
            <Link to="/DisplayBooksF1" className="navbar-brand"><h4>Display All Data</h4></Link>
          </nav>
          <br />
          <Route path="/" exact component={Book_Form} />
          <Route path="/edit/:id" component={Book_UpDateForm} />
          <Route path="/Delete/:id" component={DeleteBook} />
          <Route path="/DisplayBooksF1" component={FncDisplayBooks} />
          <Route path='/DisplayDocs' component={displayDocs} />
        </div>
      </Router>
    );
  }
}
