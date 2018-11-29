export const fetchComments = (parentId) => {
  return $.ajax({
    method: 'GET',
    url: 'api/comments',
    data: { parentId },
  })
};

export const fetchComment = (id) => {
  return $.ajax ({
    method: 'GET',
    url: `api/comments/${id}`,
  })
}

export const createComment = (comment) => {
  return $.ajax({
    method: "POST",
    url: '/api/comments',
    data: { comment },
  })
};

export const updateComment = (comment) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/comments/${comment.id}`,
    data: { comment },
  })
};

export const deleteComment = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/comments/${id}`,
  })
};
