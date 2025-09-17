import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import PostItem from "../components/PostItem";
import { Post } from "../types/post";

const mockPost: Post = {
  id: 1,
  title: "Test Post",
  body: "This is a test post.",
};

describe("PostItem", () => {
  test("renders post title and body", () => {
    render(
      <Provider store={store}>
        <PostItem post={mockPost} />
      </Provider>
    );
    expect(screen.getByText("Test Post")).toBeInTheDocument();
    expect(screen.getByText("This is a test post.")).toBeInTheDocument();
  });

  test("shows edit form when edit button is clicked", () => {
    render(
      <Provider store={store}>
        <PostItem post={mockPost} />
      </Provider>
    );
    fireEvent.click(screen.getByText("Edit"));
    expect(screen.getByLabelText("Title")).toBeInTheDocument();
  });
});