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
        views={['month','week','day']}
        step={60}
        showMultiDayTimes
        events={props.events}
        startAccessor="start"
        endAccessor="end"
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
          title: item.activity,
          start: moment(item.date).toDate(),
          end: moment(item.date).clone().add(item.duration, 'minutes').toDate(),
        }
      })
    }
  }, {}
)(MyCalendar);
