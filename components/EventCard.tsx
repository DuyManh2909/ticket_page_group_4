
import React from 'react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
  onClick: (id: string) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onClick }) => {
  return (
    <div 
      className="group relative bg-slate-900/50 rounded-2xl overflow-hidden border border-white/5 cursor-pointer hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-500"
      onClick={() => onClick(event.id)}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {event.status === 'Hot' && (
            <span className="px-3 py-1 bg-rose-500 text-[10px] font-bold uppercase tracking-widest rounded-full animate-pulse">Hot 🔥</span>
          )}
          {event.status === 'Sold Fast' && (
            <span className="px-3 py-1 bg-amber-500 text-[10px] font-bold uppercase tracking-widest rounded-full">Sold Fast ⚡</span>
          )}
          <span className="px-3 py-1 bg-slate-800/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest rounded-full">{event.category}</span>
        </div>

        {/* Info */}
        <div className="absolute bottom-0 left-0 w-full p-5">
          <p className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-1">{event.artist}</p>
          <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-purple-300 transition-colors">{event.title}</h3>
          
          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {event.date}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-5 flex items-center justify-between">
        <div>
          <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Giá vé từ</p>
          <p className="text-lg font-bold text-white">{(event.priceFrom / 1000).toLocaleString()}k <span className="text-xs text-slate-500 font-normal">VNĐ</span></p>
        </div>
        <button className="bg-slate-800 group-hover:bg-purple-600 px-4 py-2 rounded-xl text-xs font-bold transition-all transform group-hover:-translate-y-1">
          Chi tiết
        </button>
      </div>
    </div>
  );
};

export default EventCard;
