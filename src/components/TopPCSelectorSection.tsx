import React from 'react';
import {
  Monitor,
  Gamepad2,
  Wrench,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  MessageCircle,
  Sparkles,
} from 'lucide-react';

interface TopPCSelectorSectionProps {
  onNavigate: (view: 'basic-computers' | 'gaming-computers' | 'custom-pc') => void;
}

export const TopPCSelectorSection: React.FC<TopPCSelectorSectionProps> = ({
  onNavigate,
}) => {
  const handleSelectBasic = () => {
    onNavigate('basic-computers');
  };

  const handleSelectGaming = () => {
    onNavigate('gaming-computers');
  };

  const handleSelectCustom = () => {
    onNavigate('custom-pc');
  };

  return (
    <section className="bg-[#FFFFFF] pt-6 pb-2" aria-label="Desktop Computer Categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#783D1B]/10 text-[#783D1B] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore Computers By Need</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D] tracking-tight">
              Basic Computer, Gaming Computer & Custom PC
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1 max-w-2xl">
              Choose the perfect system built with 100% genuine components, official manufacturer warranty, and free pan-India insured shipping.
            </p>
          </div>
          <div className="text-xs text-[#64748B] font-medium hidden md:block">
            Need guidance? WhatsApp an engineer at <a href="https://wa.me/917014443922" target="_blank" rel="noopener noreferrer" className="text-[#783D1B] font-bold hover:underline">+91 70144 43922</a>
          </div>
        </div>

        {/* 3 Main Desktop Choice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          
          {/* Card 1: Basic Computer */}
          <div
            onClick={handleSelectBasic}
            className="bg-[#FFFFFF] hover:bg-[#F5F7FA]/40 border-2 border-[#E5E7EB] hover:border-[#783D1B]/40 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group relative cursor-pointer"
          >
            <div>
              {/* Badge & Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full">
                  Home, Student & Office
                </span>
                <div className="w-11 h-11 rounded-xl bg-sky-100/70 text-sky-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Monitor className="w-6 h-6" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-[#172B4D] group-hover:text-[#783D1B] transition-colors">
                Basic Computer
              </h3>
              <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
                Dependable, high-efficiency desktop systems optimized for schooling, Tally ERP, MS Office, Zoom conferences, accounting firms, and smooth everyday web browsing.
              </p>


              {/* Key Features Bullet List */}
              <ul className="mt-4 pt-3 border-t border-[#E5E7EB] space-y-2 text-xs text-[#172B4D]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Intel Core i3 / i5 & AMD Ryzen Processors</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>16GB RAM + Ultra-Fast NVMe SSD Storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Windows 11 Ready & Dual-Monitor Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#783D1B] shrink-0" />
                  <span className="text-[#64748B] text-[11px]">3-Year Full Hardware Warranty Included</span>
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex flex-col gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectBasic();
                }}
                className="w-full py-2.5 px-4 bg-[#783D1B] hover:bg-[#5C2E13] text-white text-xs font-bold rounded-lg shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>View Basic Computers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="https://wa.me/917014443922?text=Hello%20Computer%20Galaxy,%20I%20am%20interested%20in%20a%20Basic%20Computer%20for%20home/office%20use"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-full py-2 px-3 text-center text-[11px] font-semibold text-[#64748B] hover:text-[#783D1B] flex items-center justify-center gap-1 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Instant WhatsApp Quote</span>
              </a>
            </div>
          </div>

          {/* Card 2: Gaming Computer */}
          <div
            onClick={handleSelectGaming}
            className="bg-[#FFFFFF] hover:bg-[#F5F7FA]/40 border-2 border-[#E5E7EB] hover:border-[#FFB020]/60 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group relative cursor-pointer"
          >
            <div>
              {/* Badge & Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                  Esports & 4K AAA Rigs
                </span>
                <div className="w-11 h-11 rounded-xl bg-amber-100/70 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Gamepad2 className="w-6 h-6" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-[#172B4D] group-hover:text-[#783D1B] transition-colors">
                Gaming Computer
              </h3>
              <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
                Hand-crafted liquid-cooled battle stations designed for maximum frame rates in Black Myth: Wukong, Cyberpunk 2077, GTA V, Valorant, and competitive gaming.
              </p>

              {/* Key Features Bullet List */}
              <ul className="mt-4 pt-3 border-t border-[#E5E7EB] space-y-2 text-xs text-[#172B4D]">
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#FFB020] shrink-0" />
                  <span>GeForce RTX 4060, 4070 & 4080 Super GPUs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>AMD Ryzen 7800X3D & Intel 14th Gen CPUs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>32GB DDR5 6000MHz RGB & AIO Liquid Cooling</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#783D1B] shrink-0" />
                  <span className="text-[#64748B] text-[11px]">24-Hour Stress Tested & Burn-In Certified</span>
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex flex-col gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectGaming();
                }}
                className="w-full py-2.5 px-4 bg-[#172B4D] hover:bg-[#0F1E36] text-white text-xs font-bold rounded-lg shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Explore Gaming Computers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="https://wa.me/917014443922?text=Hello%20Computer%20Galaxy,%20I%20am%20looking%20for%20a%20Gaming%20PC%20and%20need%20recommendations"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-full py-2 px-3 text-center text-[11px] font-semibold text-[#64748B] hover:text-[#783D1B] flex items-center justify-center gap-1 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Talk to Gaming Specialist</span>
              </a>
            </div>
          </div>

          {/* Card 3: Custom PC */}
          <div
            onClick={handleSelectCustom}
            className="bg-[#FFFFFF] hover:bg-[#F5F7FA]/40 border-2 border-[#783D1B]/40 hover:border-[#783D1B] rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group relative cursor-pointer"
          >
            <div>
              {/* Badge & Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#783D1B] bg-[#783D1B]/10 border border-[#783D1B]/20 px-3 py-1 rounded-full">
                  Interactive Configurator
                </span>
                <div className="w-11 h-11 rounded-xl bg-[#783D1B]/10 text-[#783D1B] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Wrench className="w-6 h-6" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-[#172B4D] group-hover:text-[#783D1B] transition-colors">
                Custom PC
              </h3>
              <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
                Hand-pick your processor, graphics card, RAM, storage, and cabinet with our live socket compatibility engine and wattage headroom calculator.
              </p>

              {/* Key Features Bullet List */}
              <ul className="mt-4 pt-3 border-t border-[#E5E7EB] space-y-2 text-xs text-[#172B4D]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Real-time LGA1700 & AM5 Socket Verification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Power Supply Headroom & Thermal Calculation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free Pro Cable Routing & Thermal Grizzly Paste</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#783D1B] shrink-0" />
                  <span className="text-[#64748B] text-[11px]">100% Tax Invoices on All Selected Brands</span>
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex flex-col gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectCustom();
                }}
                className="w-full py-2.5 px-4 bg-[#783D1B] hover:bg-[#5C2E13] text-white text-xs font-bold rounded-lg shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Wrench className="w-3.5 h-3.5" />
                <span>Launch Custom PC Builder</span>
              </button>
              <a
                href="https://wa.me/917014443922?text=Hello%20Computer%20Galaxy,%20I%20want%20to%20consult%20an%20engineer%20for%20a%20Custom%20PC%20build"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-full py-2 px-3 text-center text-[11px] font-semibold text-[#64748B] hover:text-[#783D1B] flex items-center justify-center gap-1 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Consult Custom PC Engineer</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
