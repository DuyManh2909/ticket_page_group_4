import React, { useState } from "react";
import { MOCK_USER_TICKETS, MOCK_EVENTS } from "../constants";
import { UserTicket } from "../types";
import EventCard from "../components/EventCard";

interface MyTicketsProps {
  onSelectEvent: (id: string) => void;
}

const MyTickets: React.FC<MyTicketsProps> = ({ onSelectEvent }) => {
  const [filter, setFilter] = useState<"Upcoming" | "Past">("Upcoming");
  const [selectedTicket, setSelectedTicket] = useState<UserTicket | null>(null);

  const tickets = MOCK_USER_TICKETS.filter((t) =>
    filter === "Upcoming"
      ? t.status === "Upcoming" || t.status === "Pending"
      : t.status === "Attended",
  );

  const closeModal = () => setSelectedTicket(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16 animate-[fadeIn_0.5s_ease-out]">
      {/* 1. Personal Header */}
      <section className="flex flex-col md:flex-row items-center gap-10 bg-slate-950 p-12 rounded-[3.5rem] border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />

        <div className="relative group">
          <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-10 group-hover:opacity-30 transition-opacity" />
          <img
            src="https://maunaildep.com/wp-content/uploads/2025/04/anh-son-tung-mtp-4k-hd.jpg"
            alt="User"
            className="w-40 h-40 rounded-full border-8 border-slate-900 z-10 relative grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        <div className="flex-grow text-center md:text-left z-10">
          <p className="text-purple-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4">
            Your Musical Identity
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4 italic">
            Duy Manh
          </h1>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <div className="px-8 py-4 bg-white/5 rounded-3xl border border-white/5 backdrop-blur-sm">
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">
                Ký ức sắp tới
              </p>
              <p className="text-3xl font-black text-white tracking-tighter">
                02
              </p>
            </div>
            <div className="px-8 py-4 bg-white/5 rounded-3xl border border-white/5 backdrop-blur-sm">
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">
                Đã tham dự
              </p>
              <p className="text-3xl font-black text-purple-400 tracking-tighter">
                10
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Ticket Grid with Emotional Labels */}
      <section>
        <div className="flex items-center justify-between mb-16">
          <div className="flex gap-2 p-1.5 bg-slate-900 rounded-2xl border border-white/5">
            <button
              onClick={() => setFilter("Upcoming")}
              className={`px-10 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all ${filter === "Upcoming" ? "bg-white text-black shadow-2xl" : "text-slate-500 hover:text-white"}`}
            >
              Ký ức sắp bắt đầu
            </button>
            <button
              onClick={() => setFilter("Past")}
              className={`px-10 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all ${filter === "Past" ? "bg-white text-black shadow-2xl" : "text-slate-500 hover:text-white"}`}
            >
              Bạn đã ở đó
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {tickets.map((ticket) => (
            <div
              key={ticket.ticketId}
              className="group bg-slate-900/40 rounded-[2.5rem] border border-white/5 overflow-hidden hover:border-purple-500/40 transition-all cursor-pointer relative shadow-2xl"
              onClick={() => setSelectedTicket(ticket)}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={ticket.image}
                  alt={ticket.title}
                  className="w-full h-full object-cover grayscale-[60%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute top-6 right-6">
                  <span
                    className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl ${
                      ticket.status === "Upcoming"
                        ? "bg-emerald-500 text-white animate-pulse"
                        : ticket.status === "Pending"
                          ? "bg-amber-500 text-white"
                          : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {ticket.status === "Upcoming"
                      ? "Sắp diễn ra"
                      : ticket.status === "Attended"
                        ? "Đã tham dự"
                        : ticket.status}
                  </span>
                </div>
              </div>

              <div className="p-10 space-y-6">
                <div className="space-y-2">
                  <p className="text-purple-400 text-[10px] font-black uppercase tracking-[0.3em]">
                    {ticket.artist}
                  </p>
                  <h3 className="text-2xl font-black text-white group-hover:text-purple-300 transition-colors uppercase tracking-tight italic">
                    {ticket.title}
                  </h3>
                </div>

                <div className="space-y-3 text-xs text-slate-400 font-bold uppercase tracking-widest">
                  <div className="flex justify-between items-center border-b border-white/5 pb-3">
                    <span>📅 {ticket.date}</span>
                    <span className="text-slate-700 text-[9px]">
                      ID: {ticket.ticketId}
                    </span>
                  </div>
                  <p className="pt-1">📍 {ticket.location}</p>
                </div>

                <div className="pt-8 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-slate-600 uppercase font-black tracking-widest mb-1">
                      Vị trí của bạn
                    </span>
                    <span className="text-white font-black uppercase text-sm tracking-tight">
                      {ticket.seat}
                    </span>
                  </div>
                  <button className="px-6 py-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all text-[10px] font-black uppercase tracking-widest text-white border border-white/5">
                    Xem vé
                  </button>
                </div>
              </div>
            </div>
          ))}

          {tickets.length === 0 && (
            <div className="col-span-full py-32 text-center bg-slate-950 rounded-[3.5rem] border border-dashed border-white/10">
              <p className="text-slate-500 text-xl italic mb-10">
                Hành trình âm nhạc mới đang chờ bạn viết tiếp...
              </p>
              <button
                onClick={() => onSelectEvent(MOCK_EVENTS[0].id)}
                className="px-16 py-6 bg-white text-black font-black uppercase text-xs tracking-[0.3em] rounded-2xl hover:bg-purple-600 hover:text-white transition-all shadow-2xl"
              >
                Khám phá show ngay
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. Personalized Recommendations */}
      <section className="pt-20 border-t border-white/5">
        <p className="text-purple-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 text-center">
          Dành riêng cho tâm hồn bạn
        </p>
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-16 italic text-center">
          KHOẢNH KHẮC TIẾP THEO?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {MOCK_EVENTS.slice(0, 4).map((e) => (
            <EventCard key={e.id} event={e} onClick={onSelectEvent} />
          ))}
        </div>
      </section>

      {/* TICKET DETAIL MODAL */}
      {selectedTicket && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-md animate-[fadeIn_0.3s_ease-out]"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-md bg-slate-900 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl animate-[scaleIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Top Cover Image */}
            <div className="h-48 relative overflow-hidden">
              <img
                src={selectedTicket.image}
                alt={selectedTicket.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
            </div>

            {/* Ticket Content */}
            <div className="p-8 space-y-8">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-black text-white uppercase tracking-tighter italic leading-none">
                  {selectedTicket.title}
                </h2>
                <p className="text-purple-400 text-xs font-black uppercase tracking-[0.2em]">
                  {selectedTicket.artist} • {selectedTicket.date}
                </p>
              </div>

              {/* QR Code Container */}
              <div className="flex flex-col items-center gap-6 py-6 bg-white/5 rounded-[2rem] border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
                <div className="p-4 bg-white rounded-[1.5rem] shadow-2xl">
                  <img
                    src={selectedTicket.qrCode}
                    alt="Ticket QR Code"
                    className="w-40 h-40"
                  />
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mb-1">
                    Ticket Code
                  </p>
                  <p className="text-lg font-black text-white tracking-widest">
                    {selectedTicket.ticketId}
                  </p>
                </div>
              </div>

              {/* Metadata */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest mb-1">
                    Vị trí / Ghế
                  </p>
                  <p className="text-sm font-black text-white tracking-tight uppercase">
                    {selectedTicket.seat}
                  </p>
                </div>
                <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest mb-1">
                    Trạng thái
                  </p>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        selectedTicket.status === "Upcoming"
                          ? "bg-emerald-500 animate-pulse"
                          : selectedTicket.status === "Attended"
                            ? "bg-slate-500"
                            : "bg-amber-500"
                      }`}
                    />
                    <p className="text-sm font-black text-white tracking-tight uppercase">
                      {selectedTicket.status === "Upcoming"
                        ? "Chờ diễn"
                        : selectedTicket.status === "Attended"
                          ? "Đã đi"
                          : "Chờ duyệt"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Final Note */}
              <p className="text-center text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em]">
                Xuất trình mã này tại cổng vào sự kiện
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default MyTickets;
