import React from 'react'
import { Link } from 'react-router-dom'

const Posts = props => {
  const { posts } = props
  return (
    <div>
      {Object.keys(posts).map(id =>
        <div className="box" key={id}>
          <Link to={`/post/${id}`}>
            <p>
              <strong>
                {posts[id].title}
              </strong>
            </p>
          </Link>
          <p onClick={() => props.deletePost(id)}>
            {posts[id].body}
          </p>
        </div>
      )}
    </div>
  )
}

export default Posts
