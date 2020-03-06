import { connect } from 'react-redux';
import { fetchShowRequest } from '../../actions';

import ShowPage from './ShowPage';

const mapStateToProps = (state) => ({
  ...state.show,
  fetchingState: state.fetchingState,
  errorMsg: state.errorMsg,
});

const mapDispatchToProps = dispatch => ({
  fetchShow: (id) => dispatch(fetchShowRequest(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
