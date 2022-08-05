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
        /*
          In a real environment we would refetch the posts by invalidating the cache with:
          queryClient.invalidateQueryData(["posts"]);
        */
      },
    });
  };

  return { removePost, isDeleting };
};

export default useDeletePost;
