import React from "react";
import { Providers } from "providers";
import PostsManager from "features/PostsManager";
import CreatePost from "features/CreatePost";
import { Container, Header } from "App.styled";

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
