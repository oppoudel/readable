import React from 'react'
const PostDetail = props => {
  const { posts, comments, postId } = props
  //const postComments = props.comments[postId] || []
  return (
    <div>
      {Object.keys(posts).filter(id => id === postId).map(id =>
        <div className="box" key={id}>
          <p>
            <strong>
              {posts[id].title}
            </strong>
          </p>
          <p>
            {posts[id].body}
          </p>
          <div className="columns">
            <div className="column is-4 is-offset-8">
              <p>
                Written By: {posts[id].author}
              </p>
              <span className="button" onClick={props.deletePost}>
                {posts[id].voteScore} Votes
              </span>
            </div>
          </div>
        </div>
      )}
      {Object.keys(comments).filter(id => comments[id].parentId === postId).map(id =>
        <div key={id}>
          <p>
            {comments[id].body}
          </p>
          <p>
            By- {comments[id].author}
          </p>
        </div>
      )}
    </div>
  )
}

export default PostDetail
