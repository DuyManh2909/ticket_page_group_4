
export interface Event {
  id: string;
  title: string;
  artist: string;
  artistId?: string;
  date: string;
  location: string;
  priceFrom: number;
  image: string;
  category: 'Pop' | 'Indie' | 'EDM' | 'Rock' | 'Rap';
  status: 'Hot' | 'Sold Fast' | 'Available';
  description?: string;
  soldPercentage: number;
}

export type TicketStatus = 'Upcoming' | 'Pending' | 'Attended';

export interface UserTicket extends Omit<Event, 'status'> {
  ticketId: string;
  seat: string;
  qrCode: string;
  purchaseDate: string;
  status: TicketStatus;
  quantity: number; // Thêm số lượng vé đã mua
}

export interface Artist {
  id: string;
  name: string;
  image: string;
  genre: string;
  bio: string;
  quote: string;
  gallery: string[];
  socials: { platform: string; url: string }[];
  accentColor: string;
  hasUpcomingShow?: boolean;
}

export interface DiscoveryTheme {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  quote: string;
  colors: {
    primary: string;
    gradient: string;
    text: string;
  };
  image: string;
  playlistImg: string;
  category: 'Pop' | 'Indie' | 'EDM' | 'Rock' | 'Rap';
  vibes: string[];
}

export interface Review {
  id: string;
  user: string;
  avatar: string;
  comment: string;
  rating: number;
}

export type Page = 'home' | 'event-detail' | 'discovery' | 'artist-detail' | 'my-tickets' | 'my-artists' | 'discovery-theme' | 'story' | 'artist-story' | 'mood-playlist' | 'editorial-article';

export interface TicketTier {
  id: string;
  name: string;
  price: number;
  remaining: number;
  perks: string[];
}

export type PaymentStatus = 'idle' | 'loading' | 'success' | 'error';
