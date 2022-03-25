import axios from "./axios.js";
export const getMenu = () => {
  return axios.request({
    url: "/menu",
  });
};
export const Table = () => {
  return axios.request({
    url: "/home/table",
  });
};
export const inOut = () => {
  return axios.request({
    url: "/home/inOut",
  });
};

export const chart = () => {
  return axios.request({
    url: "/home/chart",
  });
};

export const bar = () => {
  return axios.request({
    url: "/home/bar",
  });
};

export const pie = () => {
  return axios.request({
    url: "/home/pie",
  });
};
