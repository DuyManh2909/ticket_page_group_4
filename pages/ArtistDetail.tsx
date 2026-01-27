
import React from 'react';
import { Artist, Event } from '../types';
import { MOCK_EVENTS } from '../constants';
import EventCard from '../components/EventCard';

interface ArtistDetailProps {
  artist: Artist;
  onSelectEvent: (id: string) => void;
  onSelectArtistStory?: (id: string) => void;
}

const ArtistDetail: React.FC<ArtistDetailProps> = ({ artist, onSelectEvent, onSelectArtistStory }) => {
  const upcomingEvents = MOCK_EVENTS.filter(e => e.artistId === artist.id);

  return (
    <div className="pb-24 text-white">
      {/* 1. Immersive Artist Hero */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={artist.image} 
            alt={artist.name} 
            className="w-full h-full object-cover scale-105 brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-transparent" />
          <div className={`absolute inset-0 bg-gradient-to-br ${artist.accentColor} mix-blend-overlay opacity-40`} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <span className={`inline-block px-6 py-2 bg-gradient-to-r ${artist.accentColor} rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-2xl`}>
              The Soul Behind: {artist.genre}
            </span>
            <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase italic leading-[0.85] mb-10 animate-[slideIn_0.8s_ease-out] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              {artist.name}
            </h1>
            <p className="text-2xl md:text-4xl font-light italic text-slate-200 mb-12 max-w-3xl border-l-8 border-white/10 pl-10 py-2 leading-relaxed">
              "{artist.quote}"
            </p>
            <div className="flex flex-wrap gap-6">
              <button 
                onClick={() => document.getElementById('upcoming-shows')?.scrollIntoView({ behavior: 'smooth' })}
                className={`px-12 py-6 bg-gradient-to-r ${artist.accentColor} rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-110 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)]`}
              >
                Tôi muốn có mặt ở đó
              </button>
              <button 
                onClick={() => onSelectArtistStory?.(artist.id)}
                className="px-12 py-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/20 transition-all"
              >
                Lắng nghe tâm hồn
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Human Connection & Bio */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-3 gap-24">
        <div className="lg:col-span-2 space-y-16">
          <div>
            <p className="text-purple-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4">The Narrative</p>
            <h2 className="text-4xl md:text-6xl font-black mb-10 uppercase tracking-tighter italic flex items-center gap-6">
              Câu chuyện
              <div className={`h-2 flex-grow bg-gradient-to-r ${artist.accentColor} rounded-full opacity-30`} />
            </h2>
            <div className="text-2xl text-slate-400 leading-relaxed space-y-8 font-light italic">
              <p>{artist.bio}</p>
            </div>
            <button 
              onClick={() => onSelectArtistStory?.(artist.id)}
              className="mt-10 px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all"
            >
              Đọc hành trình đầy đủ ➔
            </button>
          </div>
          
          {/* Soul Connection Section */}
          <div className="bg-white/5 border border-white/5 rounded-[3.5rem] p-12 relative overflow-hidden">
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 blur-[80px] rounded-full" />
             <h3 className="text-2xl font-black uppercase italic mb-6">Âm nhạc của họ đã ở bên bạn lúc nào?</h3>
             <p className="text-slate-400 mb-8 leading-relaxed italic text-lg">
               Chia sẻ khoảnh khắc bài hát của {artist.name} đã thay đổi cảm xúc của bạn. Mỗi tấm vé không chỉ là chỗ ngồi, nó là sự đồng cảm tuyệt đối.
             </p>
             <button className="text-white font-black uppercase tracking-[0.2em] text-xs border-b-2 border-purple-600 pb-1 hover:text-purple-400 transition-all">
               Kết nối với cộng đồng Fan ➔
             </button>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className={`p-10 sticky top-32 bg-gradient-to-br ${artist.accentColor} rounded-[3rem] shadow-2xl relative overflow-hidden`}>
             <div className="absolute top-0 right-0 w-48 h-48 bg-white/20 blur-[80px] rounded-full pointer-events-none" />
             <h3 className="text-2xl font-black mb-8 uppercase italic tracking-tighter">Essential Tracks</h3>
             <ul className="space-y-6">
               {['Midnight Sun', 'Eclipse Pulse', 'Neon Dreams', 'Shadow Dance'].map((track, i) => (
                 <li key={track} className="flex items-center justify-between p-4 bg-black/30 rounded-2xl hover:bg-black/50 transition-all cursor-pointer group/track">
                   <div className="flex items-center gap-5">
                     <span className="text-[10px] font-black opacity-30 group-hover/track:opacity-100 transition-opacity">0{i+1}</span>
                     <span className="font-bold text-lg tracking-tight group-hover/track:translate-x-1 transition-transform">{track}</span>
                   </div>
                   <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover/track:opacity-100 transition-opacity">▶</div>
                 </li>
               ))}
             </ul>
             <button className="w-full mt-10 py-5 bg-white text-black font-black uppercase text-xs tracking-[0.2em] rounded-2xl hover:scale-105 transition-all shadow-xl">
               View All Experience
             </button>
          </div>
        </div>
      </section>

      {/* 3. Build-up to the Show */}
      <section id="upcoming-shows" className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-20">
          <p className="text-purple-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Final Act</p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">Đừng để lỡ nhịp</h2>
        </div>
        
        {upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {upcomingEvents.map(event => (
              <EventCard key={event.id} event={event} onClick={onSelectEvent} />
            ))}
          </div>
        ) : (
          <div className="bg-slate-950 p-24 rounded-[4rem] text-center border border-dashed border-white/5">
            <p className="text-slate-500 text-2xl italic">Màn đêm đang tĩnh lặng... Chờ đợi show diễn tiếp theo.</p>
          </div>
        )}
      </section>

      {/* 4. Final Experiential CTA */}
      <section className="max-w-5xl mx-auto px-6 py-32 text-center">
        <h3 className="text-4xl md:text-8xl font-black italic uppercase leading-[0.9] mb-16 tracking-tighter">
          GIỮ LẠI <br />
          <span className="text-purple-500">KHOẢNH KHẮC</span> <br />
          TUYỆT VỜI NÀY.
        </h3>
        <button 
          onClick={() => {
            if (upcomingEvents.length > 0) onSelectEvent(upcomingEvents[0].id);
          }}
          className={`px-20 py-8 bg-gradient-to-r ${artist.accentColor} rounded-3xl font-black uppercase tracking-[0.3em] text-lg hover:scale-110 transition-all shadow-[0_30px_60px_rgba(0,0,0,0.5)]`}
        >
          Tôi muốn có mặt ở đó
        </button>
      </section>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default ArtistDetail;
