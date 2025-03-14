import { auth } from "@/auth";
import EventList from "@/components/EventList";
import FeaturedEvent from "@/components/FeaturedEvent";

import { getAllEvents } from "@/lib/actions/event";

const Home = async () => {
  const session = await auth();

  const { data } = await getAllEvents();

  return (
    <>
      <FeaturedEvent
        {...data[0]}
        userId={session?.user?.id as string}
        homepage={true}
      />

      <EventList
        title="Latest Events"
        events={data.slice(1)}
        containerClassName="mt-28"
      />
    </>
  );
};

export default Home;
