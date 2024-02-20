import { Input } from "antd";
import borderStyle from "./Border.module.scss";
import { useState } from "react";

export default function BorderRadius() {
  const [borderRadius, setBorderRadius] = useState<any>({
    topLeftBorderRadius: 0,
    topRightBorderRadius: 0,
    bottomLeftBorderRadius: 0,
    bottomRightBorderRadius: 0,
  });
  return <></>;
}
