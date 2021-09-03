import axios from "axios"

const TIMEOUT = 10 * 1000
const baseURL = ""
const instance = axios.create({
  timeout: TIMEOUT,
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    token: ""
  }
});

const request = ({
  url = "",
  data = {},
  config = { showLoading: true },
  method = "GET"
}) => {
  let timestamp = new Date().getTime();
  url = url.indexOf("?") > -1 ? `${url}&timestamp=${timestamp}` : `${url}?timestamp=${timestamp}`;

  if (method == "GET") {
    return instance({ url, params: data, method, config });
  } else {
    return instance({ url, data, method, config });
  }
};

export default request;