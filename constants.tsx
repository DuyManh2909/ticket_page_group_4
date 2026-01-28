import {
  Event,
  Artist,
  Review,
  TicketTier,
  UserTicket,
  DiscoveryTheme,
} from "./types";

export const MOCK_EVENTS: Event[] = [
  {
    id: "1",
    title: "Neon Dreams Tour", // UPDATED VALUE
    artist: "Luna Eclipse",
    artistId: "a1",
    date: "Dec 15, 2026", // UPDATED VALUE
    location: "Sài Gòn Exhibition & Convention Center",
    priceFrom: 850000, // UPDATED VALUE
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800",
    category: "Pop",
    status: "Hot",
    soldPercentage: 85,
    description:
      "Join Luna Eclipse for an unforgettable night of synth-pop and electric energy. Experience the chart-topping hits live with a state-of-the-art light show.", // UPDATED VALUE
  },
  {
    id: "2",
    title: "Echoes in the Valley",
    artist: "The Midnight Band",
    artistId: "a3",
    date: "Jan 12, 2025",
    location: "Da Lat Amphitheater",
    priceFrom: 850000, // UPDATED VALUE
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=800",
    category: "Indie",
    status: "Available",
    soldPercentage: 45,
    description:
      "An intimate evening under the stars. The Midnight Band brings their soulful indie melodies to the heart of the valley.", // UPDATED VALUE
  },
  {
    id: "3",
    title: "Velocity Rave 2026", // UPDATED VALUE
    artist: "Charlie Puth", // UPDATED VALUE
    artistId: "a2",
    date: "Dec 31, 2026", // UPDATED VALUE
    location: "Vũng Tàu Beach Stage",
    priceFrom: 850000, // UPDATED VALUE
    image:
      "http://warnermusic-ie-4.nds.acquia-psi.com/wp-content/uploads/2023/08/Charlie-Puth-Lipstick-PR-Image-2-Ricky-Alvarez-copy-scaled.jpg?auto=format&fit=crop&q=80&w=800", // UPDATED VALUE
    category: "EDM",
    status: "Sold Fast",
    soldPercentage: 92,
    description:
      "Celebrate the countdown to the New Year with the biggest bass drops and beach vibes. A 12-hour marathon of high-velocity electronic music.", // UPDATED VALUE
  },
  {
    id: "4",
    title: "Urban Poetry Live", // UPDATED VALUE
    artist: "MC Flow",
    artistId: "a4",
    date: "Jan 20, 2026", // UPDATED VALUE
    location: "Hanoi Opera House",
    priceFrom: 850000, // UPDATED VALUE
    image:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800",
    category: "Rap",
    status: "Available",
    soldPercentage: 30,
    description:
      "Witness the convergence of classical elegance and modern street poetry. MC Flow redefines rap performance.", // UPDATED VALUE
  },
];

export const MOCK_THEMES: DiscoveryTheme[] = [
  {
    id: "summer",
    title: "SUMMER NIGHT VIBE", // UPDATED VALUE
    subtitle: "Feel the heat. Feel the music.", // UPDATED VALUE
    description:
      "Tận hưởng những đêm hè rực rỡ dưới ánh hoàng hôn cùng âm nhạc bùng nổ.", // UPDATED VALUE
    quote: "Âm nhạc là ánh sáng rực rỡ nhất trong những đêm hè.", // UPDATED VALUE
    colors: {
      primary: "text-orange-500",
      gradient: "from-orange-500 via-rose-500 to-purple-600",
      text: "text-rose-200",
    },
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200",
    playlistImg:
      "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=400",
    category: "Pop",
    vibes: ["Bạn bè", "Hẹn hò", "Du lịch"], // UPDATED VALUE
  },
  {
    id: "indie",
    title: "INDIE SOUL JOURNEY", // UPDATED VALUE
    subtitle: "A journey through sound & soul...", // UPDATED VALUE
    description:
      "Khám phá sự tự do và nội tâm qua những giai điệu mộc mạc nhất.", // UPDATED VALUE
    quote: "Nghệ thuật không phải là cái bạn thấy, mà là cái bạn cảm nhận.", // UPDATED VALUE
    colors: {
      primary: "text-sky-400",
      gradient: "from-sky-400 via-teal-400 to-emerald-500",
      text: "text-sky-100",
    },
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200",
    playlistImg:
      "https://cdn.pixabay.com/photo/2023/12/22/16/29/sheet-music-8463988_1280.jpg?auto=format&fit=crop&q=80&w=400",
    category: "Indie",
    vibes: ["Tự do", "Nghệ thuật", "Yên bình"], // UPDATED VALUE
  },
  {
    id: "edm",
    title: "ELECTRONIC ESCAPE", // UPDATED VALUE
    subtitle: "High Energy. Bass Visuals.", // UPDATED VALUE
    description:
      "Bùng nổ năng lượng cùng những set nhạc EDM đỉnh cao và ánh sáng laser.", // UPDATED VALUE
    quote: "Bass là nhịp đập của sự tự do.", // UPDATED VALUE
    colors: {
      primary: "text-purple-400",
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      text: "text-purple-100",
    },
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200",
    playlistImg:
      "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?auto=format&fit=crop&q=80&w=400",
    category: "EDM",
    vibes: ["Lễ hội", "Năng lượng", "Sôi động"], // UPDATED VALUE
  },
  {
    id: "chill",
    title: "CHILL & HEALING", // UPDATED VALUE
    subtitle: "Quiet moments for the soul.", // UPDATED VALUE
    description:
      "Tìm lại sự cân bằng qua những thanh âm acoustic nhẹ nhàng và piano lắng đọng.", // UPDATED VALUE
    quote: "Yên lặng là nơi âm nhạc bắt đầu lên tiếng.", // UPDATED VALUE
    colors: {
      primary: "text-stone-300",
      gradient: "from-slate-400 via-stone-300 to-slate-200",
      text: "text-stone-100",
    },
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200",
    playlistImg:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&q=80&w=400",
    category: "Indie",
    vibes: ["Một mình", "Thư giãn", "Cân bằng"], // UPDATED VALUE
  },
];

