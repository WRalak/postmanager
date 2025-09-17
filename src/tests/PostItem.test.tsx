import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import PostList from "../components/PostList";
import { postsApi } from "../store/postsSlice";

describe("PostList", () => {
  test("filters posts by search term", async () => {
    // Mock the API response
    const mockPosts = [
      { id: 1, title: "Test Post 1", body: "Body 1" },
      { id: 2, title: "Another Post", body: "Body 2" },
    ];
    jest.spyOn(postsApi, "useGetPostsQuery").mockReturnValue({
      data: mockPosts,
      isLoading: false,
      error: null,
    } as any);

    render(
      <Provider store={store}>
        <PostList />
      </Provider>
    );

    // Check initial render
    expect(screen.getByText("Test Post 1")).toBeInTheDocument();
    expect(screen.getByText("Another Post")).toBeInTheDocument();

    // Perform search
    const searchInput = screen.getByPlaceholderText("Search posts by title...");
    fireEvent.change(searchInput, { target: { value: "Test" } });

    // Wait for debounce (simplified for test)
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Only "Test Post 1" should be visible
    expect(screen.getByText("Test Post 1")).toBeInTheDocument();
    expect(screen.queryByText("Another Post")).not.toBeInTheDocument();
  });
});