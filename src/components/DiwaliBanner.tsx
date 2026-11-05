import React, { useRef, useState } from 'react';
import { Sparkles, ArrowRight, Wrench, MessageCircle, Play, Pause, Gift, Truck, ShieldCheck } from 'lucide-react';

interface DiwaliBannerProps {
  onExploreDeals: () => void;
  onOpenPCBuilder: () => void;
}

export const DiwaliBanner: React.FC<DiwaliBannerProps> = ({
  onExploreDeals,
  onOpenPCBuilder,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="bg-[#FFFFFF] py-6" aria-label="Diwali Festive Greetings & Special Offers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card */}
        <div className="bg-gradient-to-br from-[#FFF8F3] via-[#FFFFFF] to-[#FFF5EB] border border-[#E5E7EB] rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
          
          {/* Header Title with Festive Accents */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#783D1B] text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                <span>Diwali Festive Mega Celebration</span>
                <span className="text-amber-500 font-normal">|</span>
                <span className="text-[#FFB020] font-semibold">Special Offers Live</span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#172B4D] tracking-tight">
                Festival of Lights Mega Celebration & Exclusive Deals
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1 max-w-2xl">
                Computer Galaxy wishes you and your family endless joy, prosperity, and light! Celebrate this festive season with exclusive discounts across all custom gaming rigs, Intel/AMD processors, and NVIDIA RTX GPUs.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <button
                onClick={onExploreDeals}
                className="px-4 py-2.5 bg-[#783D1B] hover:bg-[#5C2E13] text-white text-xs font-bold rounded-lg shadow-sm transition-all flex items-center gap-1.5"
              >
                <span>Shop Festive Deals</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onOpenPCBuilder}
                className="px-4 py-2.5 bg-[#FFFFFF] hover:bg-[#F5F7FA] border border-[#E5E7EB] text-[#172B4D] text-xs font-semibold rounded-lg shadow-2xs transition-colors flex items-center gap-1.5"
              >
                <Wrench className="w-3.5 h-3.5 text-[#783D1B]" />
                <span>Diwali PC Builder</span>
              </button>
            </div>
          </div>

          {/* Video Player Container */}
          <div className="relative w-full aspect-video sm:aspect-21/9 rounded-xl overflow-hidden shadow-md border border-[#E5E7EB] bg-black group">
            <video
              ref={videoRef}
              src="/assets/aistudio/Orange_And_Pink_Vibrant_Diwali_Greetings_Video_9f51bd3e.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Overlay Gradient for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Video Controls (Floating bottom) */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex items-center gap-2 z-10">
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause Diwali video' : 'Play Diwali video'}
                className="p-2 sm:px-3 sm:py-1.5 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-xs font-medium rounded-lg border border-white/20 transition-all flex items-center gap-1.5 cursor-pointer shadow-lg"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span className="hidden sm:inline">Play</span>
                  </>
                )}
              </button>
            </div>

            {/* Floating Live Badge */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
              <div className="flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/20 text-white text-[11px] font-semibold shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Happy Diwali 🪔 Computer Galaxy</span>
              </div>
            </div>
          </div>

          {/* Festive Perks Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-3 border-t border-[#E5E7EB]/70">
            <div className="flex items-center gap-2.5 text-xs text-[#172B4D]">
              <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
                <Gift className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold block">Festive Gift Bundle</span>
                <span className="text-[#64748B] text-[11px]">Free RGB gaming deskmat with rigs</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-[#172B4D]">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-700 flex items-center justify-center shrink-0">
                <Truck className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold block">Guaranteed Express Dispatch</span>
                <span className="text-[#64748B] text-[11px]">Priority crating across India</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-[#172B4D]">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-700 flex items-center justify-center shrink-0">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <a
                  href="https://wa.me/917014443922?text=Hello%20Computer%20Galaxy,%20Happy%20Diwali!%20I%20want%20to%20inquire%20about%20Diwali%20Festive%20Offers%20for%20a%20PC%20build"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold hover:text-emerald-700 transition-colors block"
                >
                  WhatsApp Diwali Support
                </a>
                <span className="text-[#64748B] text-[11px]">+91 70144 43922</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Feature Value Pillars below banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="p-4 bg-[#F5F7FA] rounded-xl border border-[#E5E7EB] flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#783D1B]/10 text-[#783D1B] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#172B4D]">100% Genuine Hardware</h4>
              <p className="text-[11px] text-[#64748B] mt-0.5">Direct authorized brand distribution with GST bill</p>
            </div>
          </div>

          <div className="p-4 bg-[#F5F7FA] rounded-xl border border-[#E5E7EB] flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-100/70 text-emerald-600 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#172B4D]">Pan-India Express Safe</h4>
              <p className="text-[11px] text-[#64748B] mt-0.5">Heavy foam crated packaging with BlueDart Air</p>
            </div>
          </div>

          <div className="p-4 bg-[#F5F7FA] rounded-xl border border-[#E5E7EB] flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-100/70 text-[#FFB020] flex items-center justify-center shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#172B4D]">Zero Assembly Labor</h4>
              <p className="text-[11px] text-[#64748B] mt-0.5">Free cable management & stress testing included</p>
            </div>
          </div>

          <div className="p-4 bg-[#F5F7FA] rounded-xl border border-[#E5E7EB] flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-100/70 text-indigo-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#172B4D]">Guest Checkout Ready</h4>
              <p className="text-[11px] text-[#64748B] mt-0.5">No login or registration needed to place orders</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
