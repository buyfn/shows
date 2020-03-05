import { connect } from 'react-redux';

import { fetchEpisodeRequest } from '../../actions';

import EpisodePage from './EpisodePage';

const mapStateToProps = (state) => ({
  ...state.episode,
  fetchingState: state.fetchingState,
  errorMsg: state.errorMsg
});

const mapDispatchToProps = dispatch => ({
  fetchEpisode: (id) => dispatch(fetchEpisodeRequest(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EpisodePage);
