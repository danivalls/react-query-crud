import React, { useEffect, useState } from "react";
import { TableCellHeader, NoDataContainer } from "./PostsTable.styled";
import Row from "./Row";
import Spinner from "components/Spinner";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  TableHead,
  Paper,
  TablePagination,
} from "@mui/material";

import { Post } from "types/posts.types";

const PAGE_SIZE = 5;

interface PostsTableProps {
  posts: Post[];
  isLoading?: boolean;
}

const PostsTable: React.FC<PostsTableProps> = ({ posts, isLoading }) => {
  const [page, setPage] = useState(0);
  const [postsInCurrentPage, setPostsInCurrentPage] = useState<Post[]>([]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    const startAt = page * PAGE_SIZE;
    const endAt = (page + 1) * PAGE_SIZE;

    const postsInNewPage = posts.slice(startAt, endAt);

    setPostsInCurrentPage(postsInNewPage);

    if (!postsInNewPage.length) {
      setPage(page ? page - 1 : 0);
    }
  }, [posts, page]);

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader sx={{ height: 500, maxHeight: 500 }}>
        <TableHead>
          <TableRow>
            <TableCellHeader>Title</TableCellHeader>
            <TableCellHeader>Body</TableCellHeader>
            <TableCellHeader align='center'>User Id</TableCellHeader>
            <TableCellHeader align='center'>Actions</TableCellHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {postsInCurrentPage.length ? (
            postsInCurrentPage.map((post) => <Row key={post.id} post={post} />)
          ) : (
            <TableRow>
              <TableCell colSpan={4}>
                <NoDataContainer>
                  {isLoading ? <Spinner size={100} /> : "No posts found"}
                </NoDataContainer>
              </TableCell>
            </TableRow>
          )}
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
