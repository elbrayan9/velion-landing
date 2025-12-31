import { Cpu } from "lucide-react";

const VelionLogo = ({
  className = "",
  showText = true,
  iconClassName = "w-8 h-8",
}: {
  className?: string;
  showText?: boolean;
  iconClassName?: string;
}) => (
  <div
    className={`flex items-center gap-2 font-bold text-xl text-white ${className}`}
    suppressHydrationWarning={true}
  >
    <div className="relative flex items-center justify-center">
      <Cpu
        className={`${iconClassName} text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]`}
      />
    </div>
    {showText && <span className="font-sans tracking-tight">VELION</span>}
  </div>
);

export default VelionLogo;
