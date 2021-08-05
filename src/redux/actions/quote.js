import axios from "axios";

export const getQuote = () => {
  return {
    type: "GET_QUOTE",
    payload: axios.get("https://api.kanye.rest/"),
  };
};
