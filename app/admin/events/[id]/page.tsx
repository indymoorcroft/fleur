import EventForm from "@/components/admin/EventForm";
import { Button } from "@/components/ui/button";
import { getEventById } from "@/lib/actions/event";
import Link from "next/link";

const UpdateEvent = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const { data } = await getEventById(id);

  return (
    <>
      <Button
        asChild
        className="mb-10 w-fit border border-light-300 bg-white text-xs font-medium text-dark-200 hover:bg-light-300"
      >
        <Link href="/admin/events">Go Back</Link>
      </Button>

      <section className="w-full max-w-2xl">
        <EventForm type="update" event={data[0]} />
      </section>
    </>
  );
};

export default UpdateEvent;
