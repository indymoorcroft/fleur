"use client";

import config from "@/lib/config";
import { IKImage } from "imagekitio-next";
import Link from "next/link";

const EventCard = ({ id, title, genre, imageUrl }: Listing) => (
  <li>
    <Link href={`/events/${id}`}>
      <IKImage
        path={imageUrl}
        urlEndpoint={config.env.imagekit.urlEndpoint}
        alt="Event cover"
        width={125}
        height={125}
        className="rounded-sm object-fill"
        loading="lazy"
        lqip={{ active: true }}
      />

      <div className="mt-4 xs:max-w-40 max-w-28">
        <p className="mt-2 line-clamp-1 text-sm font-semibold text-blue-950 max-w-28">
          {title}
        </p>
        <p className="mt-1 line-clamp-1 text-xs italic text-dark-600">
          {genre}
        </p>
      </div>
    </Link>
  </li>
);

export default EventCard;
