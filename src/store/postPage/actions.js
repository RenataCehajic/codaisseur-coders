// src/store/postPage/actions.js
import axios from "axios";
import { API_URL } from "../../config";

// const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export function startLoadingPost() {
  return {
    type: "postPage/startLoadingPost",
  };
}

export function postFullyFetched(data) {
  return {
    type: "postPage/postFullyFetched",
    payload: data,
  };
}

export function fetchPost(id) {
  return async function thunk(dispatch, getState) {
    dispatch(startLoadingPost());

    console.log(API_URL);
    console.log("Hello from actions");
    const [postResponse, commentsResponse] = await Promise.all([
      axios.get(`${API_URL}/posts/${id}`),
      axios.get(`${API_URL}/posts/${id}/comments`),
    ]);

    console.log(postResponse);
    dispatch(
      postFullyFetched({
        post: postResponse.data,
        comments: commentsResponse.data,
      })
    );
  };
}
