import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import EventDetail from "./pages/EventDetail";
import Discovery from "./pages/Discovery";
import ArtistDetail from "./pages/ArtistDetail";
import MyTickets from "./pages/MyTickets";
import MyArtists from "./pages/MyArtists";
import DiscoveryThemePage from "./pages/DiscoveryThemePage";
import StoryPage from "./pages/StoryPage";
import ArtistStoryPage from "./pages/ArtistStoryPage";
import MoodPlaylistPage from "./pages/MoodPlaylistPage";
import EditorialArticlePage from "./pages/EditorialArticlePage";
import {
  Page,
  Event,
  Artist,
  DiscoveryTheme,
  UserTicket,
  TicketTier,
  PaymentStatus,
} from "./types";
import {
  MOCK_EVENTS,
  MOCK_ARTISTS,
  MOCK_THEMES,
  MOCK_USER_TICKETS,
  TICKET_TIERS,
} from "./constants";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // STATE TẬP TRUNG
  // 1. Quản lý danh sách vé của người dùng
  const [userTickets, setUserTickets] = useState<UserTicket[]>(
    MOCK_USER_TICKETS.map((t) => ({ ...t, quantity: 1 })),
  );

  // 2. Quản lý tồn kho vé thực tế cho từng sự kiện (Key là eventId)
  // Trong thực tế, dữ liệu này sẽ lấy từ API
  const [eventTiersMap, setEventTiersMap] = useState<
    Record<string, TicketTier[]>
  >(() => {
    const initialMap: Record<string, TicketTier[]> = {};
    MOCK_EVENTS.forEach((event) => {
      initialMap[event.id] = JSON.parse(JSON.stringify(TICKET_TIERS)); // Deep copy hằng số mẫu
    });
    return initialMap;
  });

  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>("idle");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash.startsWith("event/")) {
        const id = hash.split("/")[1];
        setSelectedId(id);
        setCurrentPage("event-detail");
      } else if (hash.startsWith("artist-story/")) {
        const id = hash.split("/")[1];
        setSelectedId(id);
        setCurrentPage("artist-story");
      } else if (hash.startsWith("artist/")) {
        const id = hash.split("/")[1];
        setSelectedId(id);
        setCurrentPage("artist-detail");
      } else if (hash.startsWith("discovery/")) {
        const id = hash.split("/")[1];
        setSelectedId(id);
        setCurrentPage("discovery-theme");
      } else if (hash.startsWith("mood-playlist/")) {
        const id = hash.split("/")[1];
        setSelectedId(id);
        setCurrentPage("mood-playlist");
      } else if (hash === "editorial-article") {
        setCurrentPage("editorial-article");
      } else if (hash === "discovery") {
        setCurrentPage("discovery");
      } else if (hash === "my-tickets") {
        setCurrentPage("my-tickets");
      } else if (hash === "my-artists") {
        setCurrentPage("my-artists");
      } else if (hash === "story") {
        setCurrentPage("story");
      } else {
        setCurrentPage("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (page: Page, id?: string) => {
    if (page === "event-detail" && id) {
      window.location.hash = `event/${id}`;
    } else if (page === "artist-detail" && id) {
      window.location.hash = `artist/${id}`;
    } else if (page === "artist-story" && id) {
      window.location.hash = `artist-story/${id}`;
    } else if (page === "discovery-theme" && id) {
      window.location.hash = `discovery/${id}`;
    } else if (page === "mood-playlist" && id) {
      window.location.hash = `mood-playlist/${id}`;
    } else if (page === "editorial-article") {
      window.location.hash = "editorial-article";
    } else if (page === "discovery") {
      window.location.hash = "discovery";
    } else if (page === "my-tickets") {
      window.location.hash = "my-tickets";
    } else if (page === "my-artists") {
      window.location.hash = "my-artists";
    } else if (page === "story") {
      window.location.hash = "story";
    } else {
      window.location.hash = "home";
    }
  };

  /**
   * XỬ LÝ MUA VÉ (GIẢ LẬP BACKEND)
   * Trừ tồn kho và cập nhật danh sách vé người dùng
   */
  const handlePurchaseTicket = async (
    event: Event,
    tier: TicketTier,
    quantity: number,
  ) => {
    setPaymentStatus("loading");

    // Giả lập xử lý backend
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Kiểm tra lại tồn kho một lần nữa trước khi trừ (Race condition check)
    const currentTiers = eventTiersMap[event.id];
    const targetTier = currentTiers.find((t) => t.id === tier.id);

    if (!targetTier || targetTier.remaining < quantity) {
      setPaymentStatus("error");
      throw new Error("Số lượng vé còn lại không đủ.");
    }

    // 1. Cập nhật số vé còn lại (Trừ tồn kho)
    setEventTiersMap((prev) => {
      const updatedTiers = prev[event.id].map((t) =>
        t.id === tier.id ? { ...t, remaining: t.remaining - quantity } : t,
      );
      return { ...prev, [event.id]: updatedTiers };
    });

    // 2. Tạo thông tin vé mới
    const randomId = Math.random().toString(36).substring(2, 8).toUpperCase();
    const ticketId = `BS-${randomId}-${tier.name.charAt(0)}`;
    const qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=TICKET:${ticketId}`;

    const newTicket: UserTicket = {
      id: event.id,
      title: event.title,
      artist: event.artist,
      date: event.date,
      location: event.location,
      priceFrom: tier.price,
      image: event.image,
      category: event.category,
      soldPercentage: event.soldPercentage,
      ticketId: ticketId,
      seat: `${tier.name} x ${quantity}`,
      qrCode: qrCode,
      purchaseDate: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
      status: "Upcoming",
      quantity: quantity, // Lưu số lượng vé đã mua
    };

    // 3. Cập nhật danh sách vé người dùng
    setUserTickets((prev) => [newTicket, ...prev]);
    setPaymentStatus("success");

    // Chuyển về trang vé sau một chút để user kịp thấy success
    setTimeout(() => {
      setPaymentStatus("idle");
      navigateTo("my-tickets");
    }, 1500);
  };

  const selectedEvent =
    MOCK_EVENTS.find((e) => e.id === selectedId) || MOCK_EVENTS[0];
  const selectedArtist =
    MOCK_ARTISTS.find((a) => a.id === selectedId) || MOCK_ARTISTS[0];
  const selectedTheme =
    MOCK_THEMES.find((t) => t.id === selectedId) || MOCK_THEMES[0];

  // Lấy danh sách tier động cho sự kiện đang chọn
  const activeEventTiers = eventTiersMap[selectedEvent.id] || TICKET_TIERS;

  const isImmersionPage = [
    "story",
    "artist-story",
    "mood-playlist",
    "editorial-article",
  ].includes(currentPage);

  return (
    <div className="min-h-screen flex flex-col">
      {!isImmersionPage && (
        <nav className="fixed top-0 left-0 w-full z-50 glass-nav border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div
              className="text-2xl font-extrabold tracking-tighter cursor-pointer flex items-center gap-2"
              onClick={() => navigateTo("home")}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center italic text-sm text-white font-black">
                BS
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 font-black">
                BEATSYNC
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              <button
                onClick={() => navigateTo("home")}
                className={`hover:text-purple-400 transition-colors ${currentPage === "home" ? "text-purple-400" : ""}`}
              >
                Events
              </button>
              <button
                onClick={() => navigateTo("discovery")}
                className={`hover:text-purple-400 transition-colors ${currentPage === "discovery" ? "text-purple-400" : ""}`}
              >
                Discovery
              </button>
              <button
                onClick={() => navigateTo("my-artists")}
                className={`hover:text-purple-400 transition-colors ${currentPage === "my-artists" ? "text-purple-400" : ""}`}
              >
                My Artists
              </button>
              <button
                onClick={() => navigateTo("my-tickets")}
                className={`px-5 py-2 rounded-full border transition-all ${
                  currentPage === "my-tickets"
                    ? "bg-purple-600 border-purple-600 text-white"
                    : "border-purple-500/30 text-slate-300 hover:bg-purple-500/10"
                }`}
              >
                My Tickets
              </button>
            </div>

            <div className="md:hidden">
              <button
                className="text-white"
                onClick={() => navigateTo("my-tickets")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      )}

      <main className={`flex-grow ${!isImmersionPage ? "pt-20" : ""}`}>
        {currentPage === "home" && (
          <Home
            onSelectEvent={(id) => navigateTo("event-detail", id)}
            onSelectArtist={(id) => navigateTo("artist-detail", id)}
            onShowStory={() => navigateTo("story")}
            onShowPlaylist={() => navigateTo("mood-playlist", "night-insomnia")}
            onShowArticle={() => navigateTo("editorial-article")}
          />
        )}
        {currentPage === "event-detail" && (
          <EventDetail
            event={selectedEvent}
            tiers={activeEventTiers}
            paymentStatus={paymentStatus}
            onSelectArtist={(id) => navigateTo("artist-detail", id)}
            onPurchase={handlePurchaseTicket}
          />
        )}
        {currentPage === "discovery" && (
          <Discovery
            onSelectTheme={(id) => navigateTo("discovery-theme", id)}
            onShowPlaylist={() => navigateTo("mood-playlist", "night-insomnia")}
            onShowArticle={() => navigateTo("editorial-article")}
          />
        )}
        {currentPage === "discovery-theme" && (
          <DiscoveryThemePage
            theme={selectedTheme}
            onSelectEvent={(id) => navigateTo("event-detail", id)}
          />
        )}
        {currentPage === "artist-detail" && (
          <ArtistDetail
            artist={selectedArtist}
            onSelectEvent={(id) => navigateTo("event-detail", id)}
            onSelectArtistStory={(id) => navigateTo("artist-story", id)}
          />
        )}
        {currentPage === "my-tickets" && (
          <MyTickets
            tickets={userTickets}
            onSelectEvent={(id) => navigateTo("event-detail", id)}
          />
        )}
        {currentPage === "my-artists" && (
          <MyArtists onSelectArtist={(id) => navigateTo("artist-detail", id)} />
        )}
        {currentPage === "story" && (
          <StoryPage onBack={() => navigateTo("home")} />
        )}
        {currentPage === "artist-story" && (
          <ArtistStoryPage
            artist={selectedArtist}
            onBack={() => navigateTo("artist-detail", selectedArtist.id)}
            onSelectEvent={(id) => navigateTo("event-detail", id)}
          />
        )}
        {currentPage === "mood-playlist" && (
          <MoodPlaylistPage
            onBack={() => navigateTo("discovery")}
            onSelectArtist={(id) => navigateTo("artist-detail", id)}
            onSelectEvent={(id) => navigateTo("event-detail", id)}
          />
        )}
        {currentPage === "editorial-article" && (
          <EditorialArticlePage onBack={() => navigateTo("discovery")} />
        )}
      </main>

      {!isImmersionPage && (
        <footer className="bg-black border-t border-white/5 py-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="text-3xl font-extrabold mb-6 tracking-tighter italic text-white">
                BEATSYNC<span className="text-purple-500">.</span>
              </div>
              <p className="text-slate-400 max-w-sm mb-8">
                Nền tảng bán vé âm nhạc hàng đầu cho giới trẻ. Kết nối tâm hồn
                qua những giai điệu bùng nổ.
              </p>
              <div className="flex gap-4">
                {[
                  { name: "FB", link: "https://web.facebook.com/duymanhh.29/" },
                  { name: "IG", link: "https://www.instagram.com/duymanhh29/" },
                  { name: "TW", link: "https://twitter.com/" },
                  { name: "YT", link: "https://youtube.com/" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-black cursor-pointer hover:bg-purple-600 transition-all text-white"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-black mb-6 text-white uppercase tracking-widest">
                Quick Links
              </h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="hover:text-purple-400 cursor-pointer transition-colors">
                  Về chúng tôi
                </li>
                <li className="hover:text-purple-400 cursor-pointer transition-colors">
                  Chính sách bảo mật
                </li>
                <li className="hover:text-purple-400 cursor-pointer transition-colors">
                  Hỗ trợ khách hàng
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-black mb-6 text-white uppercase tracking-widest">
                Join The Beat
              </h4>
              <p className="text-xs text-slate-500 mb-4">
                Nhận thông báo về concert sớm nhất.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 flex-grow focus:outline-none focus:border-purple-500 transition-all text-sm text-white"
                />
                <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg font-black text-xs uppercase tracking-widest transition-all text-white">
                  Go
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-slate-500 text-[10px] uppercase font-bold tracking-[0.3em]">
            © 2026 BeatSync. Group 4 - Duy Manh - Captain.
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;
