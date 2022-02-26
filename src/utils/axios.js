import axios from "axios";
import router from "@/router";
import store from "@/store";

const request = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front.itheima.net/",
  timeout: 5000,
});

request.interceptors.request.use(
  (config) => {
    const { token } = store.state.user.profile;
    token ? (config.headers.Authorization = `Bearer ${token}`) : null;
    return config;
  },
  (err) => {
    return new Promise.reject(err);
  }
);

request.interceptors.response.use(
  (res) => res.data,
  (err) => {
    if (err.response && err.response.status === 401) {
      store.commit("user/setProfile", {});
      const fullPath = encodeURIComponent(router.currentRoute.value.fullPath);
      router.push("/login?redirect" + fullPath);
    }
    return new Promise.reject(err);
  }
);

export default (url, method, data) => {
  return request({
    url,
    method,
    [method.toLowerCase() === "get" ? "params" : "data"]: data,
  });
};
