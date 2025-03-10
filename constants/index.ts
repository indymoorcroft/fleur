export const adminSideBarLinks = [
  {
    img: "/icons/admin/home.svg",
    route: "/admin",
    text: "Home",
  },
  {
    img: "/icons/admin/users.svg",
    route: "/admin/users",
    text: "All Users",
  },
  {
    img: "/icons/admin/calendar.svg",
    route: "/admin/events",
    text: "All Events",
  },
  {
    img: "/icons/admin/bookmark.svg",
    route: "/admin/event-records",
    text: "Event Records",
  },
  {
    img: "/icons/admin/user.svg",
    route: "/admin/account-requests",
    text: "Account Requests",
  },
];

export const FIELD_NAMES = {
  firstName: "First name",
  lastName: "Last name",
  email: "Email",
  password: "Password",
};

export const FIELD_TYPES = {
  firstName: "text",
  lastName: "text",
  email: "email",
  password: "password",
};

export const sampleEvents = [
  {
    id: 1,
    title: "Summer Beats Festival",
    venue: "Hyde Park",
    location: "London",
    promoters: ["LiveNation UK"],
    genre: "Electronic",
    date: "2025-07-15",
    description:
      "A massive open-air festival featuring top DJs and electronic artists from around the world.",
    availableTickets: 2500,
    imageUrl: "/images/event-images/summer-beats-festival.png",
  },
  {
    id: 2,
    title: "Rock Revolution",
    venue: "O2 Arena",
    location: "London",
    promoters: ["Rock UK Events"],
    genre: "Rock",
    date: "2025-09-10",
    description:
      "An electrifying night with legendary rock bands and emerging artists.",
    availableTickets: 1800,
    imageUrl: "/images/event-images/rock-revolution.png",
  },
  {
    id: 3,
    title: "Underground House Sessions",
    venue: "Fabric",
    location: "London",
    promoters: ["DeepGroove Promotions"],
    genre: "House",
    date: "2025-06-22",
    description:
      "A night of deep house and underground beats with top-tier DJs.",
    availableTickets: 500,
    imageUrl: "/images/event-images/underground-house-sessions.png",
  },
  {
    id: 4,
    title: "Classical Night at The Royal",
    venue: "Royal Albert Hall",
    location: "London",
    promoters: ["London Symphony Orchestra"],
    genre: "Classical",
    date: "2025-08-05",
    description:
      "An elegant evening featuring breathtaking symphonies and orchestral performances.",
    availableTickets: 1200,
    imageUrl: "/images/event-images/classical-night-at-the-royal.png",
  },
  {
    id: 5,
    title: "Hip-Hop Takeover",
    venue: "Manchester Arena",
    location: "Manchester",
    promoters: ["Urban Vibes"],
    genre: "Hip-Hop",
    date: "2025-07-30",
    description:
      "The biggest hip-hop artists come together for an unforgettable night of beats and rhymes.",
    availableTickets: 2000,
    imageUrl: "/images/event-images/hip-hop-takeover.png",
  },
  {
    id: 6,
    title: "Comedy Night Live",
    venue: "Edinburgh Playhouse",
    location: "Edinburgh",
    promoters: ["Laugh Out Loud UK"],
    genre: "Comedy",
    date: "2025-06-10",
    description: "An evening full of laughs featuring top stand-up comedians.",
    availableTickets: 800,
    imageUrl: "/images/event-images/comedy-night-live.png",
  },
  {
    id: 7,
    title: "Jazz in the Park",
    venue: "Regent's Park",
    location: "London",
    promoters: ["SmoothGroove Jazz"],
    genre: "Jazz",
    date: "2025-08-20",
    description:
      "A chilled evening of smooth jazz with live performances from renowned artists.",
    availableTickets: 1000,
    imageUrl: "/images/event-images/jazz-in-the-park.png",
  },
  {
    id: 8,
    title: "Reggae Sunset Party",
    venue: "Brighton Beach",
    location: "Brighton",
    promoters: ["Island Vibes"],
    genre: "Reggae",
    date: "2025-07-25",
    description:
      "A sunset beach party with live reggae bands and DJs bringing the Caribbean vibes.",
    availableTickets: 1500,
    imageUrl: "/images/event-images/reggae-sunset-party.png",
  },
  {
    id: 9,
    title: "Indie Night Out",
    venue: "The Leadmill",
    location: "Sheffield",
    promoters: ["Indie Nation"],
    genre: "Indie",
    date: "2025-09-05",
    description:
      "An intimate gig featuring rising indie stars and alternative bands.",
    availableTickets: 600,
    imageUrl: "/images/event-images/indie-night-out.png",
  },
  {
    id: 10,
    title: "Techno Warehouse Rave",
    venue: "Secret Location",
    location: "London",
    promoters: ["Rave Nation"],
    genre: "Techno",
    date: "2025-08-15",
    description:
      "A high-energy underground rave with pulsating techno beats and stunning visuals.",
    availableTickets: 900,
    imageUrl: "/images/event-images/techno-warehouse-rave.png",
  },
];
