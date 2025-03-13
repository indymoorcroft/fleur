import { calendarDate } from "@/lib/utils";
import {
  google,
  outlook,
  office365,
  yahoo,
  ics,
  CalendarEvent,
} from "calendar-link";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";

const CalendarLink = ({
  title,
  venue,
  location,
  description,
  startDateTime,
  endDateTime,
}: Listing) => {
  const [isOpen, setIsOpen] = useState(false);

  const event: CalendarEvent = {
    title,
    location: `${venue}, ${location}`,
    description,
    start: calendarDate(startDateTime),
    end: calendarDate(endDateTime),
  };

  const calendarLinks = [
    {
      name: "Google",
      url: google(event),
      logo: "/icons/calendar-logos/google.svg",
    },

    {
      name: "Outlook",
      url: outlook(event),
      logo: "/icons/calendar-logos/outlook.svg",
    },

    {
      name: "Office365",
      url: office365(event),
      logo: "/icons/calendar-logos/office365.svg",
    },

    {
      name: "Yahoo",
      url: yahoo(event),
      logo: "/icons/calendar-logos/yahoo.svg",
    },

    {
      name: "Apple",
      url: ics(event),
      logo: "/icons/calendar-logos/apple.svg",
    },
  ];

  return (
    <div className="inline-block relative">
      <Button
        className="mt-4 min-h-14 w-fit bg-primary text-dark-950 hover:bg-primary/90 max-md:w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src="/icons/admin/calendar.svg"
          alt="calendar icon"
          width={20}
          height={20}
        />
        <p className="font-bebas-neue text-xl text-dark-100">
          Add Event to Calendar
        </p>
      </Button>
      <ul
        className={`${
          isOpen ? "opacity-100" : "opacity-0 invisible"
        } absolute transition-opacity bg-white shadow rounded border px-2 py-1 flex flex-col`}
      >
        {calendarLinks.map((company) => (
          <Link
            key={company.name}
            href={company.url}
            target="_blank"
            className="flex gap-2 py-2"
          >
            <Image
              src={company.logo}
              alt="calendar logo"
              width={20}
              height={20}
            />
            <p>{company.name}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CalendarLink;
