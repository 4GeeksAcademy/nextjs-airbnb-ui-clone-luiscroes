import type { PhotoTone } from '@/types';

// Full class names in a map so Tailwind can detect them at build time
const TONES: Record<PhotoTone, string> = {
  sea: 'from-sky-300 to-cyan-600',
  sand: 'from-amber-100 to-orange-300',
  forest: 'from-emerald-300 to-green-700',
  sunset: 'from-rose-300 to-orange-500',
  stone: 'from-stone-200 to-stone-500',
  night: 'from-indigo-400 to-slate-800',
};

interface PhotoPlaceholderProps {
  tone: PhotoTone;
  label: string;
  className?: string;
}

const PhotoPlaceholder = ({ tone, label, className = '' }: PhotoPlaceholderProps) => (
  <div
    role="img"
    aria-label={label}
    className={`flex items-center justify-center bg-gradient-to-br ${TONES[tone]} ${className}`}
  >
    <span className="text-3xl opacity-70" aria-hidden="true">🏡</span>
  </div>
);

export default PhotoPlaceholder;
