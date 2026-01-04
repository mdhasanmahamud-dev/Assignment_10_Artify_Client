import StatCard from "../Dashboard/StatCard";
import RecentArtworks from "../Dashboard/RecentArtworks";
import ProfileSummary from "../Dashboard/ProfileSummary"
const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard />
      </div>

      {/* Recent Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RecentArtworks />
        <ProfileSummary />
      </div>
    </div>
  );
};

export default Dashboard;
