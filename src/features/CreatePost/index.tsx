import React, { useState } from "react";
import { Button, Modal, Fade } from "@mui/material";
import { FormContainer } from "./CreatePost.styled";
import NewPostForm from "./NewPostForm";
import { Post } from "types/posts.types";
import useCreatePost from "./useCreatePost";

const USER_ID = 1; // Fake current user id

const CreatePost = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const { addPost, isLoading } = useCreatePost();

  const handleFormSubmit = (postData: { title: string; body: string }) => {
    const id = Math.floor(Math.random() * 1000000); // In a real environment, this would be a database id
    const userId = USER_ID;

    const post: Post = { id, userId, ...postData };

    addPost(post, () => setModalIsVisible(false));
  };

  return (
    <>
      <Button variant="contained" onClick={() => setModalIsVisible(true)}>
        Create new post
      </Button>
      <Modal open={modalIsVisible} onClose={() => setModalIsVisible(false)}>
        <Fade in={modalIsVisible}>
          <FormContainer>
            <h2>Create post</h2>
            <NewPostForm
              onSubmit={handleFormSubmit}
              onCancel={() => setModalIsVisible(false)}
              isLoading={isLoading}
            />
          </FormContainer>
        </Fade>
      </Modal>
    </>
  );
};

export default CreatePost;
