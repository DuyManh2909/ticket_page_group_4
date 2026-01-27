import React, { useEffect, useRef, useState } from "react";

interface StoryPageProps {
  onBack: () => void;
}

const StoryPage: React.FC<StoryPageProps> = ({ onBack }) => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          } else {
            // Optional: reset on scroll away for re-animation
            // entry.target.classList.remove('opacity-100', 'translate-y-0');
            // entry.target.classList.add('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.3 },
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#020617] text-white selection:bg-purple-500/30 overflow-x-hidden">
      {/* Back Control */}
      <button
        onClick={onBack}
        className="fixed top-8 left-8 z-[100] flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-white transition-all group"
      >
        <span className="group-hover:-translate-x-2 transition-transform">
          ←
        </span>{" "}
        Quay lại thực tại
      </button>

      {/* 1. Opening Scene */}
      <section className="h-screen flex items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=2000"
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-[2px]"
          alt="Concert Blur"
        />
        <div
          ref={(el) => (sectionsRef.current[0] = el)}
          className="relative z-20 max-w-4xl text-center space-y-8 opacity-0 translate-y-10 transition-all duration-[1500ms] ease-out"
        >
          <p className="text-purple-400 font-black uppercase tracking-[0.5em] text-xs">
            Mở đầu
          </p>
          <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-[1.1]">
            CÓ NHỮNG ĐÊM NHẠC... <br />
            <span className="text-slate-500">bắt đầu rất bình thường.</span>
          </h2>
          <p className="text-2xl text-slate-300 font-light italic max-w-2xl mx-auto">
            Nhưng kết thúc bằng việc thay đổi ai đó mãi mãi.
          </p>
        </div>
      </section>

      {/* 2. Chapter 1: The Wait */}
      <section className="min-h-screen flex items-center justify-center p-6 relative">
        <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div
            ref={(el) => (sectionsRef.current[1] = el)}
            className="space-y-8 opacity-0 translate-y-10 transition-all duration-[1500ms] ease-out delay-200"
          >
            <p className="text-cyan-400 font-black uppercase tracking-[0.5em] text-xs">
              Chương I: Sự chờ đợi
            </p>
            <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-tight uppercase">
              Bạn không đến đó <br />
              chỉ để nghe nhạc.
            </h3>
            <p className="text-xl text-slate-400 font-light italic leading-relaxed">
              Bạn đến với một tâm trạng. Bạn đến với những vết xước cần được
              chữa lành, hoặc một niềm vui cần được sẻ chia.
            </p>
          </div>
          <div
            ref={(el) => (sectionsRef.current[2] = el)}
            className="relative aspect-[3/4] rounded-[3rem] overflow-hidden opacity-0 translate-y-10 transition-all duration-[2000ms] ease-out"
          >
            <img
              src="https://phunugioi.com/wp-content/uploads/2021/09/hinh-anh-ve-am-nhac-long-lay.jpg?auto=format&fit=crop&q=80&w=1200"
              className="w-full h-full object-cover grayscale brightness-75"
              alt="Pre-show"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
          </div>
        </div>
      </section>

      {/* 3. Chapter 2: The Explosion */}
      <section className="min-h-screen py-32 bg-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 blur-[150px] animate-pulse pointer-events-none" />

        <div
          ref={(el) => (sectionsRef.current[3] = el)}
          className="relative z-10 text-center max-w-5xl opacity-0 translate-y-10 transition-all duration-[1000ms] ease-out"
        >
          <p className="text-rose-500 font-black uppercase tracking-[0.5em] text-xs mb-8">
            Chương II: Bùng nổ
          </p>
          <h2 className="text-7xl md:text-[12rem] font-black tracking-tighter uppercase italic leading-[0.85] mb-12 drop-shadow-[0_20px_50px_rgba(244,63,94,0.3)]">
            KHI ÁNH ĐÈN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500">
              BẬT SÁNG.
            </span>
          </h2>
          <p className="text-3xl md:text-4xl text-white font-black italic tracking-tight uppercase max-w-3xl mx-auto">
            Mọi lo toan ở lại phía sau.
          </p>
        </div>
      </section>

      {/* 4. Chapter 3: The Connection */}
      <section className="min-h-screen py-32 flex items-center justify-center p-6">
        <div className="max-w-6xl w-full">
          <div
            ref={(el) => (sectionsRef.current[4] = el)}
            className="text-center mb-24 opacity-0 translate-y-10 transition-all duration-[1000ms]"
          >
            <p className="text-emerald-400 font-black uppercase tracking-[0.5em] text-xs mb-6">
              Chương III: Kết nối
            </p>
            <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase">
              Những tâm hồn đồng điệu
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                quote:
                  "Đó là lần đầu tiên tôi cảm thấy mình không cô đơn giữa hàng ngàn người.",
                author: "Lâm Nguyễn, 22 tuổi",
                vibe: "Healing",
              },
              {
                quote:
                  "Tôi đã hét lên đến khản cổ, và cảm thấy như vừa được sinh ra lần nữa.",
                author: "Hoàng Yến, 19 tuổi",
                vibe: "Freedom",
              },
            ].map((item, i) => (
              <div
                key={i}
                ref={(el) => (sectionsRef.current[5 + i] = el)}
                className="bg-white/5 border border-white/5 p-12 rounded-[4rem] space-y-6 opacity-0 translate-y-10 transition-all duration-[1500ms] hover:bg-white/10 transition-colors group"
              >
                <div className="text-4xl opacity-20 font-serif">“</div>
                <p className="text-2xl font-light italic leading-relaxed text-slate-200 group-hover:text-white transition-colors">
                  {item.quote}
                </p>
                <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                  <span className="text-sm font-black uppercase tracking-widest text-slate-500 italic">
                    {item.author}
                  </span>
                  <span className="text-[10px] px-3 py-1 bg-white/5 rounded-full font-black uppercase tracking-widest">
                    {item.vibe}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Chapter 4: The Afterglow */}
      <section className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=2000"
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.2]"
          alt="Empty Stage"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />

        <div
          ref={(el) => (sectionsRef.current[7] = el)}
          className="relative z-10 max-w-4xl text-center space-y-12 opacity-0 translate-y-10 transition-all duration-[2000ms]"
        >
          <p className="text-slate-600 font-black uppercase tracking-[0.5em] text-xs">
            Chương cuối: Dư âm
          </p>
          <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-tight uppercase">
            Âm nhạc kết thúc. <br />
            <span className="text-slate-500">Nhưng cảm xúc thì không.</span>
          </h2>
          <p className="text-xl text-slate-400 font-light italic max-w-2xl mx-auto leading-relaxed">
            Ánh đèn tắt, tiếng bass ngừng rung. Nhưng bạn bước ra ngoài kia với
            một con người mới. Đó là khoảnh khắc ký ức được sinh ra.
          </p>
        </div>
      </section>

      {/* 6. Final Invitation */}
      <section className="h-screen flex flex-col items-center justify-center p-6 text-center space-y-16">
        <div
          ref={(el) => (sectionsRef.current[8] = el)}
          className="space-y-6 opacity-0 translate-y-10 transition-all duration-[1000ms]"
        >
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic italic">
            Bạn đã sẵn sàng để viết...
          </h3>
          <h2 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase italic leading-none bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            CÂU CHUYỆN <br /> CỦA RIÊNG MÌNH?
          </h2>
        </div>

        <div
          ref={(el) => (sectionsRef.current[9] = el)}
          className="flex flex-col items-center gap-10 opacity-0 translate-y-10 transition-all duration-[1500ms]"
        >
          <button
            onClick={onBack}
            className="px-20 py-8 bg-white text-black font-black uppercase tracking-[0.3em] text-lg rounded-3xl hover:bg-purple-600 hover:text-white transition-all shadow-[0_40px_80px_rgba(255,255,255,0.1)] hover:scale-110"
          >
            Tôi muốn có một đêm như thế
          </button>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] animate-pulse">
            Cuộn lên để đọc lại câu chuyện
          </p>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-pulse-neon {
          animation: pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default StoryPage;
