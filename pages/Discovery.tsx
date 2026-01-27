import React from "react";

interface DiscoveryProps {
  onSelectTheme?: (id: string) => void;
  onShowPlaylist?: () => void;
  onShowArticle?: () => void;
}

const Discovery: React.FC<DiscoveryProps> = ({
  onSelectTheme,
  onShowPlaylist,
  onShowArticle,
}) => {
  const collections = [
    {
      id: "summer",
      title: "Summer Night Vibe",
      count: "12 Concerts",
      color: "from-orange-500 to-rose-500",
      img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "indie",
      title: "Indie Soul Journey",
      count: "8 Events",
      color: "from-sky-400 to-emerald-500",
      img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "edm",
      title: "Electronic Escape",
      count: "15 Festivals",
      color: "from-indigo-600 to-purple-600",
      img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "chill",
      title: "Chill & Healing",
      count: "5 Acoustic",
      color: "from-slate-400 to-stone-300",
      img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pt-12 pb-24 space-y-24">
      {/* 1. Header Section */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6 italic italic">
          KHOẢNH KHẮC{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            & TÂM HỒN
          </span>
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          Âm nhạc không chỉ là những nốt nhạc, đó là những câu chuyện được kể
          bằng cảm xúc. Khám phá những trải nghiệm âm nhạc dành riêng cho tâm
          trạng của bạn.
        </p>
      </section>

      {/* 2. Featured Stories */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div
          onClick={onShowArticle}
          className="group relative aspect-video rounded-[2.5rem] overflow-hidden cursor-pointer"
        >
          <img
            src="https://phunugioi.com/wp-content/uploads/2021/09/hinh-anh-ve-am-nhac-long-lay.jpg?auto=format&fit=crop&q=80&w=1200?auto=format&fit=crop&q=80&w=1200"
            alt="Story"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-10 left-10 right-10">
            <span className="px-4 py-1.5 bg-purple-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">
              Long-form Story
            </span>
            <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
              Phía sau những ánh đèn sân khấu: Hành trình của một Indie Artist.
            </h3>
            <p className="text-slate-300 text-sm max-w-lg mb-6 line-clamp-2">
              Tìm hiểu về nỗ lực và đam mê của những nghệ sĩ trẻ khi họ lần đầu
              đứng trước hàng ngàn khán giả...
            </p>
            <button className="text-white font-bold flex items-center gap-2 hover:gap-4 transition-all">
              Đọc tiếp <span className="text-purple-400">→</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10">
          <div
            onClick={onShowPlaylist}
            className="bg-slate-900/50 rounded-[2rem] border border-white/5 p-10 flex flex-col md:flex-row gap-8 hover:border-purple-500/30 transition-all cursor-pointer"
          >
            <div className="w-32 h-32 flex-shrink-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-4xl shadow-lg">
              🎵
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter italic">
                Mood Playlist của tháng
              </h4>
              <p className="text-slate-400 mb-6">
                Âm nhạc cho những đêm không ngủ. Những bản nhạc chữa lành tâm
                hồn cho lúc 2 giờ sáng.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700"
                    />
                  ))}
                </div>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">
                  +12k People Listening
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-950 rounded-[2rem] border border-white/5 p-10 relative overflow-hidden group">
            <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 pointer-events-none overflow-hidden">
              <div className="h-full w-full bg-gradient-to-l from-cyan-500 to-transparent blur-3xl animate-pulse" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter italic">
              Gợi ý sự kiện theo Mood?
            </h4>
            <p className="text-slate-400 mb-8">
              Hãy cho chúng tôi biết bạn đang cảm thấy thế nào, BeatSync sẽ gợi
              ý đêm nhạc phù hợp nhất.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-full text-xs font-bold border border-white/10 transition-all">
                Sôi động
              </button>
              <button className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-full text-xs font-bold border border-white/10 transition-all">
                Trầm lắng
              </button>
              <button className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-full text-xs font-bold border border-white/10 transition-all">
                Lãng mạn
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Collections Grid */}
      <section>
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic">
              BỘ SƯU TẬP CHỦ ĐỀ
            </h2>
            <div className="w-16 h-1.5 bg-cyan-500 rounded-full mt-2" />
          </div>
          <button className="text-slate-500 font-bold uppercase text-xs tracking-widest hover:text-white transition-colors">
            Xem tất cả
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer"
              onClick={() => onSelectTheme?.(item.id)}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-40 group-hover:opacity-60 transition-opacity`}
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h4 className="text-2xl font-bold text-white mb-1 uppercase tracking-tighter italic leading-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-white/70 font-bold uppercase tracking-widest">
                  {item.count}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Discovery;
