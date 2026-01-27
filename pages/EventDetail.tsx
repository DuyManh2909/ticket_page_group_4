import React, { useState } from "react";
import { Event } from "../types";
import { TICKET_TIERS, MOCK_ARTISTS } from "../constants";

interface EventDetailProps {
  event: Event;
  onSelectArtist: (id: string) => void;
}

const EventDetail: React.FC<EventDetailProps> = ({ event, onSelectArtist }) => {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [view, setView] = useState<"info" | "booking">("info");

  const activeTier = TICKET_TIERS.find((t) => t.id === selectedTier);
  const artistData = MOCK_ARTISTS.find((a) => a.id === event.artistId);

  return (
    <div className="pb-20 text-white">
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="flex-grow">
              <div className="flex gap-3 mb-6">
                <span className="px-4 py-1.5 bg-purple-600 rounded-full text-xs font-black uppercase tracking-widest">
                  {event.category}
                </span>
                <span className="px-4 py-1.5 bg-rose-500 rounded-full text-xs font-black uppercase tracking-widest animate-pulse">
                  🔥 Hot Ticket
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter uppercase">
                {event.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    📍
                  </div>
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    📅
                  </div>
                  <span>{event.date} • 19:30</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-auto">
              <button
                onClick={() => {
                  setView("booking");
                  document
                    .getElementById("booking-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full md:w-auto px-12 py-5 bg-white text-black font-black rounded-2xl hover:bg-purple-500 hover:text-white transition-all transform hover:-translate-y-2 shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              >
                TICKET & CHỖ NGỒI
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4 uppercase">
              Giới thiệu sự kiện
              <div className="flex-grow h-px bg-white/10" />
            </h2>
            <div className="text-slate-400 leading-relaxed text-lg space-y-4">
              <p>{event.description}</p>
              <p>
                Hệ thống âm thanh được tinh chỉnh bởi các kỹ sư hàng đầu thế
                giới, đảm bảo trải nghiệm thính giác thuần khiết nhất.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4 uppercase">
              Line-up nghệ sĩ
              <div className="flex-grow h-px bg-white/10" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {artistData && (
                <div
                  onClick={() => onSelectArtist(artistData.id)}
                  className="group bg-slate-900 border border-white/5 rounded-2xl p-6 flex items-center gap-6 hover:border-purple-500 transition-all cursor-pointer"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-slate-700 group-hover:border-purple-500 transition-all">
                    <img
                      src={artistData.image}
                      alt={artistData.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {artistData.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-2">
                      Main Artist
                    </p>
                    <span className="text-[10px] text-purple-400 font-bold uppercase underline">
                      Xem Profile
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1" id="booking-section">
          <div className="sticky top-28 space-y-6">
            <div className="bg-slate-900 rounded-[2rem] border border-white/10 p-8 shadow-2xl overflow-hidden relative">
              <h3 className="text-2xl font-bold text-white mb-8 uppercase tracking-tighter">
                Chọn loại vé
              </h3>
              <div className="space-y-4 mb-8">
                {TICKET_TIERS.map((tier) => {
                  const isSoldOut = tier.remaining === 0;
                  const isSelected = selectedTier === tier.id;
                  return (
                    <div
                      key={tier.id}
                      onClick={() => !isSoldOut && setSelectedTier(tier.id)}
                      className={`p-5 rounded-2xl border-2 transition-all cursor-pointer relative ${
                        isSoldOut
                          ? "opacity-40 cursor-not-allowed border-transparent bg-slate-800/50"
                          : isSelected
                            ? "border-purple-500 bg-purple-500/10"
                            : "border-white/10 bg-white/5 hover:border-white/30"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-white">{tier.name}</h4>
                        <span className="font-bold text-purple-400">
                          {(tier.price / 1000).toLocaleString()}k
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest">
                        <span
                          className={
                            isSoldOut ? "text-rose-500" : "text-slate-500"
                          }
                        >
                          {isSoldOut
                            ? "SOLD OUT"
                            : `${tier.remaining} VÉ CÒN LẠI`}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {selectedTier && (
                <div className="space-y-6">
                  <div className="flex justify-between mb-4 border-t border-white/10 pt-6">
                    <span className="text-slate-400">Tổng cộng</span>
                    <span className="text-2xl font-black text-white">
                      {(
                        ((activeTier?.price || 0) * quantity) /
                        1000
                      ).toLocaleString()}
                      k{" "}
                      <span className="text-xs font-normal text-slate-500">
                        VNĐ
                      </span>
                    </span>
                  </div>
                  <button className="w-full py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black uppercase tracking-widest rounded-2xl hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all">
                    THANH TOÁN NGAY
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetail;
