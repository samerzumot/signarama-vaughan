interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}

export function SectionHeading({ title, subtitle, align = "center", light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center" : "text-left"}`}>
      <h2 className={`font-display text-display-md ${light ? "text-white" : "text-text-primary"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-lg ${light ? "text-white/70" : "text-text-secondary"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
