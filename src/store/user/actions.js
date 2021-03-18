import axios from "../axios";

// {type, payload} regular actions
//funtion type => thunks => we can do async and dispatch other stuff also

const setLoading = () => ({ type: "user/loading" });

const setToken = (jwt) => ({ type: "user/setToken", payload: jwt });

const loginSuccess = (userData, token) => ({
  type: "user/loginSuccess",
  payload: { userData, token },
});

export const signUp = (name, email, password, history) => async (
  dispatch,
  getState
) => {
  try {
    console.log("thunk", name, email, password);
    dispatch(setLoading());

    const response = await axios.post("/signup", { name, email, password });

    console.log("sign up success!");
    // dispatch(setToken(response.data.jwt));
    history.push("/login");
  } catch (e) {
    console.log(e.message);
  }
};

export const login = (email, password) => async (dispatch, getState) => {
  try {
    dispatch(setLoading());

    const response = await axios.post("/login", { email, password });

    console.log(response);

    const token = response.data.jwt;

    console.log("Login success!");

    const userProfileResponse = await axios.get("/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(userProfileResponse);

    const userData = userProfileResponse.data;

    // dispatch(setToken(token));
    dispatch(loginSuccess(userData, token));
  } catch (e) {
    console.log(e.message);
  }
};
