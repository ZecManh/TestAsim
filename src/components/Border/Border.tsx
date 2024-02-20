import { Flex, Input, Select, Space } from "antd";
import borderStyle from "./Border.module.scss";
import { useState } from "react";
import { ColorPicker } from "antd";
import { Color } from "antd/es/color-picker";
export default function Border() {
  const [selectBorder, setSelectBorder] = useState("");
  const [showDiv, setShowDiv] = useState(false);
  const [selectStyle, setSelectStyle] = useState("");
  const [selectColor, setSelectColor] = useState("");
  const [selectStyleBorder, setSelectStyleBorder] = useState("");
  const [selectColorBorder, setselectColorBorder] = useState("");
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
    topLeftBorderRadius: undefined,
    topRightBorderRadius: undefined,
    bottomLeftBorderRadius: undefined,
    bottomRightBorderRadius: undefined,
  });

  // Hàm xử lý sự kiện khi input thay đổi
  const handleInputChange = (event: any) => {
    const value = event.target.value;
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
      // setBorderWidth({
      //   topBorderWidth: value,
      //   leftBorderWidth: value,
      //   rightBorderWidth: value,
      //   bottomBorderWidth: value,
      //   topBorderStyle: selectStyleBorder,
      //   leftBorderStyle: selectStyleBorder,
      //   rightBorderStyle: selectStyleBorder,
      //   bottomBorderStyle: selectStyleBorder,
      //   topBorderColor: selectColorBorder,
      //   leftBorderColor: selectColorBorder,
      //   rightBorderColor: selectColorBorder,
      //   bottomBorderColor: selectColorBorder,
      // });
    }
  };

  const handleDivClick = (keyToChange: string) => {
    setSelectBorder(keyToChange);
  };
  const handleDivStyle = (keyToChange: string) => {
    setSelectStyle(keyToChange);
    console.log("select style", keyToChange);
  };
  const handleDivColor = (keyToChange: string) => {
    setSelectColor(keyToChange);
  };
  const options = [
    {
      value: "Solid",
      label: "Solid",
      customAbbreviation: <div className={borderStyle["border-solid"]}></div>,
    },
    {
      value: "Dotted",
      label: "Dotted",
      customAbbreviation: <div className={borderStyle["border-dotted"]}></div>,
    },
    {
      value: "Dashed",
      label: "Dashed",
      customAbbreviation: <div className={borderStyle["border-dashed"]}></div>,
    },
  ];

  function chooseBorder(value: string) {
    setSelectStyleBorder(value);
    console.log("choose style border", value);
    if (selectStyle === "fullBorderStyle") {
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
    }
    setBorderWidth((prev: any) => {
      return {
        ...prev,
        [selectStyle]: value,
      };
    });
  }

  function onChangeColor(value: Color, hex: string) {
    setselectColorBorder(hex);
    if (selectColor === "fullBorderColor") {
      console.log("border", borderWidth);
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
    setBorderWidth((prev: any) => {
      return {
        ...prev,
        [selectColor]: hex,
      };
    });
  }

  return (
    <div className={borderStyle["panel"]}>
      <div className={borderStyle["style-left"]}>
        <div className={borderStyle["json-show"]}>
          {JSON.stringify(borderWidth, null, 2)}
        </div>
      </div>
      <div className={borderStyle["style-panel"]}>
        <div className={borderStyle["style-string"]}>
          <p>Border</p>
          <Flex>
            <div className={borderStyle["border"]}>
              <div
                className={borderStyle["border-top"]}
                onClick={() => {
                  handleDivClick("topBorderWidth");
                  handleDivStyle("topBorderStyle");
                  handleDivColor("topBorderColor");
                }}
              ></div>
              <Flex>
                <div
                  className={borderStyle["border-left"]}
                  onClick={() => {
                    handleDivClick("leftBorderWidth");
                    handleDivStyle("leftBorderStyle");
                    handleDivColor("leftBorderColor");
                  }}
                ></div>
                <div
                  className={borderStyle["border-full"]}
                  onClick={() => {
                    handleDivClick("fullBorderWidth");
                    handleDivStyle("fullBorderStyle");
                    handleDivColor("fullBorderColor");
                  }}
                ></div>
                <div
                  className={borderStyle["border-right"]}
                  onClick={() => {
                    handleDivClick("rightBorderWidth");
                    handleDivStyle("rightBorderStyle");
                    handleDivColor("rightBorderColor");
                  }}
                ></div>
              </Flex>
              <div
                className={borderStyle["border-bottom"]}
                onClick={() => {
                  handleDivClick("bottomBorderWidth");
                  handleDivStyle("bottomBorderStyle");
                  handleDivColor("bottomBorderColor");
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
                        {option.data.customAbbreviation}
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
        <div className={borderStyle["border-radius"]}>
          <div
            className={borderStyle["border-full-radius"]}
            onClick={() => setShowDiv(false)}
          >
            <div className={borderStyle["box-radius"]}></div>
          </div>
          <div>
            <div
              className={borderStyle["border-radius-direction"]}
              onClick={() => setShowDiv(true)}
            >
              <div className={borderStyle["box-direction"]}></div>
            </div>
          </div>
          <Input className={borderStyle["input-number-radius"]} />
        </div>
        {showDiv && (
          <div className={borderStyle["box-radius-setting"]}>
            <div className={borderStyle["border-top-left"]}>
              <Input className={borderStyle["input-top-left"]} />
              <div className={borderStyle["icon-top-left"]}></div>
            </div>
            <div className={borderStyle["border-top-right"]}>
              <Input className={borderStyle["input-top-right"]} />
              <div className={borderStyle["icon-top-right"]}></div>
            </div>
            <div className={borderStyle["border-bottom-left"]}>
              <Input className={borderStyle["input-bottom-left"]} />
              <div className={borderStyle["icon-bottom-left"]}></div>
            </div>
            <div className={borderStyle["border-bottom-right"]}>
              <Input className={borderStyle["input-bottom-right"]} />
              <div className={borderStyle["icon-bottom-right"]}></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
