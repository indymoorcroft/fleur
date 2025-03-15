import { auth, signOut } from "@/auth";
import EventList from "@/components/EventList";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getUserEvents } from "@/lib/actions/event";

const Profile = async () => {
  const session = await auth();

  const { data } = await getUserEvents(session?.user?.id);

  const events = data.map((userEvent: any) => {
    return userEvent.events;
  });

  return (
    <>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
        className="mb-10"
      >
        <Button>Logout</Button>
      </form>

      {!events ? (
        <div className="w-full h-screen">
          <p className="mb-6">
            Events you have signed up for will appear here. You have not signed
            up for any events.
          </p>
          <Button asChild>
            <Link href="/events">Explore Events</Link>
          </Button>
        </div>
      ) : (
        <EventList title="Your Events" events={events} />
      )}
    </>
  );
};

export default Profile;
