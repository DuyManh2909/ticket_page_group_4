
import React from 'react';
import { MOCK_ARTISTS } from '../constants';

interface MyArtistsProps {
  onSelectArtist: (id: string) => void;
}

const MyArtists: React.FC<MyArtistsProps> = ({ onSelectArtist }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-24 animate-[fadeIn_0.5s_ease-out]">
      {/* 1. Header Section */}
      <section className="text-center max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic italic mb-6">
          NGHỆ SĨ <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">CỦA TÔI</span>
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          Theo dõi những nghệ sĩ yêu thích để không bao giờ bỏ lỡ khoảnh khắc cháy hết mình dưới ánh đèn sân khấu.
        </p>
      </section>

      {/* 2. Followed Artists Grid */}
      <section>
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic">Đang theo dõi</h2>
            <div className="w-12 h-1.5 bg-purple-600 rounded-full mt-2" />
          </div>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">4 Nghệ sĩ</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {MOCK_ARTISTS.map(artist => (
            <div 
              key={artist.id}
              className="group relative bg-slate-900/50 rounded-[2.5rem] border border-white/5 p-8 flex flex-col items-center text-center hover:border-purple-500/30 transition-all cursor-pointer overflow-hidden"
              onClick={() => onSelectArtist(artist.id)}
            >
              {/* Status Badge */}
              {artist.hasUpcomingShow && (
                <div className="absolute top-6 right-6">
                   <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping" />
                   <div className="absolute inset-0 w-3 h-3 bg-emerald-500 rounded-full" title="Có show mới!" />
                </div>
              )}
              
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-all scale-75 group-hover:scale-100" />
                <img src={artist.image} alt={artist.name} className="w-32 h-32 rounded-full border-4 border-slate-800 object-cover z-10 relative group-hover:border-purple-500 transition-all duration-500" />
              </div>

              <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic mb-1 group-hover:text-purple-400 transition-colors">{artist.name}</h3>
              <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-6">{artist.genre}</p>
              
              <div className="w-full flex flex-col gap-2">
                 <button className={`py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${artist.hasUpcomingShow ? 'bg-purple-600 text-white' : 'bg-white/5 text-slate-400'}`}>
                    {artist.hasUpcomingShow ? '🎫 Xem show sắp tới' : 'Chưa có show'}
                 </button>
                 <div className="flex items-center justify-center gap-2 mt-4">
                    <span className="text-[10px] text-slate-600 uppercase font-black tracking-widest">Thông báo</span>
                    <div className="w-8 h-4 bg-purple-600 rounded-full relative cursor-pointer shadow-inner">
                       <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-lg" />
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Discover New Artists */}
      <section className="bg-slate-900/30 rounded-[3rem] p-12 border border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic mb-4">Gợi ý cho bạn</h2>
          <p className="text-slate-400">Dựa trên thể loại âm nhạc bạn thường nghe.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { name: "Neon Souls", genre: "Synthwave", img: "https://picsum.photos/seed/n1/300/300", vibes: ["Bùng nổ", "80s Vibe"] },
            { name: "Serenity", genre: "Ambient Pop", img: "https://picsum.photos/seed/n2/300/300", vibes: ["Chill", "Deep Soul"] },
            { name: "Bass Hunter", genre: "Hard Techno", img: "https://picsum.photos/seed/n3/300/300", vibes: ["Hăng hái", "Underground"] },
          ].map(newArtist => (
            <div key={newArtist.name} className="flex gap-6 items-center p-6 bg-slate-900 rounded-[2rem] border border-white/5 hover:bg-slate-800/50 transition-all group cursor-pointer">
              <img src={newArtist.img} className="w-20 h-20 rounded-2xl object-cover border border-white/10" />
              <div className="flex-grow">
                <h4 className="text-xl font-black text-white uppercase tracking-tighter italic group-hover:text-purple-400 transition-colors">{newArtist.name}</h4>
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-2">{newArtist.genre}</p>
                <div className="flex gap-1">
                  {newArtist.vibes.map(v => <span key={v} className="text-[8px] px-2 py-0.5 bg-white/5 rounded-full text-slate-400 uppercase font-bold">{v}</span>)}
                </div>
              </div>
              <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-purple-600 transition-all font-black text-xl">
                +
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Notification Settings */}
      <section className="max-w-4xl mx-auto py-20 px-10 bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-[3rem] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
         <div className="flex-grow">
            <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic mb-4 leading-none">Cài đặt thông báo thông minh</h3>
            <p className="text-slate-300">Nhận thông báo qua Email hoặc Mobile App ngay khi nghệ sĩ bạn theo dõi mở bán vé.</p>
         </div>
         <button className="px-12 py-5 bg-white text-black font-black uppercase text-xs tracking-widest rounded-2xl hover:bg-purple-600 hover:text-white transition-all transform hover:-translate-y-1">
           Cấu hình ngay
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

export default MyArtists;
