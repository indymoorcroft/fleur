import { Button } from "@/components/ui/button";
import Link from "next/link";

const AllEvents = () => {
  return (
    <section className="w-full rounded-2xl bg-white p-7">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">All Events</h2>
        <Button className="bg-purple-600" asChild>
          <Link href="/admin/events/new" className="text-white">
            + Create a New Event
          </Link>
        </Button>
      </div>
      <div className="mt-7 w-full overflow-hidden">
        <p>table</p>
      </div>
    </section>
  );
};

export default AllEvents;
