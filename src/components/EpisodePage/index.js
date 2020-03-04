import { connect } from 'react-redux';

import EpisodePage from './EpisodePage';

const mapStateToProps = (state) => ({
  ...state.episode,
});

export default connect(mapStateToProps)(EpisodePage);
