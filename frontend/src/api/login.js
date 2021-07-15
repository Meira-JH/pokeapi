import axios from "axios";

export const login = async (user) => {
  try {
    console.log(user)
    const fetchResponse = await axios.post(
      `${process.env.LOCAL_HOST}/login/`,
      user
    );
    console.log(fetchResponse)

    return fetchResponse;
  } catch (error) {
    console.error(error);
    return error.response;
  }
};
