interface Listing {
  id: string;
  title: string;
  venue: string;
  location: string;
  promoters: string;
  genre: string;
  startDateTime: string;
  endDateTime: string;
  description: string;
  availableTickets: number;
  imageUrl: string;
  createdAt: Date | null;
}

interface AuthCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface EventParams {
  title: string;
  venue: string;
  location: string;
  promoters: string;
  genre: string;
  startDateTime: Date;
  endDateTime: Date;
  description: string;
  availableTickets: number;
  imageUrl: string;
}

interface EventSignUpParams {
  eventId: string;
  userId: string;
}
