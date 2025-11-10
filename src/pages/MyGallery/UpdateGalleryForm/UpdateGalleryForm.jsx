import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useParams } from "react-router";
import useUserHook from "../../../hooks/useUserHook";
import useArtWorkHook from "../../../hooks/useArtWorkHook";

const UpdateGalleryForm = () => {
  const { id } = useParams();
  const { user } = useUserHook();
  const { artworkDetail, fetchArtworkDetails, updateArtWork, updateLoading } =
    useArtWorkHook();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      imageUrl: "",
      title: "",
      category: "",
      medium: "",
      description: "",
      visibility: "public",
    },
  });

  useEffect(() => {
    fetchArtworkDetails(id);
  }, [id]);

  useEffect(() => {
    if (artworkDetail) {
      reset({
        imageUrl: artworkDetail.imageUrl || "",
        title: artworkDetail.title || "",
        category: artworkDetail.category || "",
        medium: artworkDetail.medium || "",
        description: artworkDetail.description || "",
        visibility: artworkDetail.visibility || "public",
      });
    }
  }, [artworkDetail, reset]);

  const onSubmit = async (data) => {
    try {
      await updateArtWork(id, data);
    } catch (error) {
      console.error("Failed to update artwork:", error);
    }
  };

  return (
    <div className="max-w-xs md:max-w-2xl lg:max-w-3xl mx-auto bg-zinc-900 text-gray-100 p-8 my-12 rounded-md py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Update Artwork</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Image URL & Title */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block mb-1">Image URL</label>
            <input
              type="text"
              placeholder="Enter image URL"
              {...register("imageUrl", { required: "Image URL is required" })}
              className="w-full p-3 rounded-md bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.imageUrl && (
              <p className="text-red-400 text-sm mt-1">
                {errors.imageUrl.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1">Title</label>
            <input
              type="text"
              placeholder="Artwork title"
              {...register("title", { required: "Title is required" })}
              className="w-full p-3 rounded-md bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.title && (
              <p className="text-red-400 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>
        </div>

        {/* Category & Medium */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block mb-1">Category</label>
            <input
              type="text"
              placeholder="e.g., Abstract, Modern, Digital"
              {...register("category", { required: "Category is required" })}
              className="w-full p-3 rounded-md bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.category && (
              <p className="text-red-400 text-sm mt-1">
                {errors.category.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1">Medium / Tools</label>
            <input
              type="text"
              placeholder="e.g., Photoshop, Oil Paint, Blender"
              {...register("medium", { required: "Medium/Tools is required" })}
              className="w-full p-3 rounded-md bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.medium && (
              <p className="text-red-400 text-sm mt-1">
                {errors.medium.message}
              </p>
            )}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1">Description</label>
          <textarea
            rows="4"
            placeholder="Write a short description..."
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full p-3 rounded-md bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
          {errors.description && (
            <p className="text-red-400 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Visibility */}
        <div>
          <label className="block mb-1">Visibility</label>
          <select
            {...register("visibility", { required: "Select visibility" })}
            className="w-full p-3 rounded-md bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
          {errors.visibility && (
            <p className="text-red-400 text-sm mt-1">
              {errors.visibility.message}
            </p>
          )}
        </div>

        {/* User Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block mb-1">User Name</label>
            <input
              type="text"
              value={user?.displayName || "Guest User"}
              readOnly
              className="w-full p-3 rounded-md bg-zinc-700 text-gray-400"
            />
          </div>

          <div>
            <label className="block mb-1">User Email</label>
            <input
              type="email"
              value={user?.email || "guest@example.com"}
              readOnly
              className="w-full p-3 rounded-md bg-zinc-700 text-gray-400"
            />
          </div>
        </div>

        {/* Update Button */}
        <div className="text-center pt-4">
          <button
            type="submit"
            disabled={updateLoading}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              updateLoading
                ? "bg-indigo-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {updateLoading ? "Updating..." : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateGalleryForm;
