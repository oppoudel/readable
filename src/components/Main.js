import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bulma/css/bulma.css'
import * as BlogsApi from '../utils/api'
import Posts from './Posts'
import PostDetail from './PostDetail'
import Category from './Category'

class Main extends Component {
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
      <Router>
        <div>
          <nav className="hero is-dark">
            <div className="container navbar-brand title is-size-3">Readable</div>
          </nav>
          <div className="container">
            <Route exact path="/" render={() => <Posts {...this.props} />} />
            <Route path="/category/:categoryId" component={Category} />
            <Route
              path="/post/:postId"
              render={({ match }) =>
                <PostDetail
                  posts={this.props.posts}
                  postId={match.params.postId}
                  comments={this.props.comments}
                  deletePost={this.props.deletePost}
                />}
            />
          </div>
        </div>
      </Router>
    )
  }
}

export default Main
