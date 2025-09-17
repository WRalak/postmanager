import { useState } from "react";
import { useGetPostsQuery } from "../store/postsSlice";
import PostItem from "./PostItem";
import PostForm from "./PostForm";
import Pagination from "./Pagination"; 
import { toast } from "react-toastify";

const PostList: React.FC = () => {
  const [page, setPage] = useState(1);
  const limit = 10;
  const { data: posts, isLoading, error } = useGetPostsQuery({ page, limit });

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (error) {
    toast.error("Failed to load posts.");
    return <div className="text-center text-red-500">Error loading posts</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Post Manager</h1>
      <PostForm />
      <div className="space-y-4 mt-4">
        {posts?.length ? (
          posts.map((post) => <PostItem key={post.id} post={post} />)
        ) : (
          <div className="text-center text-gray-500">No posts available</div>
        )}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default PostList;