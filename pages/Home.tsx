
import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import { MOCK_EVENTS, MOCK_ARTISTS, MOCK_REVIEWS } from '../constants';

interface HomeProps {
  onSelectEvent: (id: string) => void;
  onSelectArtist: (id: string) => void;
  onShowStory?: () => void;
  onShowPlaylist?: () => void;
  onShowArticle?: () => void;
}

const Home: React.FC<HomeProps> = ({ onSelectEvent, onSelectArtist, onShowStory, onShowPlaylist, onShowArticle }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredEvents = activeCategory === 'All' 
    ? MOCK_EVENTS 
    : MOCK_EVENTS.filter(e => e.category === activeCategory);

  return (
    <div className="space-y-24 pb-20">
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2070" 
            alt="Concert Hero" 
            className="w-full h-full object-cover scale-105 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center max-w-5xl px-6">
          <p className="text-purple-400 font-black tracking-[0.4em] uppercase mb-8 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]">Có những đêm không chỉ để nghe</p>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-10 leading-[1.1] opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards] italic">
            MÀ ĐỂ NHỚ <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 uppercase">Suốt Cuộc Đời.</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 opacity-0 animate-[fadeIn_1s_ease-out_0.4s_forwards]">
            <button 
              onClick={() => document.getElementById('events-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-5 bg-white text-black font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-purple-600 hover:text-white hover:scale-105 transition-all flex items-center gap-3 shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
            >
              Bắt đầu hành trình ➔
            </button>
            <button 
               onClick={onShowStory}
               className="px-12 py-5 bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl font-black text-sm uppercase tracking-widest text-white hover:bg-white/10 transition-all"
            >
              Kể tôi nghe câu chuyện
            </button>
          </div>
        </div>
      </section>

      {/* AI SUGGESTION BUBBLE */}
      <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
         <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] flex flex-col md:flex-row items-center gap-8 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl flex-shrink-0 animate-bounce">
               ✨
            </div>
            <div className="flex-grow">
               <p className="text-slate-300 italic text-lg leading-relaxed">
                  "Bạn đã bao giờ tự hỏi điều gì xảy ra đằng sau những ánh đèn sân khấu rực rỡ kia chưa? Bài viết mới nhất của chúng tôi sẽ đưa bạn vào hành trình đầy cảm xúc của những nghệ sĩ Indie - nơi những giấc mơ bắt đầu từ con số 0."
               </p>
            </div>
            <button 
               onClick={onShowArticle}
               className="px-8 py-4 bg-purple-600 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-purple-700 transition-all whitespace-nowrap"
            >
               Đọc bài viết ngay
            </button>
         </div>
      </section>

      {/* 2. Featured Events Section */}
      <section id="events-section" className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-purple-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-2">Build-up phase</p>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic">Sự kiện bùng nổ</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} onClick={onSelectEvent} />
          ))}
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Home;
