export default function GIALogo({ size = 40, showText = true }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex items-center justify-center rounded-2xl shadow-lg overflow-hidden"
        style={{ width: size, height: size, minWidth: size, background: 'linear-gradient(135deg, #000000 0%, #0a1628 60%, #1a3a6e 100%)', border: '1.5px solid rgba(37,99,235,0.5)', boxShadow: '0 0 18px rgba(37,99,235,0.35)' }}>
        <span className="font-bold select-none relative z-10"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: size * 0.38, letterSpacing: '-0.04em', background: 'linear-gradient(135deg, #60a5fa, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          TS
        </span>
      </div>
      {showText && (
        <span className="font-bold tracking-tight select-none"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: size * 0.5, background: 'linear-gradient(135deg, #60a5fa, #1d4ed8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          Techno Samald
        </span>
      )}
    </div>
  );
}