import { Container, Header } from "App.styled";
import CreatePost from "features/CreatePost";
import PostsManager from "features/PostsManager";
import { Providers } from "providers";
import React from "react";

const App = () => {
  return (
    <Providers>
      <Container>
        <Header>
          <h1>Post Manager</h1>
          <CreatePost />
        </Header>
        <PostsManager />
      </Container>
    </Providers>
  );
};

export default App;
