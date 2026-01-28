
import React from 'react';
import { DiscoveryTheme, Event } from '../types';
import { MOCK_EVENTS } from '../constants';
import EventCard from '../components/EventCard';

interface DiscoveryThemePageProps {
  theme: DiscoveryTheme;
  onSelectEvent: (id: string) => void;
}

const DiscoveryThemePage: React.FC<DiscoveryThemePageProps> = ({ theme, onSelectEvent }) => {
  const filteredEvents = MOCK_EVENTS.filter(e => e.category === theme.category);

  return (
    <div className="pb-24 animate-[fadeIn_0.5s_ease-out]">
      {/* 1. Cinematic Entry Header */}
      <nav className="max-w-7xl mx-auto px-6 py-10 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
        <a href="#discovery" className="hover:text-white transition-colors">Tâm trạng</a>
        <span>/</span>
        <span className={`${theme.colors.primary}`}>{theme.title}</span>
      </nav>

      {/* 2. Experiential Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden mb-32">
        <div className="absolute inset-0">
          <img src={theme.image} alt={theme.title} className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-slate-950/60" />
          <div className={`absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 opacity-90`} />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
           <p className={`font-black uppercase tracking-[0.5em] text-xs mb-8 ${theme.colors.primary} animate-pulse-neon`}>
             {theme.subtitle}
           </p>
           <h1 className="text-6xl md:text-[10rem] font-black text-white tracking-tighter uppercase italic leading-[0.85] mb-10 drop-shadow-2xl">
             {theme.title}
           </h1>
           <p className="text-2xl text-slate-300 max-w-2xl mx-auto font-light italic leading-relaxed">
             {theme.description}
           </p>
        </div>
      </section>

      {/* 3. Build-up: Featured Events */}
      <section className="max-w-7xl mx-auto px-6 mb-40">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <p className="text-slate-600 font-black uppercase tracking-[0.4em] text-[10px] mb-3">Escalate the feeling</p>
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter italic">Nơi câu chuyện bắt đầu</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} onClick={onSelectEvent} />
          ))}
        </div>
      </section>

      {/* 4. Deep Connection: Playlist & Vibes */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 mb-40">
        <div className="lg:col-span-2 bg-slate-950/50 rounded-[4rem] p-16 border border-white/5 flex flex-col md:flex-row gap-12 hover:border-purple-500/10 transition-all shadow-2xl">
          <div className="w-full md:w-64 h-64 flex-shrink-0 relative group">
             <img src={theme.playlistImg} className="w-full h-full object-cover rounded-[2rem] shadow-2xl group-hover:scale-105 transition-transform duration-700 grayscale-[40%] group-hover:grayscale-0" />
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 rounded-[2rem]">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-black text-xl shadow-2xl">▶</div>
             </div>
          </div>
          <div className="flex-grow flex flex-col justify-center">
            <h3 className={`text-3xl font-black uppercase italic mb-6 ${theme.colors.primary}`}>Giai điệu tâm hồn</h3>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light italic">
              Hãy để âm nhạc chuẩn bị cho trái tim bạn trước khi bước vào không gian của {theme.title.toLowerCase()}.
            </p>
            <div className="flex flex-wrap gap-3">
               {['Soul', 'Atmosphere', 'Energy', 'Deep'].map(tag => (
                 <span key={tag} className="px-5 py-2 bg-white/5 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-400 border border-white/5">#{tag}</span>
               ))}
            </div>
          </div>
        </div>

        <div className={`p-16 bg-gradient-to-br ${theme.colors.gradient} rounded-[4rem] text-white shadow-2xl flex flex-col justify-center`}>
           <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 opacity-60">Vibe Check</p>
           <h3 className="text-3xl font-black uppercase italic mb-10 leading-none">Chạm đến...</h3>
           <div className="space-y-6">
              {theme.vibes.map(vibe => (
                <div key={vibe} className="flex items-center gap-6 p-5 bg-black/20 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-black/30 transition-all cursor-default group">
                  <div className="w-3 h-3 rounded-full bg-white animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                  <span className="font-black text-xl tracking-tighter uppercase italic group-hover:translate-x-2 transition-transform">{vibe}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 5. Poetic Peak */}
      <section className="py-40 border-y border-white/5 bg-slate-950 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-30" />
         <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <div className={`text-9xl mb-12 opacity-10 font-serif ${theme.colors.primary}`}>“</div>
            <h2 className="text-5xl md:text-8xl font-black text-white italic leading-[1] mb-16 tracking-tighter drop-shadow-2xl">
               {theme.quote}
            </h2>
            <div className={`w-32 h-2 bg-gradient-to-r ${theme.colors.gradient} mx-auto rounded-full`} />
         </div>
      </section>

      {/* 6. The Final Peak CTA */}
      <section className="max-w-5xl mx-auto px-6 py-40 text-center">
         <h3 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter italic mb-16 leading-none">
           BẠN CÓ MUỐN <br />
           <span className={`${theme.colors.primary}`}>LÀ MỘT PHẦN</span> <br />
           CỦA CÂU CHUYỆN?
         </h3>
         <button className={`px-20 py-8 bg-gradient-to-r ${theme.colors.gradient} rounded-[2rem] font-black uppercase tracking-[0.3em] text-lg text-white hover:scale-110 transition-all shadow-[0_40px_80px_rgba(0,0,0,0.4)]`}>
           Giữ lấy khoảnh khắc này
         </button>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default DiscoveryThemePage;
