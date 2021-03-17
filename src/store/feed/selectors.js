export const selectFeedLoading = (reduxState) => {
  return reduxState.feed.loading;
};

export const selectFeedPosts = (reduxState) => {
  return reduxState.feed.posts;
};
