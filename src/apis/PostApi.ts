import { api } from "./configs/axiosConfigs";
import { defineCancelApiObject } from "./configs/axiosUtils";

export const PostAPI = {
  get: async function (id: any, cancel = false) {
    const response = await api.request({
      url: `/posts/${id}`,
      method: "GET",
      // retrieving the signal value by using the property name
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });

    // returning the post returned by the API
    return response.data.post;
  },
  getAll: async function (cancel = false) {
    const response = await api.request({
      url: "/posts/",
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.getAll.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data.posts;
  },
  search: async function (name: any, cancel = false) {
    const response = await api.request({
      url: "/posts/search",
      method: "GET",
      params: {
        name: name,
      },
      signal: cancel
        ? cancelApiObject[this.search.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data.posts;
  },
  getLatest: async function (data: any, cancel = false) {
    const response = await api.request({
      url: `/posts/latest`,
      method: "POST",
      data: data,
      // retrieving the signal value by using the property name
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });

    // returning the post returned by the API
    return response.data.response;
  },
  getTrending: async function (cancel = false) {
    const response = await api.request({
      url: `/posts/trending`,
      method: "GET",
      // retrieving the signal value by using the property name
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });

    // returning the post returned by the API
    return response.data.blogs;
  },
  searchByCategory: async function (data: any, cancel = false) {
    const response = await api.request({
      url: `/posts/searchbycategory`,
      method: "POST",
      data: data,
      // retrieving the signal value by using the property name
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });

    // returning the post returned by the API
    return response.data.response;
  },
  searchByQuery: async function (data: any, cancel = false) {
    const response = await api.request({
      url: `/posts/searchbyquery`,
      method: "POST",
      data: data,
      // retrieving the signal value by using the property name
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });

    // returning the post returned by the API
    return response.data.response;
  },
};

// defining the cancel API object for postAPI
const cancelApiObject = defineCancelApiObject(PostAPI);
