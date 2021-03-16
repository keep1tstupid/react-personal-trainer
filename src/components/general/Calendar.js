import { Calendar, momentLocalizer  } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { Container } from "react-bootstrap";
import { useDispatch, connect } from "react-redux";
import { fetchAllTrainings } from "../../redux/actions";
import React, {useEffect} from "react";


const MyCalendar = (props) => {
  const localizer = momentLocalizer(moment);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllTrainings());
  }, [dispatch]);


  return (
    <Container className="mt-3">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView='month'
        events={props.events}
        style={{ height: 500, width: '95%' }}
      />
    </Container>
  );
}

export default connect(
  state => {
    return {
      events: state.trainings.trainingData.map(item => {
        return {
          id: item.id,
          title: item.activity + ' with ' + item.customerName,
          start: moment(item.date).toDate(),
          end: moment(item.date).clone().add(item.duration, 'minutes').toDate(),
          allDay: false,
        }
      })
    }
  }, {}
)(MyCalendar);
