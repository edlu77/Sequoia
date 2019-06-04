export const fetchTopics = () => {
  return $.ajax({
    method: "GET",
    url: "/api/topics",
  })
};

export const fetchTopic = id => {
  return $.ajax({
    method: "GET",
    url: `/api/topics/${id}`,
  })
};

export const followTopic = user => {
  return $.ajax({
    method: "PATCH",
    url: "/api/user",
    data: { user },
  })
};
