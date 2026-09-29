// High-quality custom SVG graphic assets matching Railpower & Railwire branding

export const RailpowerLogo = ({ className = "h-10", darkText = true }) => (
  <div className={`flex items-center gap-3 font-sans select-none cursor-pointer ${className}`}>
    <svg className="h-10 w-10 flex-shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" fill="#082B4C" />
      {/* Dynamic Wire Swirls */}
      <path d="M50 12 C 70 12, 88 30, 88 50 C 88 65, 75 80, 58 84 C 42 88, 25 76, 20 60 C 16 48, 24 32, 38 26 C 50 20, 68 28, 70 42 C 72 54, 60 66, 48 64" stroke="#F58220" strokeWidth="8" strokeLinecap="round"/>
      <path d="M50 22 C 64 22, 78 34, 78 50 C 78 62, 68 72, 54 74 C 42 76, 30 68, 26 55 C 22 44, 30 32, 42 28" stroke="#38BDF8" strokeWidth="6" strokeLinecap="round"/>
      <circle cx="50" cy="50" r="10" fill="#F58220" />
      <circle cx="50" cy="50" r="4" fill="#FFFFFF" />
    </svg>
    <div className="flex flex-col leading-none">
      <span className={`text-xl font-extrabold tracking-tight ${darkText ? 'text-navy' : 'text-white'}`}>
        RAILPOWER<span className="text-xs align-top font-normal text-brandOrange ml-0.5">™</span>
      </span>
      <span className="text-[9px] font-bold tracking-[0.2em] text-gray-500 uppercase mt-0.5">
        WIRES & CABLES
      </span>
    </div>
  </div>
);

export const RailwireLogo = ({ className = "h-10", darkText = true }) => (
  <div className={`flex items-center gap-3 font-sans select-none cursor-pointer ${className}`}>
    <svg className="h-10 w-10 flex-shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="90" height="90" rx="20" fill="#06233D"/>
      {/* Dynamic Stylized R Wire */}
      <path d="M25 80 V 20 H 55 C 70 20, 78 30, 78 42 C 78 54, 68 62, 52 62 H 25" stroke="#E11D48" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M48 62 L 78 80" stroke="#F58220" strokeWidth="10" strokeLinecap="round"/>
      <circle cx="78" cy="80" r="5" fill="#38BDF8" />
    </svg>
    <div className="flex flex-col leading-none">
      <span className={`text-xl font-extrabold tracking-tight ${darkText ? 'text-navy' : 'text-white'}`}>
        RAILWIRE<span className="text-xs align-top font-normal text-brandOrange ml-0.5">™</span>
      </span>
      <span className="text-[9px] font-bold tracking-[0.2em] text-gray-500 uppercase mt-0.5">
        WIRES & CABLES
      </span>
    </div>
  </div>
);

export const DualBrandLogo = ({ className = "" }) => (
  <div className={`flex items-center gap-4 md:gap-6 ${className}`}>
    <RailpowerLogo className="h-9" />
    <div className="h-8 w-[1.5px] bg-gray-300 hidden sm:block"></div>
    <RailwireLogo className="h-9 hidden sm:flex" />
  </div>
);

