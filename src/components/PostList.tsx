import { useState, useEffect } from "react";
import { useGetPostsQuery } from "../store/postsSlice";
import PostItem from "./PostItem";
import PostForm from "./PostForm";
import Pagination from "./Pagination";
import { toast } from "react-toastify";
import debounce from "lodash.debounce";

const PostList: React.FC = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const limit = 10;

  // Debounce search input to avoid excessive updates
  useEffect(() => {
    const handler = debounce((value: string) => {
      setDebouncedSearch(value);
      setPage(1); // Reset to first page on new search
    }, 500);
    handler(search);
    return () => handler.cancel(); // Cleanup debounce on unmount
  }, [search]);

  // Fetch posts without search parameter
  const { data: posts, isLoading, error } = useGetPostsQuery({ page, limit });

  // Client-side filtering
  const filteredPosts = posts?.filter((post) =>
    post.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (error) {
    console.error("API Error:", error); // Debug log
    toast.error("Failed to load posts. Please try again.");
    return <div className="text-center text-red-500">Error loading posts</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Post Manager</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search posts by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300"
        />
      </div>
      <PostForm />
      <div className="space-y-4 mt-4">
        {filteredPosts?.length ? (
          filteredPosts.map((post) => <PostItem key={post.id} post={post} />)
        ) : (
          <div className="text-center text-gray-500">
            {debouncedSearch ? "No posts match your search" : "No posts found"}
          </div>
        )}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default PostList;