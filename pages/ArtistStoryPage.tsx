
import React, { useEffect, useRef } from 'react';
import { Artist } from '../types';
import { MOCK_EVENTS } from '../constants';

interface ArtistStoryPageProps {
  artist: Artist;
  onBack: () => void;
  onSelectEvent: (id: string) => void;
}

const ArtistStoryPage: React.FC<ArtistStoryPageProps> = ({ artist, onBack, onSelectEvent }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const event = MOCK_EVENTS.find(e => e.artistId === artist.id);

  return (
    <div ref={scrollContainerRef} className="bg-[#020617] text-white selection:bg-purple-500/30 overflow-x-hidden">
      {/* Back Control */}
      <button 
        onClick={onBack}
        className="fixed top-8 left-8 z-[100] flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-white transition-all group"
      >
        <span className="group-hover:-translate-x-2 transition-transform">←</span> Quay lại Profile
      </button>

      {/* 1. Opening Quote - slow & minimalist */}
      <section className="h-screen flex items-center justify-center p-10 text-center relative">
        <div className="max-w-5xl space-y-12 animate-[fadeIn_2s_ease-out]">
           <div className={`text-9xl font-serif opacity-10 mb-[-40px] ${artist.accentColor.split(' ')[0].replace('from-', 'text-')}`}>“</div>
           <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter leading-tight drop-shadow-2xl">
             {artist.quote}
           </h2>
           <div className={`w-24 h-1 bg-gradient-to-r ${artist.accentColor} mx-auto`} />
        </div>
      </section>

      {/* 2. Chapter 1: The Personal Diary */}
      <section className="min-h-screen py-40 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
         <div className="space-y-12">
            <p className="text-purple-500 font-black uppercase tracking-[0.5em] text-xs">Chương I: Trước ánh đèn</p>
            <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-none">Phía sau những <br /> dải băng cassette.</h3>
            <div className="space-y-8 text-xl text-slate-400 font-light italic leading-relaxed">
               <p>“Có những đêm, tôi chỉ ngồi một mình với chiếc guitar cũ, tự hỏi liệu những lời tự sự này có bao giờ chạm được đến ai đó ngoài kia không.”</p>
               <p>Hành trình của {artist.name} không bắt đầu từ những sân khấu lớn, mà từ những phòng ngủ chật hẹp, những quán cafe vắng người và niềm tin cháy bỏng vào âm nhạc chân thật.</p>
            </div>
         </div>
         <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 italic text-sm text-slate-500">Backstage archives, 2023.</div>
         </div>
      </section>

      {/* 3. Chapter 2: The Stage Rush */}
      <section className="relative min-h-[120vh] flex items-center justify-center p-6 overflow-hidden">
         <img src={artist.image} className="absolute inset-0 w-full h-full object-cover scale-110 brightness-[0.25]" />
         <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
         
         <div className="relative z-10 text-center max-w-5xl">
            <p className="text-white font-black uppercase tracking-[0.5em] text-xs mb-10">Chương II: Sân khấu</p>
            <h2 className="text-6xl md:text-[11rem] font-black tracking-tighter uppercase italic leading-[0.8] mb-12 animate-pulse-slow">
              KHOẢNH KHẮC <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">BÙNG NỔ</span>
            </h2>
            <p className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tight drop-shadow-lg">
              "Lần đầu đứng trước hàng ngàn người, tôi đã run."
            </p>
         </div>
      </section>

      {/* 4. Chapter 3: The Afterglow */}
      <section className="min-h-screen py-40 max-w-4xl mx-auto px-6 text-center space-y-16">
         <p className="text-slate-600 font-black uppercase tracking-[0.5em] text-xs">Chương III: Sau tiếng vỗ tay</p>
         <div className="aspect-video w-full rounded-[4rem] overflow-hidden grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
            <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1500" className="w-full h-full object-cover" />
         </div>
         <p className="text-2xl text-slate-400 italic leading-relaxed font-light">
           "Khi mọi người về hết, tiếng vang của buổi diễn vẫn còn đọng lại trong không gian. Đó là lúc tôi bắt đầu nghĩ về ngày mai, về bài hát tiếp theo sẽ dành tặng cho các bạn."
         </p>
      </section>

      {/* 5. Final Connection */}
      <section className="py-40 border-t border-white/5 bg-slate-950 flex flex-col items-center justify-center text-center px-6">
         <h3 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter mb-16">
           Kế tiếp... <br />
           <span className="text-purple-500">là câu chuyện của bạn.</span>
         </h3>
         <div className="flex flex-col md:flex-row gap-8">
            <button 
              onClick={() => event && onSelectEvent(event.id)}
              className={`px-16 py-6 bg-gradient-to-r ${artist.accentColor} rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:scale-110 transition-all shadow-2xl`}
            >
              Xem concert của {artist.name}
            </button>
            <button className="px-16 py-6 bg-white/5 border border-white/10 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-white/10 transition-all">
              Nghe playlist truyền cảm hứng
            </button>
         </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.02); }
        }
      `}</style>
    </div>
  );
};

export default ArtistStoryPage;
