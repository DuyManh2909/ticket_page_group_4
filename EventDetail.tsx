
import React, { useState, useMemo } from 'react';
import { Event, TicketTier, PaymentStatus } from '../types';
import { MOCK_ARTISTS } from '../constants';

interface EventDetailProps {
  event: Event;
  tiers: TicketTier[]; // Nhận danh sách tier động từ App
  paymentStatus: PaymentStatus;
  onSelectArtist: (id: string) => void;
  onPurchase?: (event: Event, tier: TicketTier, quantity: number) => Promise<void>;
}

const EventDetail: React.FC<EventDetailProps> = ({ event, tiers, paymentStatus, onSelectArtist, onPurchase }) => {
  const [selectedTierId, setSelectedTierId] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Tìm tier đang được chọn
  const activeTier = useMemo(() => tiers.find(t => t.id === selectedTierId), [tiers, selectedTierId]);
  const artistData = MOCK_ARTISTS.find(a => a.id === event.artistId);

  // Tính tổng tiền
  const totalPrice = useMemo(() => (activeTier?.price || 0) * quantity, [activeTier, quantity]);

  // Xử lý thay đổi số lượng
  const adjustQuantity = (delta: number) => {
    if (!activeTier) return;
    const newQty = quantity + delta;
    if (newQty >= 1 && newQty <= activeTier.remaining) {
      setQuantity(newQty);
    }
  };

  // Mỗi khi đổi tier, reset quantity về 1
  const handleSelectTier = (tierId: string, remaining: number) => {
    if (remaining === 0 || paymentStatus === 'loading') return;
    setSelectedTierId(tierId);
    setQuantity(1);
    setErrorMessage(null);
  };

  const handlePayment = async () => {
    if (!activeTier || !onPurchase) return;
    
    setErrorMessage(null);
    try {
      await onPurchase(event, activeTier, quantity);
    } catch (error: any) {
      setErrorMessage(error.message || "Thanh toán thất bại. Vui lòng thử lại.");
    }
  };

  return (
    <div className="pb-20 text-white">
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="flex-grow">
              <div className="flex gap-3 mb-6">
                <span className="px-4 py-1.5 bg-purple-600 rounded-full text-xs font-black uppercase tracking-widest">{event.category}</span>
                <span className="px-4 py-1.5 bg-rose-500 rounded-full text-xs font-black uppercase tracking-widest animate-pulse">🔥 Hot Ticket</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter uppercase">{event.title}</h1>
              <div className="flex flex-wrap gap-6 text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">📍</div>
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">📅</div>
                  <span>{event.date} • 19:30</span>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-auto">
               <button 
                onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full md:w-auto px-12 py-5 bg-white text-black font-black rounded-2xl hover:bg-purple-500 hover:text-white transition-all transform hover:-translate-y-2 shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
               >
                 ĐẶT VÉ NGAY
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content */}
      <section className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4 uppercase">
              Giới thiệu sự kiện
              <div className="flex-grow h-px bg-white/10" />
            </h2>
            <div className="text-slate-400 leading-relaxed text-lg space-y-4">
              <p>{event.description}</p>
              <p>Hệ thống âm thanh được tinh chỉnh bởi các kỹ sư hàng đầu thế giới, đảm bảo trải nghiệm thính giác thuần khiết nhất.</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4 uppercase">
              Line-up nghệ sĩ
              <div className="flex-grow h-px bg-white/10" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {artistData && (
                <div 
                  onClick={() => onSelectArtist(artistData.id)}
                  className="group bg-slate-900 border border-white/5 rounded-2xl p-6 flex items-center gap-6 hover:border-purple-500 transition-all cursor-pointer"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-slate-700 group-hover:border-purple-500 transition-all">
                    <img src={artistData.image} alt={artistData.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{artistData.name}</h4>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-2">Main Artist</p>
                    <span className="text-[10px] text-purple-400 font-bold uppercase underline">Xem Profile</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* BOX ĐẶT VÉ */}
        <div className="lg:col-span-1" id="booking-section">
          <div className="sticky top-28 space-y-6">
            <div className="bg-slate-900 rounded-[2rem] border border-white/10 p-8 shadow-2xl overflow-hidden relative">
              <h3 className="text-2xl font-bold text-white mb-8 uppercase tracking-tighter">Chọn loại vé</h3>
              
              <div className="space-y-4 mb-8">
                {tiers.map(tier => {
                  const isSoldOut = tier.remaining === 0;
                  const isSelected = selectedTierId === tier.id;
                  return (
                    <div 
                      key={tier.id}
                      onClick={() => handleSelectTier(tier.id, tier.remaining)}
                      className={`p-5 rounded-2xl border-2 transition-all cursor-pointer relative ${
                        isSoldOut ? 'opacity-40 cursor-not-allowed border-transparent bg-slate-800/50' :
                        isSelected ? 'border-purple-500 bg-purple-500/10' : 'border-white/10 bg-white/5 hover:border-white/30'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-white">{tier.name}</h4>
                        <span className="font-bold text-purple-400">{(tier.price / 1000).toLocaleString()}k</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest">
                        <span className={isSoldOut ? 'text-rose-500' : 'text-slate-500'}>
                          {isSoldOut ? 'SOLD OUT' : `${tier.remaining} VÉ CÒN LẠI`}
                        </span>
                        {isSelected && <span className="text-purple-500">Đang chọn</span>}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* BỘ CHỌN SỐ LƯỢNG */}
              {selectedTierId && activeTier && (
                <div className="space-y-6 animate-[fadeIn_0.3s_ease-out]">
                  <div className="flex items-center justify-between bg-white/5 p-4 rounded-2xl border border-white/5">
                    <span className="text-slate-400 text-sm uppercase font-bold tracking-widest">Số lượng</span>
                    <div className="flex items-center gap-6">
                      <button 
                        onClick={() => adjustQuantity(-1)}
                        disabled={quantity <= 1 || paymentStatus === 'loading'}
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 disabled:opacity-30 transition-all"
                      >
                        -
                      </button>
                      <span className="text-2xl font-black text-white w-8 text-center">{quantity}</span>
                      <button 
                        onClick={() => adjustQuantity(1)}
                        disabled={quantity >= activeTier.remaining || paymentStatus === 'loading'}
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 disabled:opacity-30 transition-all"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between mb-4 border-t border-white/10 pt-6">
                    <span className="text-slate-400">Tổng cộng</span>
                    <div className="text-right">
                      <span className="text-2xl font-black text-white">
                        {(totalPrice / 1000).toLocaleString()}k <span className="text-xs font-normal text-slate-500">VNĐ</span>
                      </span>
                      <p className="text-[10px] text-slate-500 uppercase font-bold mt-1 tracking-widest">{quantity} vé x {(activeTier.price/1000).toLocaleString()}k</p>
                    </div>
                  </div>

                  {errorMessage && (
                    <div className="p-4 bg-rose-500/20 border border-rose-500/50 rounded-xl text-rose-500 text-xs text-center animate-shake">
                      {errorMessage}
                    </div>
                  )}

                  <button 
                    disabled={paymentStatus === 'loading' || paymentStatus === 'success'}
                    onClick={handlePayment}
                    className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-xl ${
                      paymentStatus === 'success' ? 'bg-emerald-500 text-white' :
                      paymentStatus === 'loading' ? 'bg-purple-600/50 cursor-wait' : 
                      'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:scale-[1.02]'
                    }`}
                  >
                    {paymentStatus === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ĐANG THANH TOÁN...
                      </>
                    ) : paymentStatus === 'success' ? (
                      <>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        THÀNH CÔNG!
                      </>
                    ) : (
                      'THANH TOÁN NGAY'
                    )}
                  </button>
                </div>
              )}
              
              {!selectedTierId && (
                <div className="text-center py-6 text-slate-500 italic text-sm border-t border-white/5 mt-4">
                  Vui lòng chọn một loại vé để tiếp tục
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake { animation: shake 0.2s ease-in-out infinite alternate; animation-iteration-count: 2; }
      `}</style>
    </div>
  );
};

export default EventDetail;
