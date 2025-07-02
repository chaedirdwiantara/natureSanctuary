export default function AdvantageCard({ advantage, className = "" }) {
  return (
    <div className={`bg-white/10 rounded-lg p-4 backdrop-blur-sm ${className}`}>
      <div className="text-2xl mb-2">{advantage.icon}</div>
      <h4 className="font-semibold mb-1">{advantage.title}</h4>
      <p className="text-sm opacity-90">{advantage.description}</p>
    </div>
  );
} 