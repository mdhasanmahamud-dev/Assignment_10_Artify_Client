import SectionTitle from "../../../components/SectionTitle";
import EventCard from "./EventCard";

const Events = () => {
  return (
    <div data-aos="zoom-in" className="py-10 bg-gray-100 dark:bg-black">
      <SectionTitle
        title="Upcoming Events"
        subTitle="Stay updated with our latest creative events"
      />
      <EventCard />
    </div>
  );
};

export default Events;
