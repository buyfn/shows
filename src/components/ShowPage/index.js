import { connect } from 'react-redux';

import { fetchShowRequest } from '../../actions';

import ShowPage from './ShowPage';

const mapStateToProps = (state) => ({
  ...state.show,
});

const mapDispatchToProps = dispatch => ({
  fetchShows: (id) => dispatch(fetchShowRequest(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);