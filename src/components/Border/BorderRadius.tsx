import { Input } from "antd";
import borderStyle from "./Border.module.scss";
import { useState } from "react";

export default function BorderRadius(props: any) {
  const [showDiv, setShowDiv] = useState(false);
  const [buttonEnabled, setButtonEnabled] = useState(true);
  const [borderRadius, setBorderRadius] = useState<any>({
    topLeftBorderRadius: undefined,
    topRightBorderRadius: undefined,
    bottomLeftBorderRadius: undefined,
    bottomRightBorderRadius: undefined,
  });

  const clickHandler = () => {
    setButtonEnabled(false);
  };
  const sendDataRadius = () => {
    props.parentCallback(borderRadius);
  };
  const handleChangeNumberRadius = (event: any) => {
    const value2 = event.target.value;
    setBorderRadius({
      topLeftBorderRadius: value2,
      topRightBorderRadius: value2,
      bottomLeftBorderRadius: value2,
      bottomRightBorderRadius: value2,
    });
  };
  const handleChangeInputRadiusDirection = (event: any, position: any) => {
    setBorderRadius((prev: any) => {
      return {
        ...prev,
        [position]: event.target.value,
      };
    });
  };
  sendDataRadius();
  return (
    <>
      <div className={borderStyle["border-radius"]}>
        <div
          className={borderStyle["border-full-radius"]}
          onClick={() => {
            setShowDiv(false);
            setButtonEnabled(true);
          }}
        >
          <div className={borderStyle["box-radius"]} />
        </div>
        <div>
          <div
            className={borderStyle["border-radius-direction"]}
            onClick={() => {
              clickHandler();
              setShowDiv(true);
            }}
          >
            <div className={borderStyle["box-direction"]} />
          </div>
        </div>
        <Input
          className={borderStyle["input-number-radius"]}
          // value={borderWidth[selectBorder]}
          disabled={!buttonEnabled}
          onChange={handleChangeNumberRadius}
        />
      </div>
      {showDiv && (
        <div className={borderStyle["box-radius-setting"]}>
          <div className={borderStyle["border-top-left"]}>
            <Input
              className={borderStyle["input-top-left"]}
              value={borderRadius["topLeftBorderRadius"]}
              onChange={(value: any) => {
                handleChangeInputRadiusDirection(value, "topLeftBorderRadius");
              }}
            />
            <div className={borderStyle["icon-top-left"]} />
          </div>
          <div className={borderStyle["border-top-right"]}>
            <Input
              className={borderStyle["input-top-right"]}
              value={borderRadius["topRightBorderRadius"]}
              onChange={(value: any) => {
                handleChangeInputRadiusDirection(value, "topRightBorderRadius");
              }}
            />
            <div className={borderStyle["icon-top-right"]} />
          </div>
          <div className={borderStyle["border-bottom-left"]}>
            <Input
              className={borderStyle["input-bottom-left"]}
              value={borderRadius["bottomLeftBorderRadius"]}
              onChange={(value: any) => {
                handleChangeInputRadiusDirection(
                  value,
                  "bottomLeftBorderRadius"
                );
              }}
            />
            <div className={borderStyle["icon-bottom-left"]} />
          </div>
          <div className={borderStyle["border-bottom-right"]}>
            <Input
              className={borderStyle["input-bottom-right"]}
              value={borderRadius["bottomRightBorderRadius"]}
              onChange={(value: any) => {
                handleChangeInputRadiusDirection(
                  value,
                  "bottomRightBorderRadius"
                );
              }}
            />
            <div className={borderStyle["icon-bottom-right"]} />
          </div>
        </div>
      )}
    </>
  );
}
