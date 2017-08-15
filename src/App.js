import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './actions'
import Main from './components/Main'

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
    categories: state.categories
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App
