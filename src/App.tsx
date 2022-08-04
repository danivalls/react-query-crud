import React from "react";
import { Providers } from "providers";
import PostsManagement from "features/PostsManagement";
import CreatePost from "features/CreatePost";
import { Container } from "App.styled";

const App = () => {
  return (
    <Providers>
      <Container>
        <CreatePost />
        <PostsManagement />
      </Container>
    </Providers>
  );
};

export default App;
