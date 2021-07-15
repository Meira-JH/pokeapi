import axios from "axios";

export const fetchPokemons = async (limit=20, offset=0) => {
  try {
    const fetchResponse = await axios.get(
      `${process.env.LOCAL_HOST}/pokemon/?offset=${offset}&limit=${limit}}`,
      {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM3YjE3MDJmLWE2N2MtNDhjOC04OWI0LTUwNmQ0ZDE2YzgyNiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjI2MzYxODgwLCJleHAiOjE2MjY0NDgyODB9.Qzdkxp51X4BZEWW6wm-m3CIXlRzFj1HBUFYVk9coS-Q",
        },
      }
    );

    return fetchResponse;
  } catch (error) {
    console.error(error);
    return error.response;
  }
};