// High-fidelity custom SVG graphics for Hero Wires, Category Cards, and Banners
export const HeroWiresGraphic = () => (
  <svg className="w-full h-auto drop-shadow-2xl" viewBox="0 0 800 550" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="skylineGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0B1E36" stopOpacity="0.4"/>
        <stop offset="100%" stopColor="#06233D" stopOpacity="0.95"/>
      </linearGradient>
      <linearGradient id="copperGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FB923C"/>
        <stop offset="50%" stopColor="#EA580C"/>
        <stop offset="100%" stopColor="#9A3412"/>
      </linearGradient>
      <linearGradient id="redCoilGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#EF4444"/>
        <stop offset="100%" stopColor="#991B1B"/>
      </linearGradient>
      <linearGradient id="blueCoilGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#3B82F6"/>
        <stop offset="100%" stopColor="#1E3A8A"/>
      </linearGradient>
      <linearGradient id="yellowCoilGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FACC15"/>
        <stop offset="100%" stopColor="#CA8A04"/>
      </linearGradient>
      <linearGradient id="blackCoilGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#334155"/>
        <stop offset="100%" stopColor="#0F172A"/>
      </linearGradient>
      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="15" stdDeviation="15" floodColor="#000000" floodOpacity="0.5"/>
      </filter>
    </defs>

    {/* Ground Surface Reflection */}
    <ellipse cx="400" cy="460" rx="360" ry="70" fill="url(#skylineGrad)" opacity="0.8"/>

    {/* Red Wire Coil (Left Ground) */}
    <g filter="url(#shadow)">
      <ellipse cx="280" cy="380" rx="140" ry="60" fill="url(#redCoilGrad)" />
      <ellipse cx="280" cy="375" rx="110" ry="42" fill="#7F1D1D" />
      <ellipse cx="280" cy="370" rx="80" ry="28" fill="#1E293B" />
      {/* Coil Wraps */}
      <ellipse cx="280" cy="378" rx="135" ry="56" stroke="#F87171" strokeWidth="4" fill="none"/>
      <ellipse cx="280" cy="382" rx="125" ry="50" stroke="#DC2626" strokeWidth="5" fill="none"/>
      <ellipse cx="280" cy="386" rx="115" ry="45" stroke="#991B1B" strokeWidth="4" fill="none"/>
    </g>

    {/* Blue Wire Coil (Center Left Ground) */}
    <g filter="url(#shadow)">
      <ellipse cx="450" cy="410" rx="130" ry="55" fill="url(#blueCoilGrad)" />
      <ellipse cx="450" cy="405" rx="100" ry="38" fill="#1E3A8A" />
      <ellipse cx="450" cy="400" rx="70" ry="24" fill="#0F172A" />
      <ellipse cx="450" cy="408" rx="125" ry="51" stroke="#60A5FA" strokeWidth="4" fill="none"/>
      <ellipse cx="450" cy="412" rx="115" ry="45" stroke="#2563EB" strokeWidth="4" fill="none"/>
    </g>

    {/* Yellow Wire Coil (Center Right Ground) */}
    <g filter="url(#shadow)">
      <ellipse cx="580" cy="430" rx="120" ry="50" fill="url(#yellowCoilGrad)" />
      <ellipse cx="580" cy="425" rx="90" ry="34" fill="#854D0E" />
      <ellipse cx="580" cy="420" rx="60" ry="20" fill="#1E293B" />
      <ellipse cx="580" cy="428" rx="115" ry="46" stroke="#FDE047" strokeWidth="4" fill="none"/>
    </g>

    {/* Black Wire Coil (Right Bottom) */}
    <g filter="url(#shadow)">
      <ellipse cx="680" cy="445" rx="100" ry="42" fill="url(#blackCoilGrad)" />
      <ellipse cx="680" cy="440" rx="75" ry="28" fill="#020617" />
      <ellipse cx="680" cy="443" rx="95" ry="38" stroke="#475569" strokeWidth="4" fill="none"/>
    </g>

    {/* Vertical Multicore Wire Bundle (Right Top Standing) */}
    <g filter="url(#shadow)">
      {/* Main outer sheath */}
      <rect x="560" y="80" width="130" height="260" rx="14" fill="#0F172A" stroke="#334155" strokeWidth="4"/>
      
      {/* Individual Exposed Insulated Cores */}
      {/* Red Core */}
      <rect x="575" y="40" width="22" height="90" rx="11" fill="url(#redCoilGrad)" />
      <path d="M586 40 V 15" stroke="url(#copperGrad)" strokeWidth="10" strokeLinecap="round" />

      {/* Blue Core */}
      <rect x="602" y="30" width="22" height="100" rx="11" fill="url(#blueCoilGrad)" />
      <path d="M613 30 V 5" stroke="url(#copperGrad)" strokeWidth="10" strokeLinecap="round" />

      {/* Yellow Core */}
      <rect x="629" y="35" width="22" height="95" rx="11" fill="url(#yellowCoilGrad)" />
      <path d="M640 35 V 10" stroke="url(#copperGrad)" strokeWidth="10" strokeLinecap="round" />

      {/* Black/Green Core */}
      <rect x="656" y="45" width="22" height="85" rx="11" fill="#16A34A" />
      <path d="M667 45 V 20" stroke="url(#copperGrad)" strokeWidth="10" strokeLinecap="round" />
      
      {/* Sheath cap detail */}
      <ellipse cx="625" cy="80" rx="65" ry="18" fill="#1E293B" stroke="#475569" strokeWidth="3"/>
    </g>

    {/* Sparkles / Electric Energy Highlights */}
    <circle cx="613" cy="5" r="4" fill="#FEF08A" className="animate-pulse"/>
    <circle cx="640" cy="10" r="3" fill="#38BDF8" className="animate-pulse"/>
  </svg>
);

