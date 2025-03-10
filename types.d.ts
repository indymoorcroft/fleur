interface Listing {
  id: string;
  title: string;
  venue: string;
  location: string;
  promoters: string;
  genre: string;
  date: string;
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
  date: Date;
  description: string;
  availableTickets: number;
  imageUrl: string;
}
