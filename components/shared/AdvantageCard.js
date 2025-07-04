export default function AdvantageCard({ advantage, className = "" }) {
  return (
    <div className={`bg-gray-50 rounded-lg p-4 border border-gray-200 ${className}`}>
      <div className="text-2xl mb-2">{advantage.icon}</div>
      <h4 className="font-semibold mb-1 wholesale-card-title">{advantage.title}</h4>
      <p className="text-sm wholesale-card-text">{advantage.description}</p>
    </div>
  );
} 