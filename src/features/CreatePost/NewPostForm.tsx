import React, { FormEvent, useState } from "react";
import { TextField, Button } from "@mui/material";
import { ActionsContainer, Form } from "./NewPostForm.styled";
import { PostFormData } from "types/posts.types";

interface FormProps {
  onSubmit: (postData: PostFormData) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

const NewPostForm: React.FC<FormProps> = ({ onSubmit, onCancel, isLoading }) => {
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
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        helperText={!title.length && isValidating ? "Title is required" : ""}
        error={!title.length && isValidating}
        required
      />
      <TextField
        label="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        helperText={!body.length && isValidating ? "Body is required" : ""}
        error={!body.length && isValidating}
        required
        multiline
        rows={4}
      />
      <ActionsContainer>
        <Button variant="text" color="error" onClick={onCancel} disabled={isLoading}>
          Cancel
        </Button>
        <Button
          variant="contained"
          type="submit"
          onClick={() => setIsValidating(true)}
          disabled={isLoading}
        >
          {isLoading ? 'Creating...' : 'Create'}
        </Button>
      </ActionsContainer>
    </Form>
  );
};

export default NewPostForm;
