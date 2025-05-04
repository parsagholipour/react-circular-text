import React, { useState } from "react";
import "./app.css";
import ReactCircularText from "./ReactCircularText";

/**
 * Interactive demo showcasing all props of ReactCircularText.
 * Adjust any field in the form and see the badge update instantly.
 */
const App: React.FC = () => {
  /* ------------------------------------------------------------ */
  /* State for each exposed prop                                  */
  /* ------------------------------------------------------------ */
  const [text, setText] = useState("Circular      Text      ");
  const [emoji, setEmoji] = useState("🚀");
  const [width, setWidth] = useState(140);
  const [textColor, setTextColor] = useState("#000000");
  const [textTransform, setTextTransform] = useState<
    "uppercase" | "lowercase" | "capitalize" | "none"
  >("uppercase");
  const [fontWeight, setFontWeight] = useState<number | string>(500);
  const [fontSize, setFontSize] = useState(14);
  const [bandColor, setBandColor] = useState("#f5f5f5");
  const [bandThickness, setBandThickness] = useState(22);
  const [speedSecs, setSpeedSecs] = useState(20);
  const [baselineRatio, setBaselineRatio] = useState(0.7);

  return (
    <div className="demo-wrapper">
      {/* -------------------------------------------------------- */}
      {/* Control panel                                            */}
      {/* -------------------------------------------------------- */}
      <form className="demo-form" onSubmit={(e) => e.preventDefault()}>
        <h2 className="demo-heading">ReactCircularText Props</h2>

        <label>
          Text
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>

        <label>
          Centre Emoji
          <input
            type="text"
            value={emoji}
            onChange={(e) => setEmoji(e.target.value)}
          />
        </label>

        <label>
          Width (px)
          <input
            type="number"
            min={60}
            max={400}
            value={width}
            onChange={(e) => setWidth(+e.target.value)}
          />
        </label>

        <label>
          Text Colour
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
        </label>

        <label>
          Text Transform
          <select
            value={textTransform}
            onChange={(e) => setTextTransform(e.target.value as any)}
          >
            <option value="uppercase">uppercase</option>
            <option value="lowercase">lowercase</option>
            <option value="capitalize">capitalize</option>
            <option value="none">none</option>
          </select>
        </label>

        <label>
          Font Weight
          <input
            type="number"
            min={100}
            max={900}
            step={100}
            value={fontWeight}
            onChange={(e) => setFontWeight(+e.target.value)}
          />
        </label>

        <label>
          Font Size
          <input
            type="number"
            min={8}
            max={48}
            value={fontSize}
            onChange={(e) => setFontSize(+e.target.value)}
          />
        </label>

        <label>
          Ring Colour
          <input
            type="color"
            value={bandColor}
            onChange={(e) => setBandColor(e.target.value)}
          />
        </label>

        <label>
          Ring Thickness
          <input
            type="number"
            min={2}
            max={60}
            value={bandThickness}
            onChange={(e) => setBandThickness(+e.target.value)}
          />
        </label>

        <label>
          Spin Duration (s)
          <input
            type="number"
            min={1}
            max={60}
            value={speedSecs}
            onChange={(e) => setSpeedSecs(+e.target.value)}
          />
        </label>

        <label>
          Baseline Ratio
          <input
            type="number"
            step={0.05}
            min={0}
            max={1}
            value={baselineRatio}
            onChange={(e) => setBaselineRatio(+e.target.value)}
          />
        </label>
      </form>

      {/* -------------------------------------------------------- */}
      {/* Live preview                                             */}
      {/* -------------------------------------------------------- */}
      <div className="demo-preview">
        <ReactCircularText
          text={text}
          width={width}
          textColor={textColor}
          textTransform={textTransform}
          fontWeight={fontWeight}
          fontSize={fontSize}
          bandColor={bandColor}
          bandThickness={bandThickness}
          speedSecs={speedSecs}
          baselineRatio={baselineRatio}
        >
          {emoji}
        </ReactCircularText>
      </div>
    </div>
  );
};

export default App;
