import { auth } from "@/auth";
import EventList from "@/components/EventList";
import FeaturedEvent from "@/components/FeaturedEvent";
import { db } from "@/database/drizzle";
import { events } from "@/database/schema";
import { desc } from "drizzle-orm";

const Home = async () => {
  const session = await auth();

  const latestEvents = (await db
    .select()
    .from(events)
    .limit(8)
    .orderBy(desc(events.createdAt))) as Listing[];

  return (
    <>
      <FeaturedEvent {...latestEvents[0]} />

      <EventList
        title="Latest Events"
        events={latestEvents.slice(1)}
        containerClassName="mt-28"
      />
    </>
  );
};

export default Home;
