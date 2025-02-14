import CpuInfo from "../components/CpuInfo";
import SafeView from "../components/SafeView";
import WindowController from "../components/WindowController";

export default function App() {
  return (
    <SafeView>
      <WindowController />
      <CpuInfo />
    </SafeView>
  );
}
