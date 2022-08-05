import React, { useState } from "react";
import { FiltersQuery } from "types/filters.types";

import Filters from "./Filters";
import PostsTable from "./PostsTable";
import useFetchPosts from "./useFetchPosts";

const PostsManager: React.FC = () => {
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

export default PostsManager;
