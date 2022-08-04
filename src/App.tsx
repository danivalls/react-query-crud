import React from "react";
import { Providers } from "providers";
import PostsManager from "features/PostsManager";
import CreatePost from "features/CreatePost";
import { Container } from "App.styled";

const App = () => {
  return (
    <Providers>
      <Container>
        <CreatePost />
        <PostsManager />
      </Container>
    </Providers>
  );
};

export default App;
