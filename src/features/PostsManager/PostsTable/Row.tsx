import { Delete as DeleteIcon } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { Post } from "types/posts.types";

import useDeletePost from "../useDeletePost";

interface RowProps {
  post: Post;
}

const Row: React.FC<RowProps> = ({ post }) => {
  const { removePost, isDeleting } = useDeletePost();

  return (
    <TableRow>
      <TableCell>{post.title}</TableCell>
      <TableCell>{post.body}</TableCell>
      <TableCell align="center">{post.userId}</TableCell>
      <TableCell align="center">
        <LoadingButton
          loading={isDeleting}
          variant="text"
          color="error"
          onClick={() => removePost(post.id)}
        >
          <DeleteIcon />
        </LoadingButton>
      </TableCell>
    </TableRow>
  );
};

export default Row;
