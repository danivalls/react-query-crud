import React from "react";
import { render, screen } from "test/testUtils";
import PostsTable from ".";

describe("PostsTable", () => {
  it("should render given posts", () => {
    const posts = [
      { id: 1, title: "title1", body: "body1", userId: 1 },
      { id: 2, title: "title2", body: "body2", userId: 1 },
    ];

    render(<PostsTable posts={posts} />);
    
    posts.forEach((post) => {
      const postTitle = screen.getByText(post.title);
      const postBody = screen.getByText(post.body);

      expect(postTitle).toBeInTheDocument();
      expect(postBody).toBeInTheDocument();
    });
  });

  it("should render spinner when isLoading is true and there are no posts", () => {
    render(<PostsTable posts={[]} isLoading />);

    const spinner = screen.getByRole("progressbar");

    expect(spinner).toBeInTheDocument();
  });

  it("should render a text when isLoading is false but there are no posts", () => {
    render(<PostsTable posts={[]} />);

    const text = screen.getByText("No posts found");

    expect(text).toBeInTheDocument();
  })
});