// City Skyline Dusk Background SVG
export const CitySkylineBackground = () => (
  <svg className="w-full h-full object-cover opacity-25" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="1440" height="600" fill="#04182B"/>
    {/* Skyline silhouette */}
    <path d="M0 600 V 420 H 60 V 380 H 110 V 450 H 160 V 320 H 220 V 450 H 290 V 260 H 340 V 230 H 380 V 450 H 450 V 310 H 510 V 450 H 580 V 200 H 640 V 180 H 670 V 450 H 740 V 290 H 810 V 450 H 880 V 240 H 940 V 210 H 990 V 450 H 1060 V 330 H 1120 V 450 H 1200 V 270 H 1260 V 450 H 1330 V 360 H 1380 V 450 H 1440 V 600 Z" fill="#0B2D4F"/>
    {/* Grid & Building windows */}
    <g fill="#F58220" opacity="0.4">
      <rect x="300" y="270" width="8" height="12" />
      <rect x="315" y="270" width="8" height="12" />
      <rect x="300" y="290" width="8" height="12" />
      <rect x="315" y="290" width="8" height="12" />
      <rect x="600" y="220" width="10" height="14" />
      <rect x="620" y="220" width="10" height="14" />
      <rect x="600" y="245" width="10" height="14" />
      <rect x="620" y="245" width="10" height="14" />
      <rect x="900" y="260" width="8" height="12" />
      <rect x="915" y="260" width="8" height="12" />
      <rect x="900" y="280" width="8" height="12" />
      <rect x="915" y="280" width="8" height="12" />
    </g>
  </svg>
);

// High Voltage Transmission Tower / Engineer Background for CTA section
export const TransmissionTowerGraphic = () => (
  <svg className="w-full h-full object-cover" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sunsetSky" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#F58220"/>
        <stop offset="40%" stopColor="#EA580C"/>
        <stop offset="80%" stopColor="#7C2D12"/>
        <stop offset="100%" stopColor="#082B4C"/>
      </linearGradient>
    </defs>
    <rect width="800" height="500" fill="url(#sunsetSky)"/>
    {/* Transmission Towers Silhouette */}
    <g stroke="#04182B" strokeWidth="3" fill="none" opacity="0.9">
      {/* Main Tower */}
      <path d="M480 500 L 580 100 L 680 500" strokeWidth="4"/>
      <path d="M520 380 H 640 M540 280 H 620 M555 190 H 605 M580 100 V 500"/>
      <path d="M490 450 L 670 450 M510 380 L 650 380 M530 280 L 630 280 M550 190 L 610 190"/>
      <path d="M520 380 L 640 450 M640 380 L 520 450 M540 280 L 620 380 M620 280 L 540 380"/>
      
      {/* Power Wires */}
      <path d="M0 120 Q 300 200, 555 190 T 800 150" stroke="#06233D" strokeWidth="3"/>
      <path d="M0 180 Q 300 260, 540 280 T 800 220" stroke="#06233D" strokeWidth="3"/>
      <path d="M0 260 Q 300 340, 520 380 T 800 310" stroke="#06233D" strokeWidth="3"/>
    </g>

    {/* Engineer silhouette with Hardhat */}
    <g fill="#06233D">
      <path d="M120 500 C 120 430, 160 380, 220 380 C 280 380, 320 430, 320 500 Z"/>
      {/* Neck & Head */}
      <circle cx="220" cy="330" r="35"/>
      {/* Hardhat */}
      <path d="M170 325 C 170 280, 270 280, 270 325 Z" fill="#F58220"/>
      <rect x="160" y="320" width="120" height="10" rx="5" fill="#F58220"/>
    </g>
  </svg>
);

