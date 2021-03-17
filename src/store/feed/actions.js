export const startLoading = () => {
  return {
    type: "feed/startLoading",
  };
};

export const postsFetched = (morePosts) => {
  console.log("in action", morePosts);
  return {
    type: "feed/postsFetched",
    payload: morePosts,
  };
};
