import { LoadingButton } from "@mui/lab";
import { Button, TextField } from "@mui/material";
import React, { FormEvent, useState } from "react";
import { PostFormData } from "types/posts.types";

import { ActionsContainer, Form } from "./NewPostForm.styled";

interface NewFormProps {
  onSubmit: (postData: PostFormData) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

const NewPostForm: React.FC<NewFormProps> = ({
  onSubmit,
  onCancel,
  isLoading,
}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isValidating, setIsValidating] = useState(false);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.length > 0 && body.length > 0) {
      onSubmit({ title, body });
    }
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <TextField
        label="Title"
        aria-label="post-title"
        size="small"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        helperText={!title.length && isValidating ? "Title is required" : ""}
        error={!title.length && isValidating}
        required
      />
      <TextField
        label="Body"
        aria-label="post-body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        helperText={!body.length && isValidating ? "Body is required" : ""}
        error={!body.length && isValidating}
        required
        multiline
        rows={4}
      />
      <ActionsContainer>
        <Button
          variant="text"
          color="secondary"
          onClick={onCancel}
          disabled={isLoading}
        >
          Cancel
        </Button>
        <LoadingButton
          loading={isLoading}
          variant="contained"
          type="submit"
          onClick={() => setIsValidating(true)}
          disabled={isLoading}
        >
          Create
        </LoadingButton>
      </ActionsContainer>
    </Form>
  );
};

export default NewPostForm;
