type StatusDotProps = {
  status?: "online" | "standby" | "offline";
  className?: string;
};

export function StatusDot({ status = "online", className = "" }: StatusDotProps) {
  const colorMap = {
    online: "bg-active",
    standby: "bg-niobium",
    offline: "bg-alert",
  };

  return (
    <span
      className={`inline-block w-1.5 h-1.5 rounded-full ${colorMap[status]} ${
        status === "online" ? "animate-pulse-dot" : ""
      } ${className}`}
    />
  );
}
