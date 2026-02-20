import { useEffect, useState } from 'react';
import { FlaskConical } from 'lucide-react';

/**
 * Indicador visual discreto que muestra que el A/B testing está activo
 * Solo visible en desarrollo o cuando se presiona el atajo de teclado
 */
export function ABTestingIndicator({ onClick }: { onClick: () => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostrar en desarrollo
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }

    // O cuando se presiona Shift 3 veces rápido
    let shiftPresses = 0;
    let timeout: NodeJS.Timeout;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Shift') {
        shiftPresses++;
        
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          shiftPresses = 0;
        }, 1000);

        if (shiftPresses >= 3) {
          setIsVisible(prev => !prev);
          shiftPresses = 0;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timeout);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-20 right-4 z-[9998] bg-novo-secondary text-black p-3 rounded-full shadow-lg hover:scale-110 transition-transform group"
      title="Abrir Dashboard de A/B Testing (Ctrl/Cmd + Shift + A)"
    >
      <FlaskConical className="w-5 h-5" />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 bg-black text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        A/B Testing Dashboard
        <div className="text-[10px] text-white/60 mt-1">
          Ctrl/Cmd + Shift + A
        </div>
      </div>

      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-novo-secondary animate-ping opacity-20" />
    </button>
  );
}
