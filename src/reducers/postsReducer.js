import constants from '../utils/constants'

const initialState = {
  '8xf0y6ziyjabvozdd253nd': {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'react',
    voteScore: 6,
    deleted: false
  },
  '6ni6ok3ym7mf1p33lnez': {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'redux',
    voteScore: -5,
    deleted: false
  }
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_POST:
      const { id } = action.payload
      const newPost = {
        [id]: action.payload
      }
      return { ...state, ...newPost }
    case constants.DELETE_POST:
      return state
    default:
      return state
  }
}

export default postsReducer
