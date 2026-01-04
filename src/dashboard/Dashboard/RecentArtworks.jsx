import useArtWorkHook from "../../hooks/useArtWorkHook";
import RecentArtworkCard from "./RecentArtworkCard";

const RecentArtworks = () => {
  const { latestArtWorkLoading, latestArtworks } = useArtWorkHook();
  console.log(latestArtworks)
  return (
    <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-xl shadow p-6">
      <h2 className="font-semibold mb-4 text-gray-800 dark:text-white">
        Recent Artworks
      </h2>
      <RecentArtworkCard
        latestArtWorkLoading={latestArtWorkLoading}
        latestArtworks={latestArtworks}
      />
    </div>
  );
};

export default RecentArtworks;
