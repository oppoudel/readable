import React, { Component } from 'react'
import { connect, provider } from 'react-redux'
import 'bulma/css/bulma.css'
import * as BlogsApi from './utils/api'
import Posts from './components/posts'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: null,
      posts: null
    }
  }
  componentWillMount() {
    BlogsApi.getAllCategories().then(categories => this.setState({ categories }))
    BlogsApi.getAllPosts().then(posts => this.setState({ posts }))
  }
  render() {
    return (
      <div className="container">
        <Posts />
      </div>
    )
  }
}

export default App
