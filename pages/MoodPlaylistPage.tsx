
import React from 'react';
import { MOCK_ARTISTS, MOCK_EVENTS } from '../constants';

interface MoodPlaylistPageProps {
  onBack: () => void;
  onSelectArtist: (id: string) => void;
  onSelectEvent: (id: string) => void;
}

const MoodPlaylistPage: React.FC<MoodPlaylistPageProps> = ({ onBack, onSelectArtist, onSelectEvent }) => {
  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-purple-500/30">
      {/* Immersive Background Blur */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/20 blur-[150px] rounded-full" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <nav className="max-w-7xl mx-auto px-6 py-12 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-white transition-all group"
          >
            <span className="group-hover:-translate-x-2 transition-transform">←</span> Quay lại
          </button>
          <div className="px-6 py-2 bg-white/5 border border-white/5 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-500">
             Mood Playlist – Cho những đêm không ngủ
          </div>
        </nav>

        {/* Hero Mood */}
        <section className="max-w-7xl mx-auto px-6 pt-12 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-10 animate-[fadeIn_1s_ease-out]">
              <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-none uppercase">
                KHI THẾ GIỚI <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">ĐÃ CHÌM VÀO GIẤC NGỦ.</span>
              </h1>
              <p className="text-2xl text-slate-400 italic font-light leading-relaxed max-w-xl">
                 "Playlist này dành cho những lúc bạn nằm im, nghĩ quá nhiều và cần âm nhạc nói hộ lòng mình. Những giai điệu thấu hiểu tâm hồn vào lúc 2 giờ sáng."
              </p>
              <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
                 <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-500" /> 12 Tracks</span>
                 <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-indigo-500" /> Mood: Healing</span>
                 <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-pink-500" /> 12.4k Đang nghe</span>
              </div>
           </div>

           <div className="relative group aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-700/20 blur-[100px] rounded-full group-hover:scale-125 transition-transform duration-1000" />
              <div className="relative w-full h-full bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] shadow-2xl flex items-center justify-center text-8xl">
                 🌙
              </div>
              <div className="absolute -bottom-6 -right-6 p-8 bg-white text-black rounded-full text-4xl shadow-2xl cursor-pointer hover:scale-110 hover:bg-purple-500 hover:text-white transition-all">▶</div>
           </div>
        </section>

        {/* Artist Cards Connection */}
        <section className="bg-slate-950/50 py-32 border-y border-white/5">
           <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-end justify-between mb-16">
                 <div>
                    <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 text-white">Nghệ sĩ trong Playlist</h2>
                    <p className="text-slate-500 text-sm">Gặp gỡ những người tạo nên cảm xúc cho đêm nay.</p>
                 </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                 {MOCK_ARTISTS.slice(0, 3).map(artist => (
                    <div 
                      key={artist.id}
                      className="group bg-slate-900/40 border border-white/5 p-8 rounded-[2.5rem] hover:bg-white/5 transition-all flex flex-col items-center text-center"
                    >
                       <img src={artist.image} className="w-32 h-32 rounded-full object-cover mb-6 grayscale group-hover:grayscale-0 transition-all border-4 border-slate-800" />
                       <h4 className="text-2xl font-black italic uppercase mb-2 text-white">{artist.name}</h4>
                       <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-8">{artist.genre}</p>
                       
                       <div className="grid grid-cols-2 gap-4 w-full">
                          <button 
                             onClick={() => onSelectArtist(artist.id)}
                             className="py-3 bg-white/5 rounded-xl text-[9px] font-black uppercase tracking-widest text-slate-400 hover:bg-white/10 transition-all"
                          >
                             Profile
                          </button>
                          <button 
                             onClick={() => onSelectEvent(MOCK_EVENTS[1].id)}
                             className="py-3 bg-purple-600 rounded-xl text-[9px] font-black uppercase tracking-widest text-white hover:bg-purple-700 transition-all"
                          >
                             Xem Show
                          </button>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Soft CTA to Events */}
        <section className="max-w-5xl mx-auto px-6 py-40 text-center space-y-12">
           <p className="text-indigo-400 font-black uppercase tracking-[0.5em] text-xs">A Moment Awaits</p>
           <h3 className="text-4xl md:text-7xl font-black italic tracking-tighter leading-none uppercase text-white">
             Tìm một show diễn <br /> cho <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">TÂM TRẠNG NÀY?</span>
           </h3>
           <div className="pt-10 flex flex-col items-center gap-10">
              <button 
                onClick={() => onSelectEvent(MOCK_EVENTS[1].id)}
                className="px-20 py-8 bg-white text-black font-black uppercase tracking-[0.3em] text-sm rounded-3xl hover:bg-indigo-600 hover:text-white transition-all shadow-2xl hover:scale-110"
              >
                Khám phá show Acoustic
              </button>
              <button 
                onClick={onBack}
                className="text-slate-500 font-black uppercase tracking-widest text-[10px] border-b border-slate-800 pb-2 hover:text-white transition-colors"
              >
                Trở lại với thực tại
              </button>
           </div>
        </section>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default MoodPlaylistPage;
