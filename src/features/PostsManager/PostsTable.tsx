import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableContainer,
  TableHead,
  Paper,
  TablePagination,
} from "@mui/material";
import { TableCellHeader } from "./PostsTable.styled";
import Row from "./Row";

import { Post } from "repositories/posts.types";

const PAGE_SIZE = 5;

interface PostsTableProps {
  posts: Post[];
}

const PostsTable: React.FC<PostsTableProps> = ({ posts }) => {
  const [page, setPage] = useState(0);
  const [postsInCurrentPage, setPostsInCurrentPage] = useState<Post[]>([]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    const startAt = page * PAGE_SIZE;
    const endAt = (page + 1) * PAGE_SIZE;

    const postsInNewPage = posts.slice(startAt, endAt);

    if (postsInNewPage.length > 0) {
      setPostsInCurrentPage(postsInNewPage);
    } else {
      setPage(page ? page - 1 : 0);
    }
  }, [posts, page]);

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 640 }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCellHeader>Title</TableCellHeader>
            <TableCellHeader>Body</TableCellHeader>
            <TableCellHeader>User Id</TableCellHeader>
            <TableCellHeader>Delete</TableCellHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {postsInCurrentPage.map((post) => (
            <Row key={post.id} post={post} />
          ))}
        </TableBody>
      </Table>
      <TablePagination
        sx={{ position: "sticky", bottom: 0, backgroundColor: "white" }}
        rowsPerPage={PAGE_SIZE}
        rowsPerPageOptions={[PAGE_SIZE]}
        component="div"
        page={page}
        onPageChange={handleChangePage}
        count={posts.length}
      />
    </TableContainer>
  );
};

export default PostsTable;
