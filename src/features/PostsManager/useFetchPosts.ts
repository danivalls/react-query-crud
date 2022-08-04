import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "repositories/posts";

const useFetchPosts = () => {
  const { data, isLoading } = useQuery(["posts"], getAllPosts, {
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return { posts: data, isLoading };
};

export default useFetchPosts;