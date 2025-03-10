import EventCard from "./EventCard";

interface Props {
  title: string;
  events: Listing[];
  containerClassName?: string;
}

const EventList = ({ title, events, containerClassName }: Props) => {
  // if (events.length < 2) return;

  return (
    <section className={containerClassName}>
      <h2 className="font-bebas-neue text-4xl text-dark-600">{title}</h2>

      <ul className="mt-10 flex flex-wrap gap-5 xs:gap-10 justify-between">
        {events.map((event) => (
          <EventCard key={event.title} {...event} />
        ))}
      </ul>
    </section>
  );
};

export default EventList;
