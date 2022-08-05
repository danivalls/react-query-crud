import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "repositories/posts";
import { FiltersQuery } from "types/filters.types";

const useFetchPosts = (filters: FiltersQuery) => {
  const { data, isLoading } = useQuery(["posts"], getAllPosts, {
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
  });

  const filteredPosts = data?.filter((post) => {
    const filterByTitle = filters.title !== "";
    const filterByUser = filters.userId !== "";

    return (
      (!filterByTitle || post.title.includes(filters.title)) &&
      (!filterByUser || post.userId === Number(filters.userId))
    );
  });

  return { posts: filteredPosts || [], isLoading };
};

export default useFetchPosts;
