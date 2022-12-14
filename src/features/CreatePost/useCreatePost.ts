import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "repositories/posts";
import { Post, PostFormData } from "types/posts.types";

const USER_ID = 1; // Fake current user id

const useCreatePost = () => {
  const { mutate, isLoading } = useMutation(createPost);
  const queryClient = useQueryClient();

  const addPost = (postData: PostFormData, onSuccess: () => void) => {
    const id = Math.floor(Math.random() * 1000000); // In a real environment, this would be a database id
    const userId = USER_ID;

    const post: Post = { id, userId, ...postData };

    mutate(post, {
      onSuccess: (createdPost) => {
        queryClient.setQueryData(["posts"], (prevPosts?: Post[]) => [
          ...(prevPosts || []),
          createdPost,
        ]);
        onSuccess();
        /*
          In a real environment we would refetch the posts by invalidating the cache with:
          queryClient.invalidateQueryData(["posts"]);
        */
      },
    });
  };

  return { addPost, isLoading };
};

export default useCreatePost;
