import React from "react";
import Spinner from "components/Spinner";
import PostsTable from "./PostsTable";
import useFetchPosts from "./useFetchPosts";

const PostsManagement: React.FC = () => {
  const { posts, isLoading } = useFetchPosts();

  if (isLoading) return <Spinner />;

  return <PostsTable posts={posts!} />;
};

export default PostsManagement;
