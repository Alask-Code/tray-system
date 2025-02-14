import type { CpuInfo } from "os";
import { useEffect, useState } from "react";

export function useCpuInfo() {
  const [cpuName, setCpuName] = useState("");

  useEffect(() => {
    const handleCpuInfo = (_event: unknown, cpu: CpuInfo) => {
      const [cpuModel] = cpu.model.split("CPU @ ");
      const cpuName = cpuModel.split("Intel(R) Core(TM) ")[1];
      setCpuName(cpuName);
    };

    window.api.on("main-process-message", handleCpuInfo);
  }, []);

  return cpuName;
}
