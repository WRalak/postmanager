import { useState } from "react";
import { toast } from "react-toastify";
import type { Post } from "../types/post";
import { useDeletePostMutation } from "../store/postsSlice";
import PostForm from "./PostForm";

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [deletePost] = useDeletePostMutation();

  const handleDelete = async () => {
    try {
      await deletePost(post.id).unwrap();
      toast.success("Post deleted successfully!");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to delete post.");
    }
  };

  return (
    <div className="border p-4 rounded-md shadow-sm">
      {isEditing ? (
        <PostForm post={post} onClose={() => setIsEditing(false)} />
      ) : (
        <div>
          <h2 className="text-lg font-bold">{post.title}</h2>
          <p className="text-gray-600">{post.body}</p>
          <div className="mt-2 space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-3 py-1 rounded-md"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-3 py-1 rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostItem;