import { render, screen, within } from "setupTests";
import userEvent from "@testing-library/user-event";
import React from "react";
import NewPostForm from ".";

describe("NewPostForm", () => {
  it("calls onSubmit with valid data when form is submitted", () => {
    const onSubmit = jest.fn();
    const postTitle = "Title";
    const postBody = "Body";

    render(<NewPostForm onSubmit={onSubmit} onCancel={jest.fn()} />);
    const titleInput = within(screen.getByLabelText("post-title")).getByRole(
      "textbox"
    );
    const bodyInput = within(screen.getByLabelText("post-body")).getByRole(
      "textbox"
    );
    const submitButton = screen.getByText("Create");

    userEvent.type(titleInput, postTitle);
    userEvent.type(bodyInput, postBody);
    userEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledWith({ title: postTitle, body: postBody });
  });

  it("does not call onSubmit when form is not valid", () => {
    const onSubmit = jest.fn();

    render(<NewPostForm onSubmit={onSubmit} onCancel={jest.fn()} />);
    const submitButton = screen.getByText("Create");

    userEvent.click(submitButton);

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("shows a hint when form is not valid and user has tried to submit", () => {
    render(<NewPostForm onSubmit={jest.fn()} onCancel={jest.fn()} />);
    const submitButton = screen.getByText("Create");

    userEvent.click(submitButton);

    const hint = screen.getByText("Title is required");

    expect(hint).toBeInTheDocument();
  })

  it('calls onCancel when "Cancel" button is clicked', () => {
    const onCancel = jest.fn();

    render(<NewPostForm onSubmit={jest.fn()} onCancel={onCancel} />);
    const cancelButton = screen.getByText("Cancel");

    userEvent.click(cancelButton);

    expect(onCancel).toHaveBeenCalled();
  });
});
