"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { formatDate } from "@/lib/utils";
import { IKImage } from "imagekitio-next";
import config from "@/lib/config";
import { useRouter } from "next/navigation";
import EventSignUp from "./EventSignUp";

interface Props extends Listing {
  userId: string;
  homepage: boolean;
}

const FeaturedEvent = ({
  id,
  title,
  venue,
  location,
  promoters,
  genre,
  date,
  description,
  availableTickets,
  imageUrl,
  userId,
  homepage,
}: Props) => {
  const router = useRouter();

  const tickets = {
    available: availableTickets > 0,
    message: "Event not available",
  };

  return (
    <section className="flex flex-col-reverse items-center gap-12 sm:gap-32 xl:flex-row xl:gap-8">
      <div className="flex flex-1 flex-col gap-5">
        <h1 className="text-5xl font-semibold text-blue-950 md:text-7xl">
          {title}
        </h1>

        <div className="mt-7 flex flex-row flex-wrap gap-4 text-xl text-dark-600">
          <p>
            venue <span className="font-semibold text-blue-950">{venue}</span>
          </p>

          <p>
            genre <span className="font-semibold text-blue-950">{genre}</span>
          </p>

          <div className="flex flex-row gap-1">
            <Image src="/icons/star.svg" alt="star" width={22} height={22} />
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-4 mt-1">
          <p className="text-xl text-dark-600">
            date{" "}
            <span className="ml-2 font-semibold text-purple-800">
              {formatDate(date)}
            </span>
          </p>
          <p className="text-xl text-dark-600">
            {" "}
            location{" "}
            <span className="ml-2 font-semibold text-purple-800">
              {location}
            </span>
          </p>
        </div>

        <p className="mt-2 text-justify text-xl text-dark-600">{description}</p>

        {homepage ? (
          <Button
            className="mt-4 min-h-14 w-fit bg-primary text-dark-950 hover:bg-primary/90 max-md:w-full"
            onClick={() => router.push(`events/${id}`)}
          >
            <p className="font-bebas-neue text-xl text-dark-100">learn more</p>
          </Button>
        ) : (
          <EventSignUp eventId={id} userId={userId} tickets={tickets} />
        )}
      </div>

      <div className="relative flex flex-1 justify-center">
        <div className="relative">
          <IKImage
            path={imageUrl}
            urlEndpoint={config.env.imagekit.urlEndpoint}
            alt="Event cover"
            width={500}
            height={500}
            className="rounded-sm object-fill"
            loading="lazy"
            lqip={{ active: true }}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvent;
