export function Badge({ children, className = "", variant, ...props }) {
  let variantClass = "";
  if (variant === "destructive") {
    variantClass = "bg-red-500 text-white";
  }
  return (
    <span
      className={`inline-block px-2 py-1 rounded text-xs font-semibold ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}