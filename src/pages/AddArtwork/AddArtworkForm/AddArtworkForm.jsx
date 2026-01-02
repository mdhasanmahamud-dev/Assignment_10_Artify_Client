import { useForm } from "react-hook-form";
import useUserHook from "../../../hooks/useUserHook";
import useArtWorkHook from "../../../hooks/useArtWorkHook";

const AddArtworkForm = () => {
  const { user } = useUserHook();
  const { latestArtWorkLoading, addNewArt } = useArtWorkHook();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Form submit function
  const onSubmit = async (data) => {
    console.log("Submitted Artwork Data:", data);
    try {
      await addNewArt(data);
      reset();
    } catch (error) {
      console.error("Error submitting artwork:", error);
    }
  };

  return (
    <div className="max-w-xs md:max-w-2xl lg:max-w-3xl mx-auto bg-slate-200 dark:bg-zinc-900 text-gray-950 dark:text-gray-100 p-8 rounded-md py-10  ">
      <h2 className="text-3xl font-bold text-center mb-6">Add New Artwork</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Image URL & Title */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block mb-1 font-medium">Image URL</label>
            <input
              type="text"
              placeholder="Enter image URL"
              {...register("imageUrl", { required: "Image URL is required" })}
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-300 dark:border-zinc-700 transition duration-150"
            />
            {errors.imageUrl && (
              <p className="text-red-600 dark:text-red-400 text-sm mt-1">
                {errors.imageUrl.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input
              type="text"
              placeholder="Artwork title"
              {...register("title", { required: "Title is required" })}
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-300 dark:border-zinc-700 transition duration-150"
            />
            {errors.title && (
              <p className="text-red-600 dark:text-red-400 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>
        </div>

        {/* Category & Medium */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block mb-1 font-medium">Category</label>
            <input
              type="text"
              placeholder="e.g., Abstract, Modern, Digital"
              {...register("category", { required: "Category is required" })}
              // Input Classes
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-300 dark:border-zinc-700 transition duration-150"
            />
            {errors.category && (
              <p className="text-red-600 dark:text-red-400 text-sm mt-1">
                {errors.category.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Medium / Tools</label>
            <input
              type="text"
              placeholder="e.g., Photoshop, Oil Paint, Blender"
              {...register("medium", { required: "Medium/Tools is required" })}
              // Input Classes
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-300 dark:border-zinc-700 transition duration-150"
            />
            {errors.medium && (
              <p className="text-red-600 dark:text-red-400 text-sm mt-1">
                {errors.medium.message}
              </p>
            )}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            rows="4"
            placeholder="Write a short description..."
            {...register("description", {
              required: "Description is required",
            })}
            // Input Classes
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-300 dark:border-zinc-700 transition duration-150"
          ></textarea>
          {errors.description && (
            <p className="text-red-600 dark:text-red-400 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Visibility */}
        <div>
          <label className="block mb-1 font-medium">Visibility</label>
          <select
            {...register("visibility", { required: "Select visibility" })}
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-300 dark:border-zinc-700 transition duration-150"
          >
            <option value="" disabled>
              Select
            </option>
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
          {errors.visibility && (
            <p className="text-red-600 dark:text-red-400 text-sm mt-1">
              {errors.visibility.message}
            </p>
          )}
        </div>

        {/* User Info (Read-Only) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block mb-1 font-medium">User Name</label>
            <input
              type="text"
              value={user?.displayName || "Guest User"}
              readOnly
              {...register("userName")}
              // ReadOnly Input Classes
              className="w-full p-3 rounded-md bg-gray-200 dark:bg-zinc-700 text-gray-500 dark:text-gray-400 cursor-not-allowed border border-gray-300 dark:border-zinc-700"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">User Email</label>
            <input
              type="email"
              value={user?.email || "guest@example.com"}
              readOnly
              {...register("userEmail")}
              // ReadOnly Input Classes
              className="w-full p-3 rounded-md bg-gray-200 dark:bg-zinc-700 text-gray-500 dark:text-gray-400 cursor-not-allowed border border-gray-300 dark:border-zinc-700"
            />
          </div>
        </div>

        {/* Add Button */}
        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 transition-colors px-6 py-3 rounded-lg font-semibold text-white disabled:bg-indigo-400 dark:disabled:bg-indigo-700"
            disabled={latestArtWorkLoading}
          >
            {latestArtWorkLoading ? "Loading..." : "Add Artwork"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddArtworkForm;