// Individual Category SVGs for Product Cards
export const ProductSVGs = {
  houseWires: (
    <svg className="w-full h-36 mx-auto" viewBox="0 0 200 150" fill="none">
      <ellipse cx="100" cy="95" rx="75" ry="32" fill="#EF4444"/>
      <ellipse cx="100" cy="90" rx="55" ry="22" fill="#991B1B"/>
      <ellipse cx="100" cy="88" rx="40" ry="14" fill="#FEF2F2"/>
      <ellipse cx="100" cy="93" rx="72" ry="30" stroke="#F87171" strokeWidth="3" fill="none"/>
      
      {/* Yellow coil stacked */}
      <ellipse cx="110" cy="65" rx="60" ry="25" fill="#EAB308"/>
      <ellipse cx="110" cy="60" rx="42" ry="16" fill="#854D0E"/>
      <ellipse cx="110" cy="63" rx="57" ry="23" stroke="#FDE047" strokeWidth="3" fill="none"/>
    </svg>
  ),
  frWires: (
    <svg className="w-full h-36 mx-auto" viewBox="0 0 200 150" fill="none">
      {/* Standing Wire bundle */}
      <rect x="70" y="30" width="16" height="90" rx="8" fill="#EF4444"/>
      <rect x="92" y="20" width="16" height="100" rx="8" fill="#3B82F6"/>
      <rect x="114" y="25" width="16" height="95" rx="8" fill="#EAB308"/>
      <rect x="136" y="35" width="16" height="85" rx="8" fill="#22C55E"/>
      {/* Exposed copper tips */}
      <path d="M78 30 V 10" stroke="#B45309" strokeWidth="6" strokeLinecap="round"/>
      <path d="M100 20 V 5" stroke="#B45309" strokeWidth="6" strokeLinecap="round"/>
      <path d="M122 25 V 8" stroke="#B45309" strokeWidth="6" strokeLinecap="round"/>
      <path d="M144 35 V 15" stroke="#B45309" strokeWidth="6" strokeLinecap="round"/>
    </svg>
  ),
  hrfrWires: (
    <svg className="w-full h-36 mx-auto" viewBox="0 0 200 150" fill="none">
      <ellipse cx="100" cy="85" rx="80" ry="36" fill="#2563EB"/>
      <ellipse cx="100" cy="80" rx="60" ry="24" fill="#1E3A8A"/>
      <ellipse cx="100" cy="76" rx="42" ry="15" fill="#EFF6FF"/>
      <ellipse cx="100" cy="83" rx="77" ry="34" stroke="#60A5FA" strokeWidth="3" fill="none"/>
    </svg>
  ),
  submersible: (
    <svg className="w-full h-36 mx-auto" viewBox="0 0 200 150" fill="none">
      {/* Flat 3-Core Submersible Cable */}
      <rect x="30" y="55" width="140" height="40" rx="10" fill="#2563EB"/>
      <circle cx="60" cy="75" r="12" fill="#EF4444"/>
      <circle cx="100" cy="75" r="12" fill="#EAB308"/>
      <circle cx="140" cy="75" r="12" fill="#3B82F6"/>
      <circle cx="60" cy="75" r="5" fill="#B45309"/>
      <circle cx="100" cy="75" r="5" fill="#B45309"/>
      <circle cx="140" cy="75" r="5" fill="#B45309"/>
    </svg>
  ),
  industrial: (
    <svg className="w-full h-36 mx-auto" viewBox="0 0 200 150" fill="none">
      {/* Heavy Black Armored Cable */}
      <rect x="50" y="20" width="100" height="110" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="4"/>
      <circle cx="80" cy="55" r="16" fill="#EF4444"/>
      <circle cx="120" cy="55" r="16" fill="#3B82F6"/>
      <circle cx="80" cy="95" r="16" fill="#EAB308"/>
      <circle cx="120" cy="95" r="16" fill="#22C55E"/>
      <circle cx="80" cy="55" r="7" fill="#D97706"/>
      <circle cx="120" cy="55" r="7" fill="#D97706"/>
      <circle cx="80" cy="95" r="7" fill="#D97706"/>
      <circle cx="120" cy="95" r="7" fill="#D97706"/>
    </svg>
  ),
  multicore: (
    <svg className="w-full h-36 mx-auto" viewBox="0 0 200 150" fill="none">
      <rect x="65" y="40" width="70" height="90" rx="10" fill="#0F172A"/>
      <rect x="75" y="20" width="12" height="40" rx="6" fill="#EF4444"/>
      <rect x="94" y="15" width="12" height="45" rx="6" fill="#3B82F6"/>
      <rect x="113" y="22" width="12" height="38" rx="6" fill="#EAB308"/>
    </svg>
  ),
  accessories: (
    <svg className="w-full h-36 mx-auto" viewBox="0 0 200 150" fill="none">
      {/* Cable tray / metal ladder & red wire coil */}
      <rect x="20" y="40" width="160" height="40" rx="4" fill="#94A3B8" stroke="#475569" strokeWidth="3"/>
      <line x1="50" y1="40" x2="50" y2="80" stroke="#475569" strokeWidth="3"/>
      <line x1="80" y1="40" x2="80" y2="80" stroke="#475569" strokeWidth="3"/>
      <line x1="110" y1="40" x2="110" y2="80" stroke="#475569" strokeWidth="3"/>
      <line x1="140" y1="40" x2="140" y2="80" stroke="#475569" strokeWidth="3"/>
      
      <ellipse cx="140" cy="95" rx="45" ry="20" fill="#EF4444"/>
      <ellipse cx="140" cy="92" rx="30" ry="12" fill="#7F1D1D"/>
    </svg>
  )
};
