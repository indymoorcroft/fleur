interface Listing {
  id: number;
  title: string;
  venue: string;
  location: string;
  promoters: string[];
  genre: string;
  date: string;
  description: string;
  availableTickets: number;
  imageUrl: string;
}

interface AuthCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
