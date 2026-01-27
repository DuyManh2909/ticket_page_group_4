import React, { useEffect, useRef } from "react";

interface EditorialArticlePageProps {
  onBack: () => void;
}

const EditorialArticlePage: React.FC<EditorialArticlePageProps> = ({
  onBack,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="bg-[#020617] text-white selection:bg-purple-500/30 overflow-x-hidden"
    >
      {/* Back Control */}
      <button
        onClick={onBack}
        className="fixed top-8 left-8 z-[100] flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-white transition-all group"
      >
        <span className="group-hover:-translate-x-2 transition-transform">
          ←
        </span>{" "}
        Quay lại Discovery
      </button>

      {/* 1. Opening Scene - Cinematic Hero */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1514525253361-bee8718a300a?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover brightness-[0.3]"
            alt="Stage Lights"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
        </div>

        <div className="relative z-10 max-w-5xl px-6 space-y-12 animate-[fadeIn_1.5s_ease-out]">
          <p className="text-purple-500 font-black uppercase tracking-[0.5em] text-xs">
            Editorial Phóng sự
          </p>
          <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.9]">
            Phía sau những <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              ánh đèn sân khấu
            </span>
          </h1>
          <p className="text-2xl text-slate-400 italic font-light max-w-3xl mx-auto border-l-4 border-purple-500 pl-8">
            "Có những đêm nhạc bắt đầu bằng sự im lặng, và kết thúc bằng tiếng
            vang thay đổi cả một đời người."
          </p>
        </div>
      </section>

      {/* 2. Chapter 1: The Personal Diary Feel */}
      <section className="max-w-4xl mx-auto px-6 py-40 space-y-16">
        <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
          I. Khởi đầu từ con số 0
        </h2>
        <div className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light italic space-y-10">
          <p>
            Hành trình của một nghệ sĩ Indie không bao giờ trải đầy hoa hồng như
            cách chúng ta thấy trên những video ca nhạc triệu view. Nó bắt đầu
            trong những căn phòng trọ chật hẹp, nơi chiếc micro rẻ tiền và chiếc
            soundcard cũ kỹ là những người bạn thân thiết nhất.
          </p>
          <p>
            Đó là những đêm thức trắng để gọt giũa từng câu chữ, là những lần
            xóa đi viết lại một giai điệu vì cảm thấy nó chưa đủ "thật". Đối với
            họ, âm nhạc không phải là công việc, đó là hơi thở, là cách duy nhất
            để họ giao tiếp với thế giới khi lời nói trở nên bất lực.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 py-10">
          <img
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800"
            className="rounded-3xl grayscale hover:grayscale-0 transition-all duration-700"
            alt="Studio"
          />
          <img
            src="https://toigingiuvedep.vn/wp-content/uploads/2022/06/hinh-anh-dj-hinh-nen-ban-dj.jpg?auto=format&fit=crop&q=80&w=800"
            className="rounded-3xl grayscale hover:grayscale-0 transition-all duration-700 mt-12"
            alt="Stage"
          />
        </div>
      </section>

      {/* 3. Chapter 2: High Contrast Stage Impact */}
      <section className="relative min-h-screen py-32 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-24 relative z-10">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-10 bg-purple-500/10 blur-[100px] rounded-full" />
            <img
              src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200"
              className="rounded-[3rem] shadow-2xl relative"
              alt="Concert Crowd"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
              II. Những sân khấu <br /> "không cát-xê"
            </h2>
            <div className="text-xl text-slate-400 font-light italic leading-relaxed space-y-6">
              <p>
                Họ từng hát ở những quán cafe chỉ có 5 khán giả, nơi tiếng máy
                pha cà phê đôi khi còn to hơn tiếng đàn. Họ từng diễn ở những
                hội chợ xa xôi mà cát-xê đôi khi chỉ là một bữa cơm tối và lời
                cảm ơn xã giao.
              </p>
              <p>
                Nhưng kỳ lạ thay, chính ở những nơi đó, ngọn lửa đam mê lại cháy
                rực rỡ nhất. Bởi họ biết rằng, chỉ cần một người dưới kia nhắm
                mắt và đu đưa theo điệu nhạc, hành trình của họ đã có ý nghĩa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Chapter 3: Pressure and Silence */}
      <section className="max-w-4xl mx-auto px-6 py-40 space-y-20 text-center">
        <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter italic">
          III. Áp lực, nghi ngờ và sự cô đơn
        </h2>
        <blockquote className="text-3xl md:text-5xl font-black italic text-white leading-tight">
          "Khi mọi người về hết, tiếng vỗ tay lùi xa, tôi ngồi lại với đống dây
          cáp loằng ngoằng và tự hỏi: Liệu mình có đang đi đúng hướng?"
        </blockquote>
        <p className="text-xl text-slate-400 font-light italic leading-relaxed max-w-2xl mx-auto">
          Gia đình khuyên tìm một công việc ổn định, bạn bè đã bắt đầu mua nhà
          mua xe. Còn họ, vẫn loay hoay với những nốt nhạc không ra tiền. Sự
          nghi ngờ bản thân đôi khi còn đáng sợ hơn cả sự nghèo khó.
        </p>
      </section>

      {/* 5. Chapter 4: Recognition Peak */}
      <section className="bg-white text-black py-40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.8]">
              Khoảnh khắc <br /> được thấu hiểu.
            </h2>
            <p className="text-2xl font-light italic leading-relaxed text-slate-700">
              Rồi một ngày, bài hát của họ bất ngờ len lỏi vào danh sách phát
              của hàng triệu người. Những buổi biểu diễn bắt đầu "cháy vé". Hàng
              ngàn cánh tay đưa lên theo nhịp điệu mà họ từng viết trong nước
              mắt.
            </p>
            <p className="text-xl font-bold uppercase tracking-widest text-purple-600 italic">
              Đây không phải là thành công, đây là sự đồng cảm.
            </p>
          </div>
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=1200"
              className="w-full h-full object-cover"
              alt="Success"
            />
          </div>
        </div>
      </section>

      {/* 6. Message - Final Peak */}
      <section className="py-40 bg-slate-950 text-center px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">
            Lời nhắn gửi
          </h2>
          <p className="text-2xl text-slate-400 font-light italic leading-relaxed">
            Gửi đến những người yêu âm nhạc: Khi bạn mua một tấm vé đi xem một
            nghệ sĩ Indie, bạn không chỉ mua một chỗ ngồi. Bạn đang mua niềm
            tin, bạn đang tiếp sức cho một giấc mơ chưa bao giờ tắt.
          </p>
          <div className="pt-20 space-y-8 flex flex-col items-center">
            <button
              onClick={onBack}
              className="px-20 py-8 bg-white text-black font-black uppercase tracking-[0.3em] text-sm rounded-3xl hover:bg-purple-600 hover:text-white transition-all shadow-2xl hover:scale-110"
            >
              Tôi muốn có một đêm như thế
            </button>
            <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.5em]">
              BeatSync Editorial 2024
            </p>
          </div>
        </div>
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

export default EditorialArticlePage;