export const MOCK_ARTISTS: Artist[] = [
  {
    id: "a1",
    name: "Luna Eclipse",
    genre: "Dream Pop",
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80&w=800",
    bio: "Luna Eclipse là hiện tượng nhạc Pop thế hệ mới, nổi tiếng với chất giọng dreamy và phong cách trình diễn ma mị.", // UPDATED VALUE
    quote: "Âm nhạc là nơi tôi tìm thấy sự tự do trong những giấc mơ.", // UPDATED VALUE
    accentColor: "from-purple-600 to-pink-600",
    hasUpcomingShow: true,
    gallery: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
    ],
    socials: [{ platform: "Spotify", url: "#" }],
  },
  {
    id: "a2",
    name: "Charlie Puth", // UPDATED VALUE
    genre: "Techno",
    image:
      "https://akamai.sscdn.co/uploadfile/letras/fotos/3/b/2/7/3b27e78dc3bdf446550249c07432d925.jpg?auto=format&fit=crop&q=80&w=800", // UPDATED VALUE
    bio: "Ông vua của những sàn nhảy Underground.", // UPDATED VALUE
    quote: "Let the bass control your heartbeat.", // UPDATED VALUE
    accentColor: "from-blue-600 to-cyan-500",
    hasUpcomingShow: true,
    gallery: [],
    socials: [],
  },
  {
    id: "a3",
    name: "The Midnight Band",
    genre: "Indie Rock",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
    bio: "Nhóm nhạc indie đến từ Đà Lạt.", // UPDATED VALUE
    quote: "Chúng tôi hát cho những tâm hồn cô đơn tìm thấy nhau.", // UPDATED VALUE
    accentColor: "from-emerald-600 to-teal-500",
    hasUpcomingShow: false,
    gallery: [],
    socials: [],
  },
  {
    id: "a4",
    name: "MC Flow",
    genre: "Hip-Hop",
    image:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800",
    bio: "Kỹ năng wordplay đỉnh cao.", // UPDATED VALUE
    quote: "Rhymes are my weapon, flow is my shield.", // UPDATED VALUE
    accentColor: "from-orange-600 to-red-600",
    hasUpcomingShow: true,
    gallery: [],
    socials: [],
  },
];

export const MOCK_USER_TICKETS: UserTicket[] = [
  {
    ...MOCK_EVENTS[0],
    ticketId: "BS-9921-X",
    seat: "Zone A - Row 12 - Seat 45",
    qrCode:
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BEATSYNC-TICKET-1",
    purchaseDate: "Nov 12, 2025", // UPDATED VALUE
    status: "Upcoming",
    // Added missing quantity property
    quantity: 1,
  },
  {
    ...MOCK_EVENTS[2],
    ticketId: "BS-8832-Y",
    seat: "GA Standing",
    qrCode:
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BEATSYNC-TICKET-2",
    purchaseDate: "Oct 05, 2025", // UPDATED VALUE
    status: "Pending",
    // Added missing quantity property
    quantity: 1,
  },
  {
    id: "99",
    title: "Anh Trai Say Hi", // UPDATED VALUE
    artist: "Serenity",
    date: "Aug 20, 2025", // UPDATED VALUE
    location: "Hanoi Central Park",
    priceFrom: 850000, // UPDATED VALUE
    image:
      "https://images.genius.com/339eca61968fe12cd26f7c5c67d21928.1000x1000x1.png?auto=format&fit=crop&q=80&w=800", // UPDATED VALUE
    category: "Pop",
    soldPercentage: 100,
    ticketId: "BS-7712-Z",
    seat: "VIP Box 4",
    qrCode:
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BEATSYNC-TICKET-OLD",
    purchaseDate: "Jun 10, 2025", // UPDATED VALUE
    status: "Attended",
    // Added missing quantity property
    quantity: 1,
  },
];

export const MOCK_REVIEWS: Review[] = [
  {
    id: "r1",
    user: "Quynh Nhu", // UPDATED VALUE
    avatar: "https://i.pravatar.cc/150?u=minh",
    comment: "Trải nghiệm mua vé cực mượt, web xịn vãi!",
    rating: 5,
  },
  {
    id: "r2",
    user: "Nhat Minh", // UPDATED VALUE
    avatar: "https://i.pravatar.cc/150?u=yen",
    comment: "Săn được vé VIP giá hời, thanks BeatSync!",
    rating: 5,
  },
];

export const TICKET_TIERS: TicketTier[] = [
  {
    id: "t1",
    name: "General Admission",
    price: 850000,
    remaining: 124,
    perks: ["Standard Entry", "1 Free Drink"],
  },
  {
    id: "t2",
    name: "VIP Pass",
    price: 2500000,
    remaining: 12,
    perks: ["Fast Lane", "Front Row Access", "Exclusive Merch", "Private Bar"],
  },
  {
    id: "t3",
    name: "Early Bird",
    price: 650000,
    remaining: 0,
    perks: ["Budget Entry", "Limited Availability"],
  },
];
