import { columns } from "@/app/admin/events/columns";
import { DataTable } from "@/components/admin/DataTable";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event";
import Link from "next/link";

const AllEvents = async () => {
  const { data } = await getAllEvents();

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
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
};

export default AllEvents;
