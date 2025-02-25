import EventList from "@/components/EventList";
import FeaturedEvent from "@/components/FeaturedEvent";
import { sampleEvents } from "@/constants";

const Home = () => (
  <>
    <FeaturedEvent {...sampleEvents[0]} />

    <EventList
      title="Latest Events"
      events={sampleEvents}
      containerClassName="mt-28"
    />
  </>
);

export default Home;
