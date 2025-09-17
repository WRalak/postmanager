import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import type { Post, PostFormData } from "../types/post";
import { useCreatePostMutation, useUpdatePostMutation } from "../store/postsSlice";

interface PostFormProps {
  post?: Post;
  onClose?: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ post, onClose }) => {
  const [createPost] = useCreatePostMutation();
  const [updatePost] = useUpdatePostMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormData>({
    defaultValues: post ? { title: post.title, body: post.body } : { title: "", body: "" },
  });

  const onSubmit: SubmitHandler<PostFormData> = async (data) => {
    try {
      if (post) {
        await updatePost({ id: post.id, post: data }).unwrap();
        toast.success("Post updated successfully!");
      } else {
        await createPost(data).unwrap();
        toast.success("Post created successfully!");
      }
      onClose?.();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to save post.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          {...register("title", { required: "Title is required", minLength: { value: 3, message: "Title must be at least 3 characters" } })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium">Body</label>
        <textarea
          {...register("body", { required: "Body is required", minLength: { value: 10, message: "Body must be at least 10 characters" } })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300"
        />
        {errors.body && <p className="text-red-500 text-sm">{errors.body.message}</p>}
      </div>
      <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md">
        {post ? "Update" : "Create"} Post
      </button>
    </form>
  );
};

export default PostForm;