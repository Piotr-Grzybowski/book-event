import { connect } from 'react-redux';
import Form from './Form';
import { setValue, sendBooking, getBooking, getMessage, getErrors} from '../../redux/bookingRedux';

const mapStateToProps = (state) => ({
  bookingData: getBooking(state),
  message: getMessage(state),
  errors: getErrors(state)
});

const mapDispatchToProps = (dispatch) => ({
  sendBooking: (data) => dispatch(sendBooking(data)),
  setValue: (value) => dispatch(setValue(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);