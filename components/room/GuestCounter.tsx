interface GuestCounterProps {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

const STEP = 'flex h-8 w-8 items-center justify-center rounded-full border border-neutral-400 text-lg disabled:cursor-not-allowed disabled:opacity-30';

// Stateless control: the BookingCard owns the guests state
const GuestCounter = ({ value, min, max, onChange }: GuestCounterProps) => (
  <div className="flex items-center justify-between rounded-lg border border-neutral-300 px-4 py-3">
    <div>
      <p className="text-xs font-semibold uppercase">Huéspedes</p>
      <p className="text-xs text-neutral-500">Máximo {max}</p>
    </div>
    <div className="flex items-center gap-3">
      <button type="button" aria-label="Quitar huésped" onClick={() => onChange(value - 1)} disabled={value <= min} className={STEP}>
        −
      </button>
      <span className="w-4 text-center font-medium" aria-live="polite">{value}</span>
      <button type="button" aria-label="Añadir huésped" onClick={() => onChange(value + 1)} disabled={value >= max} className={STEP}>
        +
      </button>
    </div>
  </div>
);

export default GuestCounter;
