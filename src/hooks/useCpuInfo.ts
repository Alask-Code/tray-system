import { useEffect, useState } from "react";
import { cpuDataProps } from "../../electron/registerIpcMain";

export function useCpuInfo() {
  const [cpuName, setCpuName] = useState<string>("");
  const [cpuLoad, setCpuLoad] = useState<string>("");
  const [cpuSpeed, setCpuSpeed] = useState<string>("");

  useEffect(() => {
    const handleCpuInfo = (_event: unknown, cpu: cpuDataProps) => {
      const [cpuModel] = cpu.cpu.split("CPU @ ");
      const cpuName = cpuModel.split("Intel(R) Core(TM) ")[1];
      setCpuName(cpuName);
      setCpuLoad(cpu.usage);

      setCpuSpeed(cpu.speed);
    };
    window.api.on("main-process-message", handleCpuInfo);
  }, []);

  return { cpuName, cpuLoad, cpuSpeed };
}
