import { createPost } from "repositories/posts";
import { Post } from "types/posts.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreatePost = () => {
  const { mutate, isLoading } = useMutation(createPost);
  const queryClient = useQueryClient();

  const addPost = (post: Post, onSuccess: () => void) =>
    mutate(post, {
      onSuccess: () => {
        queryClient.setQueryData(["posts"], (prevPosts?: Post[]) => [
          ...(prevPosts || []),
          post,
        ]);
        onSuccess();
      },
    });

  return { addPost, isLoading };
};

export default useCreatePost;
