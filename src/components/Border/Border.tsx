import { Flex, Input, Select, Space } from "antd";
import borderStyle from "./Border.module.scss";
import { useState } from "react";
import { ColorPicker } from "antd";
import { Color } from "antd/es/color-picker";
import BorderRadius from "./BorderRadius";
import Margin from "../MarginPadding/Margin";
import Background from "../BackGround/Background";
import BoxShadow from "../Shadow/BoxShadow";

export default function Border() {
  const [selectBorder, setSelectBorder] = useState("");
  const [selectStyle, setSelectStyle] = useState("");
  const [selectRadius, setSelectRadius] = useState({});
  const [selectMargin, setSelectMargin] = useState({});
  const [selectBackground, setSelectBackGround] = useState({});
  const [selectShadow, setSelectShadow] = useState({});
  const [borderWidth, setBorderWidth] = useState<any>({
    topBorderWidth: undefined,
    leftBorderWidth: undefined,
    rightBorderWidth: undefined,
    bottomBorderWidth: undefined,
    fullBorderWidth: undefined,
    topBorderStyle: undefined,
    leftBorderStyle: undefined,
    rightBorderStyle: undefined,
    bottomBorderStyle: undefined,
    fullBorderStyle: undefined,
    topBorderColor: undefined,
    leftBorderColor: undefined,
    rightBorderColor: undefined,
    bottomBorderColor: undefined,
    fullBorderColor: undefined,
  });
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
    console.log("isActive", isActive);
  };
  const clonedObject: any = { ...borderWidth };
  const cloneShadow: any = { ...selectShadow };
  const mergeObject = { ...clonedObject, ...selectRadius };
  const callbackFunctionBorderRadius = (childData: any) => {
    setSelectRadius(childData);
  };
  const callbackFunctionMargin = (childData: any) => {
    setSelectMargin(childData);
  };
  const callbackFunctionBackGround = (childData: any) => {
    setSelectBackGround(childData);
  };
  const callbackFunctionShadow = (childData: any) => {
    setSelectShadow(childData);
  };

  const handleInputChange = (event: any) => {
    const value = event.target.value;
    console.log("value======", value);
    setBorderWidth({
      ...borderWidth,
      [selectBorder]: value,
    });

    if (selectBorder === "fullBorderWidth") {
      console.log("border", borderWidth);
      setBorderWidth((prev: any) => {
        return {
          ...prev,
          topBorderWidth: value,
          leftBorderWidth: value,
          rightBorderWidth: value,
          bottomBorderWidth: value,
          fullBorderWidth: undefined,
        };
      });
    }
    if (selectBorder === "") {
      setBorderWidth(() => {
        return {
          topBorderWidth: value,
          leftBorderWidth: value,
          rightBorderWidth: value,
          bottomBorderWidth: value,
        };
      });
    }
    if (value === "") {
      setBorderWidth({});
    }
  };

  const handleClickBorder = (keyToChange: string) => {
    setSelectBorder(keyToChange);
  };
  const handleDivStyle = (keyToChange: string) => {
    setSelectStyle(keyToChange);
    console.log("select style", keyToChange);
  };

  const options = [
    {
      value: "none",
      label: "none",
    },
    {
      value: "Solid",
      label: "Solid",
      LineBorder: <div className={borderStyle["border-solid"]}></div>,
    },
    {
      value: "Dotted",
      label: "Dotted",
      LineBorder: <div className={borderStyle["border-dotted"]}></div>,
    },
    {
      value: "Dashed",
      label: "Dashed",
      LineBorder: <div className={borderStyle["border-dashed"]}></div>,
    },
  ];

  function chooseBorder(value: string) {
    console.log("choose style border", value);
    if (selectStyle === "fullBorderStyle") {
      console.log("selectStyle", selectStyle);
      setBorderWidth((prev: any) => {
        return {
          ...prev,
          topBorderStyle: value,
          leftBorderStyle: value,
          rightBorderStyle: value,
          bottomBorderStyle: value,
          fullBorderStyle: undefined,
        };
      });
    } else if (selectBorder === "") {
      setBorderWidth(() => {
        return {
          topBorderStyle: value,
          leftBorderStyle: value,
          rightBorderStyle: value,
          bottomBorderStyle: value,
        };
      });
    } else if (selectStyle !== "fullBorderStyle" && selectStyle) {
      setBorderWidth((prev: any) => {
        return {
          ...prev,
          [selectStyle]: value,
        };
      });
    }
  }

  function onChangeColor(value: Color, hex: string) {
    console.log("border", borderWidth);
    if (selectBorder === "") {
      setBorderWidth((prev: any) => {
        return {
          ...prev,
          topBorderColor: hex,
          leftBorderColor: hex,
          rightBorderColor: hex,
          bottomBorderColor: hex,
          fullBorderColor: undefined,
        };
      });
    } else if (selectBorder === "topBorderWidth") {
      setBorderWidth((prev: any) => {
        return {
          ...prev,
          topBorderColor: hex,
        };
      });
    } else if (selectBorder === "leftBorderWidth") {
      setBorderWidth((prev: any) => {
        return {
          ...prev,
          leftBorderColor: hex,
        };
      });
    } else if (selectBorder === "rightBorderWidth") {
      setBorderWidth((prev: any) => {
        return {
          ...prev,
          rightBorderColor: hex,
        };
      });
    } else if (selectBorder === "bottomBorderWidth") {
      setBorderWidth((prev: any) => {
        return {
          ...prev,
          bottomBorderColor: hex,
        };
      });
    } else if (selectBorder === "fullBorderWidth") {
      setBorderWidth((prev: any) => {
        return {
          ...prev,
          topBorderColor: hex,
          leftBorderColor: hex,
          rightBorderColor: hex,
          bottomBorderColor: hex,
          fullBorderColor: undefined,
        };
      });
    }
  }

  return (
    <div className={borderStyle["panel"]}>
      <div className={borderStyle["style-left"]}>
        <div className={borderStyle["json-show"]}>
          {delete clonedObject.fullBorderWidth}
          {delete clonedObject.fullBorderStyle}
          {JSON.stringify(mergeObject, null, 2)}
        </div>
        <div className={borderStyle["json-show"]}>
          {JSON.stringify(selectMargin, null, 2)}
        </div>
        <div className={borderStyle["json-show"]}>
          {JSON.stringify(selectBackground, null, 2)}
        </div>
        <div className={borderStyle["json-show"]}>
          {delete cloneShadow.TRE}
          {delete cloneShadow.TRA}
          {delete cloneShadow.D}
          {delete cloneShadow.P}
          {JSON.stringify(cloneShadow, null, 2)}
        </div>
      </div>
      <div className={borderStyle["style-panel"]}>
        <div className={borderStyle["style-string"]}>
          <p>Border</p>
          <Flex>
            <div className={borderStyle["border"]}>
              <div
                // className={borderStyle["border-top"]}
                className={`${borderStyle["border-top"]} ${
                  isActive ? "active" : ""
                }`}
                // style={{ borderTop: `2px solid ${color}` }}
                onClick={() => {
                  handleClickBorder("topBorderWidth");
                  handleDivStyle("topBorderStyle");
                  toggleActive();
                }}
              ></div>
              <Flex>
                <div
                  className={borderStyle["border-left"]}
                  onClick={() => {
                    handleClickBorder("leftBorderWidth");
                    handleDivStyle("leftBorderStyle");
                  }}
                ></div>
                <div
                  className={borderStyle["border-full"]}
                  onClick={() => {
                    handleClickBorder("fullBorderWidth");
                    handleDivStyle("fullBorderStyle");
                  }}
                ></div>
                <div
                  className={borderStyle["border-right"]}
                  onClick={() => {
                    handleClickBorder("rightBorderWidth");
                    handleDivStyle("rightBorderStyle");
                  }}
                ></div>
              </Flex>
              <div
                className={borderStyle["border-bottom"]}
                // style={{ borderBottom: `2px solid ${borderColor}` }}
                onClick={() => {
                  handleClickBorder("bottomBorderWidth");
                  handleDivStyle("bottomBorderStyle");
                }}
              ></div>
            </div>
            <Flex vertical>
              <Input
                className={borderStyle["input_border"]}
                value={borderWidth[selectBorder]}
                onChange={handleInputChange}
              />
              <div className={borderStyle["box-border-color"]}>
                <Select
                  className={borderStyle["select-style-border"]}
                  options={options}
                  optionLabelProp="customAbbreviation"
                  onSelect={chooseBorder}
                  optionRender={(option) => (
                    <Space>
                      <span role="img" aria-label={option.data.label}>
                        {option.data.LineBorder}
                      </span>
                      {option.data.value}
                    </Space>
                  )}
                />
                <ColorPicker
                  defaultValue="#000000"
                  className={borderStyle["color-border"]}
                  onChange={onChangeColor}
                />
              </div>
            </Flex>
          </Flex>
        </div>
        <p>Border radius</p>
        <BorderRadius callBackBorderRadius={callbackFunctionBorderRadius} />
        <p>Margin</p>
        <Margin callBackMargin={callbackFunctionMargin} />
        <p>BackGround</p>
        <Background callBackBackground={callbackFunctionBackGround} />
        <BoxShadow callBackShadow={callbackFunctionShadow} />
      </div>
    </div>
  );
}
