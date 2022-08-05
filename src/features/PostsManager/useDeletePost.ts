import { useQueryClient, useMutation } from "@tanstack/react-query";
import { Post } from "types/posts.types";
import { deletePost } from "repositories/posts";

const useDeletePost = () => {
  const queryClient = useQueryClient();
  const { mutate: remove, isLoading: isDeleting } = useMutation(deletePost);

  const removePost = (postId: number) => {
    remove(postId, {
      onSuccess: () => {
        queryClient.setQueryData(["posts"], (prevPosts?: Post[]) =>
          prevPosts?.filter((post) => post.id !== postId)
        );
        // in a real environment we would invalidate the cache here
      },
    });
  };

  return { removePost, isDeleting };
};

export default useDeletePost;