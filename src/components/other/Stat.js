import React from 'react';
import {connect} from "react-redux";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Container, Jumbotron } from "react-bootstrap";


const Stat = (props) => {
  const sum = (arr) => arr.reduce((sum, curr) => sum + curr, 0);
  const avg = (arr) => sum(arr) / arr.length;

  const activities = props.trainings
    .map((item) => ({
      name: item.activity,
      duration: item.duration,
    }))
    .reduce((acc, item) => {
      if (acc[item.name]) {
        acc[item.name].push(item.duration);
      } else {
        acc[item.name] = [item.duration];
      }

      return acc;
    }, {})

  const averages = Object.keys(activities)
    .reduce((acc, key) => {
      acc[key] = avg(activities[key]);
      return acc;
    }, {});

  const data =  Object.keys(activities)
    .reduce((acc, key) => {
      acc.push({ name: key, avg: averages[key] })
      return acc;
    },[])

  //console.log('data: ', data);

  return (
    <Container className={'m-3'}>
      <Jumbotron>
        <Container>
          <h3> Average time chart </h3>
          <p> The chart below shows the average time (in minutes)
            spent by our customers on each type of activities. </p>
        </Container>
      </Jumbotron>
      <BarChart
        width={600}
        height={500}
        data={data}
      >
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip />
        <Bar dataKey="avg" fill="#82ca9d"/>
      </BarChart>
    </Container>
  )
}

export default connect(
  state => {
    return { trainings: state.trainings.trainingData }
  }, {}
)(Stat);