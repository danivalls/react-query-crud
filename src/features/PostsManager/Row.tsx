import React from "react";
import { TableRow, TableCell, Button } from "@mui/material";
import { Post } from "types/posts.types";
import useDeletePost from "./useDeletePost";

interface RowProps {
  post: Post;
}

const Row: React.FC<RowProps> = ({ post }) => {
  const { removePost, isDeleting } = useDeletePost();

  return (
    <TableRow>
      <TableCell>{post.title}</TableCell>
      <TableCell>{post.body}</TableCell>
      <TableCell>{post.userId}</TableCell>
      <TableCell>
        <Button
          variant="outlined"
          color="error"
          sx={{ width: "8rem" }}
          onClick={() => removePost(post.id)}
        >
          {isDeleting ? "Deleting..." : "Delete"}
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default Row;
