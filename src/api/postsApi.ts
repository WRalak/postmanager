import axios from "axios";
import type { Post, PostFormData } from "../types/post";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = async (page: number, limit: number): Promise<Post[]> => {
  const response = await axios.get(`${API_URL}?_page=${page}&_limit=${limit}`);
  return response.data;
};

export const createPost = async (post: PostFormData): Promise<Post> => {
  const response = await axios.post(API_URL, post);
  return response.data;
};

export const updatePost = async (id: number, post: PostFormData): Promise<Post> => {
  const response = await axios.put(`${API_URL}/${id}`, post);
  return response.data;
};

export const deletePost = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};