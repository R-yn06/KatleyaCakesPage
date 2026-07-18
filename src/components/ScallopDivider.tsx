interface ScallopDividerProps {
  /** Fill color of the scallop shape — should match the section it "belongs" to */
  color?: string;
  /** Background color behind the scallop (the section above it) */
  flip?: boolean;
  className?: string;
}

/**
 * A repeating scalloped edge, like piped buttercream along the rim of a cake.
 * Used between sections instead of a plain straight line — the signature
 * decorative element of the site.
 */
export default function ScallopDivider({
  color = "#FCEEF0",
  flip = false,
  className = "",
}: ScallopDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${className}`}
      aria-hidden="true"
    >
      <svg
        className={`w-full h-8 md:h-12 ${flip ? "rotate-180" : ""}`}
        viewBox="0 0 600 40"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 
             C 12.5,20 37.5,20 50,0 
             C 62.5,20 87.5,20 100,0
             C 112.5,20 137.5,20 150,0
             C 162.5,20 187.5,20 200,0
             C 212.5,20 237.5,20 250,0
             C 262.5,20 287.5,20 300,0
             C 312.5,20 337.5,20 350,0
             C 362.5,20 387.5,20 400,0
             C 412.5,20 437.5,20 450,0
             C 462.5,20 487.5,20 500,0
             C 512.5,20 537.5,20 550,0
             C 562.5,20 587.5,20 600,0
             L600,0 L600,40 L0,40 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
