# React Circular Text

A tiny React component to draw text around a circle, optionally with center icon. **Zero dependencies. (1KB Gzipped)**

## Install

```bash
npm i react-circular-text
```
## Quick start

```tsx
import ReactCircularText from "react-circular-text";

<ReactCircularText
  text="     Hello world    " // You can add spaces for stylnig
  baselineRatio={0.7} // IMPORTANT: Adjust it based on your font
  width={200}
  bandColor="#eaeaea"
>
  🚀
</ReactCircularText>
```

## Props (essentials)

| Prop            | Type                                | Default                 | Purpose                              |
| --------------- | ----------------------------------- | ----------------------- | ------------------------------------ |
| `text`          | `string`                            | — | Characters shown around the ring     |
| `children`      | `ReactNode`                         | —                       | Centre content (emoji / icon / SVG)  |
| `width`         | `number`                            | `140`                   | Badge diameter in px                 |
| `bandColor`     | `string`                            | `"#f5f5f5"`             | Ring color                          |
| `bandThickness` | `number`                            | `22`                    | Ring stroke width in px              |
| `textColor`     | `string`                            | `"#000"`                | Text color                          |
| `fontSize`      | `number`                            | `14`                    | Font size in px                      |
| `fontWeight`    | `number \| string`                  | `500`                   | Font weight                          |
| `textTransform` | `"uppercase" \| "lowercase" \| ...` | `"uppercase"`           | CSS text‑transform                   |
| `speedSecs`     | `number`                            | `20`                    | Seconds per full rotation            |
| `baselineRatio` | `number`                            | `0.4`                   | Fine‑tune baseline‑to‑ring alignment |

## Demo

Clone the repo and run:

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) and tweak the form to see the component update live.

## License

MIT
