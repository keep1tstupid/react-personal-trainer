import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CustomersView from "./views/CustomersView";
import TrainingsView from "./views/TrainingsView";
import CalendarView from "./views/CalendarView";
import StatisticsView from "./views/StatisticsView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={CustomersView} />
          <Route path="/customersList" component={CustomersView}/>
          <Route path="/trainingsList" component={TrainingsView}/>
          <Route path="/calendar" component={CalendarView}/>
          <Route path="/statistics" component={StatisticsView}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
