import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CustomersView from "./views/CustomersView";
import TrainingsView from "./views/TrainingsView";
import CalendarView from "./views/CalendarView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/customersList" component={CustomersView}/>
          <Route path="/trainingsList" component={TrainingsView}/>
          <Route path="/calendar" component={CalendarView}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
