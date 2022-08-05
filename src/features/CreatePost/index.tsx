import { Add as AddIcon } from "@mui/icons-material";
import { Button, Fade, Modal } from "@mui/material";
import React, { useState } from "react";
import { PostFormData } from "types/posts.types";

import { FormContainer } from "./CreatePost.styled";
import NewPostForm from "./NewPostForm";
import useCreatePost from "./useCreatePost";

const CreatePost: React.FC = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const { addPost, isLoading } = useCreatePost();

  const handleFormSubmit = (postData: PostFormData) => {
    addPost(postData, () => setModalIsVisible(false));
  };

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setModalIsVisible(true)}
        startIcon={<AddIcon />}
      >
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
