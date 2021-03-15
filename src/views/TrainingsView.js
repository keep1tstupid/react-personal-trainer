import React from "react";
import AppHeader from "../components/general/AppHeader";
import TrainingsList from "../components/trainings/TrainingsList";
import AddTraining from "../components/trainings/AddTraining";
import {Container} from "react-bootstrap";
import DeleteTraining from "../components/trainings/DeleteTraining";

const TrainingsView = () => {

  return (
    <div>
      <AppHeader/>
      <Container className={'m-3'}>
        <AddTraining/>
        <DeleteTraining/>
      </Container>
      <TrainingsList/>
    </div>
  )
}

export default TrainingsView;
