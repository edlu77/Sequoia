import * as CommentApiUtil from '../util/comments_api_util';
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

const receiveComments = (payload) => {
  return ({
    type: RECEIVE_ALL_COMMENTS,
    payload: payload,
  })
};

const receiveComment = (comment) => {
  return ({
    type: RECEIVE_COMMENT,
    comment: comment,
  })
};

export const fetchComments = (parentId) => dispatch => {
  return CommentApiUtil.fetchComments(parentId).then(
    (payload) => dispatch(receiveComments(payload))
  )
};

export const fetchComment = (id) => {
  return CommentApiUtil.fetchComment(id).then(
    (comment) => dispatch(receiveComment(comment))
  )
};

export const createComment = (comment) => dispatch => {
  return CommentApiUtil.createComment(comment).then(
    (comment) => dispatch(receiveComment(comment))
  )
};
