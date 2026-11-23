import type { Host } from '@/types';

interface HostInfoProps {
  host: Host;
}

const HostInfo = ({ host }: HostInfoProps) => (
  <div className="flex items-center gap-4 border-y border-neutral-200 py-6">
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-lg font-semibold text-white" aria-hidden="true">
      {host.name[0]}
    </span>
    <div>
      <p className="font-semibold">Anfitrión: {host.name}</p>
      <p className="text-sm text-neutral-500">
        {host.isSuperhost ? 'Superanfitrión · ' : ''}
        {host.yearsHosting} años como anfitrión
      </p>
    </div>
  </div>
);

export default HostInfo;
