export const fetchAnswers = (questionId) => {
  return $.ajax({
    method: "GET",
    url: `/api/questions/${questionId}/answers`,
    data: { questionId }
  })
};

export const fetchAnswer = id => {
  return $.ajax({
    method: "GET",
    url: `/api/answers/${id}`,
  })
};

// export const createAnswer = answer => {
//   return $.ajax({
//     method: "POST",
//     url: '/api/answers',
//     data: { answer },
//   })
// };

export const createAnswer = formData => {
  return $.ajax({
    method: "POST",
    url: '/api/answers',
    data: formData,
    contentType: false,
    processData: false,
  })
};

export const updateAnswer = answer => {
  return $.ajax({
    method: "PATCH",
    url: `/api/answers/${answer.id}`,
    data: formData,
    contentType: false,
    processData: false,
  })
};

export const deleteAnswer = id => {
  return $.ajax({
    method: "DELETE",
    url: `/api/answers/${id}`,
  })
};
