import { Post } from "types/posts.types";

const API_URL = "https://jsonplaceholder.typicode.com";

export const getAllPosts = async (): Promise<Post[]> => {
  const params = new URLSearchParams({_delay: "5000"})
  return fetch(`${API_URL}/posts?${params}`)
    .then((response) => response.json())
    .then((posts) => posts as Post[]);
};

export const deletePost = (postId: number) => {
  return fetch(`${API_URL}/posts/${postId}`, {
    method: "DELETE",
  });
};

export const createPost = async (post: Post) => {
  fetch(`${API_URL}/posts`, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};
