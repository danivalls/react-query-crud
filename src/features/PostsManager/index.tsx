import React, { useState } from "react";
import PostsTable from "./PostsTable";
import useFetchPosts from "./useFetchPosts";
import Filters from "./Filters";
import { FiltersQuery } from "types/filters.types";

const PostsManagement: React.FC = () => {
  const [filters, setFilters] = useState<FiltersQuery>({
    title: "",
    userId: "",
  });
  const { posts, isLoading } = useFetchPosts(filters);

  return (
    <>
      <Filters onSearch={setFilters} />
      <PostsTable posts={posts} isLoading={isLoading} />
    </>
  );
};

export default PostsManagement;
