import type { CpuInfo } from "os";
import { useCpuInfo } from "../../hooks/useCpuInfo";
export default function CpuInfo() {
  const cpuName = useCpuInfo();

  return (
    <div className="p-2 gap-2 flex flex-col bg-zinc-600 border border-zinc-400 rounded-lg">
      <h1 className="text-xs gap-1 flex items-center">
        <i className="ph ph-cpu" />
        {cpuName}
      </h1>
      <div className="text-sm">
        <p>Utilization</p>
        <p>Speed</p>
      </div>
    </div>
  );
}
