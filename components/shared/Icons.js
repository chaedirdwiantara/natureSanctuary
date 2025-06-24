// React Icons - Heroicons & Feather Icons untuk Emu Oil Naturally
import { 
  // Natural & Health Icons
  HiOutlineSparkles,        // Natural ingredients
  HiOutlineShieldCheck,     // Guarantee/Safety
  HiOutlineHeart,           // Health benefits
  HiOutlineBolt,           // Fast-acting
  HiOutlineLeaf,           // Organic/Natural

  // Pain Relief Icons  
  HiOutlineFire,           // Anti-inflammatory
  HiOutlineClock,          // Long-lasting
  HiOutlineFlash,          // Fast relief
  
  // Business Icons
  HiOutlineOfficeBuilding, // Manufacturing
  HiOutlineUserGroup,      // Partnership
  HiOutlineGlobe,          // Export quality
  HiOutlineTruck,          // Delivery
  HiOutlineDocumentCheck,  // Certification

  // UI Icons
  HiOutlineArrowRight,     // Call-to-action
  HiOutlineArrowDown,      // Scroll indicator
  HiOutlineCheck,          // Benefits check
  HiOutlineStar,           // Rating
  HiOutlinePhone,          // Contact
  HiOutlineMail,           // Email
  HiOutlineLocationMarker, // Location

  // Trust Icons
  HiOutlineBadgeCheck,     // Australian made
  HiOutlineX,              // No chemicals
  HiOutlineBeaker          // Laboratory/Quality
} from 'react-icons/hi';

// Feather Icons untuk variasi tambahan
import {
  FiDroplet,               // Oil/liquid
  FiZap,                   // Energy/power
  FiShield,               // Protection
  FiTrendingUp,           // Improvement
  FiUsers,                // Community
  FiAward,                // Quality award
  FiTarget,               // Precision
  FiActivity              // Health activity
} from 'react-icons/fi';

// Material Design Icons untuk fitur khusus
import {
  MdOutlineHealthAndSafety, // Health & Safety
  MdOutlineLocalPharmacy,   // Pharmacy/Medical
  MdOutlineVerified,        // Verified quality
  MdOutlineEco             // Eco-friendly
} from 'react-icons/md';

// Icon Components dengan styling konsisten
export const Icons = {
  // === NATURAL & HEALTH ===
  Natural: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <HiOutlineLeaf className={className} style={{ color }} />
  ),
  
  Sparkles: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <HiOutlineSparkles className={className} style={{ color }} />
  ),
  
  Guarantee: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <HiOutlineShieldCheck className={className} style={{ color }} />
  ),
  
  Health: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <HiOutlineHeart className={className} style={{ color }} />
  ),

  Oil: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <FiDroplet className={className} style={{ color }} />
  ),

  Eco: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <MdOutlineEco className={className} style={{ color }} />
  ),

  HealthSafety: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <MdOutlineHealthAndSafety className={className} style={{ color }} />
  ),

  // === PAIN RELIEF ===
  FastActing: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <HiOutlineBolt className={className} style={{ color }} />
  ),
  
  AntiInflammatory: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <HiOutlineFire className={className} style={{ color }} />
  ),
  
  LongLasting: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <HiOutlineClock className={className} style={{ color }} />
  ),

  Power: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <FiZap className={className} style={{ color }} />
  ),

  Target: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <FiTarget className={className} style={{ color }} />
  ),

  Activity: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <FiActivity className={className} style={{ color }} />
  ),

  // === BUSINESS & TRUST ===
  Manufacturing: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <HiOutlineOfficeBuilding className={className} style={{ color }} />
  ),
  
  Partnership: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <HiOutlineUserGroup className={className} style={{ color }} />
  ),
  
  Export: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <HiOutlineGlobe className={className} style={{ color }} />
  ),
  
  Delivery: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <HiOutlineTruck className={className} style={{ color }} />
  ),
  
  Certificate: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <HiOutlineDocumentCheck className={className} style={{ color }} />
  ),

  AustralianMade: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <HiOutlineBadgeCheck className={className} style={{ color }} />
  ),

  NoChemicals: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <HiOutlineX className={className} style={{ color }} />
  ),

  Quality: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <FiAward className={className} style={{ color }} />
  ),

  Verified: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <MdOutlineVerified className={className} style={{ color }} />
  ),

  Laboratory: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <HiOutlineBeaker className={className} style={{ color }} />
  ),

  Pharmacy: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <MdOutlineLocalPharmacy className={className} style={{ color }} />
  ),

  // === UI ELEMENTS ===
  ArrowRight: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <HiOutlineArrowRight className={className} style={{ color }} />
  ),
  
  ArrowDown: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <HiOutlineArrowDown className={className} style={{ color }} />
  ),
  
  Check: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <HiOutlineCheck className={className} style={{ color }} />
  ),
  
  Star: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <HiOutlineStar className={className} style={{ color }} />
  ),

  // === CONTACT ===
  Phone: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <HiOutlinePhone className={className} style={{ color }} />
  ),
  
  Email: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <HiOutlineMail className={className} style={{ color }} />
  ),
  
  Location: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <HiOutlineLocationMarker className={className} style={{ color }} />
  ),

  // === ADDITIONAL ===
  Improvement: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <FiTrendingUp className={className} style={{ color }} />
  ),

  Community: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <FiUsers className={className} style={{ color }} />
  ),

  Protection: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <FiShield className={className} style={{ color }} />
  )
};

// Icon dengan ukuran preset
export const IconSizes = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-6 h-6", 
  lg: "w-8 h-8",
  xl: "w-12 h-12",
  "2xl": "w-16 h-16"
};

// Theme colors untuk setiap landing page
export const IconColors = {
  skincare: "#2e7d32",   // Green
  painrelief: "#d84315", // Orange-Red  
  wholesale: "#1565c0",  // Blue
  neutral: "#666666",    // Gray
  white: "#ffffff",      // White
  primary: "#1f2937"     // Dark
};

// Preset icon combinations untuk features
export const FeatureIcons = {
  skincare: {
    natural: { Icon: Icons.Natural, color: IconColors.skincare },
    guarantee: { Icon: Icons.Guarantee, color: IconColors.skincare },
    health: { Icon: Icons.Health, color: IconColors.skincare },
    eco: { Icon: Icons.Eco, color: IconColors.skincare },
    verified: { Icon: Icons.Verified, color: IconColors.skincare }
  },
  painrelief: {
    fastActing: { Icon: Icons.FastActing, color: IconColors.painrelief },
    antiInflammatory: { Icon: Icons.AntiInflammatory, color: IconColors.painrelief },
    longLasting: { Icon: Icons.LongLasting, color: IconColors.painrelief },
    target: { Icon: Icons.Target, color: IconColors.painrelief },
    activity: { Icon: Icons.Activity, color: IconColors.painrelief }
  },
  wholesale: {
    manufacturing: { Icon: Icons.Manufacturing, color: IconColors.wholesale },
    partnership: { Icon: Icons.Partnership, color: IconColors.wholesale },
    export: { Icon: Icons.Export, color: IconColors.wholesale },
    delivery: { Icon: Icons.Delivery, color: IconColors.wholesale },
    certificate: { Icon: Icons.Certificate, color: IconColors.wholesale }
  }
};

// Helper function untuk render icon dengan props
export const renderIcon = (iconName, props = {}) => {
  const IconComponent = Icons[iconName];
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
};

export default Icons; 