import { signOut } from "@/auth";
import EventList from "@/components/EventList";
import { Button } from "@/components/ui/button";
import { sampleEvents } from "@/constants";
import React from "react";

const Profile = () => {
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

      <EventList title="Your Events" events={sampleEvents} />
    </>
  );
};

export default Profile;
