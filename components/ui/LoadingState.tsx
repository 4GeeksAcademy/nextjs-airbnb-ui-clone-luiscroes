interface LoadingStateProps {
  label?: string;
}

const LoadingState = ({ label = 'Cargando alojamientos…' }: LoadingStateProps) => (
  <div role="status" className="flex flex-col items-center justify-center gap-3 py-16">
    <span className="h-8 w-8 animate-spin rounded-full border-4 border-neutral-200 border-t-rose-500" />
    <p className="text-sm text-neutral-500">{label}</p>
  </div>
);

export default LoadingState;
