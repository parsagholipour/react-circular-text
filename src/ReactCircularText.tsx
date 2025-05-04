import React from "react";
import "./ReactCircularText.css";

export interface ReactCircularTextProps {
  /* Content & looks */
  text?: string;
  children?: React.ReactNode;        // centre icon
  textColor?: string;
  textTransform?: "uppercase" | "lowercase" | "capitalize" | "none";
  fontWeight?: number | string;
  fontSize?: number;

  /* Ring */
  bandColor?: string;
  bandThickness?: number;            // px

  /* Layout & motion */
  width?: number;                    // px
  speedSecs?: number;                // spin duration
  /** Baseline‑to‑top ratioof the font */
  baselineRatio?: number;
}

const ReactCircularText: React.FC<ReactCircularTextProps> = ({
                                                               /* sensible fall‑backs */
                                                               width          = 140,
                                                               text           = "Mahoorism    Shop    ",
                                                               textColor      = "#000",
                                                               textTransform  = "uppercase",
                                                               fontWeight     = 500,
                                                               fontSize       = 14,
                                                               bandColor      = "#ffffff",
                                                               bandThickness  = 22,
                                                               speedSecs      = 20,
                                                               baselineRatio  = 0.4,
                                                               children,
                                                             }) => {
  /* ------------------------------------------------------------ */
  /* Geometry helpers                                             */
  /* ------------------------------------------------------------ */
  const baselineToTop = fontSize * baselineRatio;
  const translateY    = baselineToTop - bandThickness / 2;

  const chars = Array.from(text);
  const total = chars.length;

  return (
    <div className={'react-circular-text'} style={{display: 'contents'}}>
      <div
        className="circular-container"
        style={{
          width,
          height: width,
          animationDuration: `${speedSecs}s`,
        }}
      >
        {/* Ring ---------------------------------------------------- */}
        <div
          className="circular-band"
          style={{
            borderColor: bandColor,
            borderWidth: bandThickness,
          }}
        />

        {/* Centre icon / emoji ------------------------------------ */}
        <div
          className="circular-emoji"
          style={{animationDuration: `${speedSecs}s`}}
        >
          {children}
        </div>

        {/* Circular text ------------------------------------------ */}
        {chars.map((char, idx) => {
          const angle = (360 / total) * idx;
          return (
            <div
              key={idx}
              className="circular-char"
              style={{
                /* stretch half‑way to the rim */
                width: "100%",
                height: width / 2,
                fontSize,
                fontWeight,
                color: textColor,
                textTransform,
                /* place the baseline on the ring path */
                transform: `rotate(${angle}deg) translateY(${-translateY}px)`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReactCircularText;
