import { cn } from "@/lib/utils";

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-[90vw] max-w-[1315px]", className)}>
      {children}
    </div>
  );
}
export default Container;
