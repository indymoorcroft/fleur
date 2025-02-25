import Image from "next/image";
import Link from "next/link";

const EventCard = ({ id, title, genre, imageUrl }: Listing) => (
  <li>
    <Link href={`/events/${id}`}>
      <Image
        src={imageUrl}
        alt="event image"
        width={125}
        height={125}
        className="rounded-sm"
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
