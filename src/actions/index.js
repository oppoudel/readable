import { v4 } from 'node-uuid'
import constants from '../utils/constants'

export const addPost = (title, body, owner, category) => ({
  type: constants.ADD_POST,
  payload: {
    id: v4(),
    timestamp: Date.now(),
    title,
    body,
    owner,
    category
  }
})

export const deletePost = id => ({
  type: constants.DELETE_POST,
  id
})

export const addComment = (parentId, body, owner) => ({
  type: constants.ADD_COMMENT,
  id: v4(),
  timestamp: Date.now(),
  parentId,
  body,
  owner
})

export const deleteComment = id => ({
  type: constants.DELETE_COMMENT,
  id
})
