"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { eventSignUp, removeSignUp } from "@/lib/actions/event";

interface Props {
  userId: string;
  eventId: string;
  tickets: {
    available: boolean;
    message: string;
  };
}

const EventSignUp = ({
  userId,
  eventId,
  tickets: { available, message },
}: Props) => {
  const [alterSignUp, setAlterSignUp] = useState(false);
  const [signedUp, setSignedUp] = useState(false);

  const handleEventSignUp = async () => {
    if (!available) {
      toast(message);
    }

    if (!signedUp) {
      setAlterSignUp(true);

      try {
        const result = await eventSignUp({ eventId, userId });

        if (result.success) {
          toast("You have signed up for the event");
          setSignedUp(true);
        } else {
          toast(result.error);
        }
      } catch (error) {
        toast("An error occurred while signing up for the event");
      } finally {
        setAlterSignUp(false);
      }
    } else {
      setAlterSignUp(true);

      try {
        const result = await removeSignUp({ eventId, userId });

        if (result.success) {
          toast("You are no longer signed up for the event");
          setSignedUp(false);
        } else {
          toast(result.error);
        }
      } catch (error) {
        toast("An error occurred");
      } finally {
        setAlterSignUp(false);
      }
    }
  };

  return (
    <Button
      className="mt-4 min-h-14 w-fit bg-primary text-dark-950 hover:bg-primary/90"
      onClick={handleEventSignUp}
      disabled={alterSignUp || !available}
    >
      <p className="font-bebas-neue text-xl text-dark-100">
        {signedUp ? "remove sign up" : "sign up"}
      </p>
    </Button>
  );
};

export default EventSignUp;
