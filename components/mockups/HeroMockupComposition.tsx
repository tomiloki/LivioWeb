import DaySummaryMockup from "./DaySummaryMockup";
import DriverAppMini from "./DriverAppMini";

export default function HeroMockupComposition() {
  return (
    <div className="relative w-full">
      {/* Desktop dashboard — main element */}
      <div className="relative z-10">
        <DaySummaryMockup />
      </div>

      {/* Phone — driver app, overlapping bottom-left */}
      <div
        className="absolute -bottom-6 -left-8 z-20 hidden sm:block"
        style={{ transform: "rotate(-4deg)" }}
      >
        {/* Phone glow */}
        <div className="absolute -inset-4 rounded-3xl bg-livio/[0.08] blur-[30px]" />
        <div className="relative">
          <DriverAppMini />
        </div>
      </div>

      {/* Connection line hint — subtle visual link between phone and dashboard */}
      <div className="absolute bottom-8 left-20 z-15 hidden h-px w-16 bg-gradient-to-r from-livio/30 to-transparent sm:block" />
    </div>
  );
}
