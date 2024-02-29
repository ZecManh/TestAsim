import { ColorPicker, Input, Popover, Select } from "antd";
import boxShadow from "./BoxShadow.module.scss";

import { SettingOutlined } from "@ant-design/icons";

import { useState } from "react";
export default function BoxShadow(props: any) {
  const [shadow, setShadow] = useState({
    boxShadow: undefined,
    X: 0,
    Y: 0,
    Vague: 0,
    Extend: 0,
  });
  const [disableSelect, setDisableSelect] = useState(false);
  const [showSettingShadow, setShowSettingArrow] = useState(false);
  const [color, setColor] = useState("transparent");
  const [lable, setLabel] = useState("");
  const normal: any =
    "0px 1px 3px 0px rgba(0,0,0,0.1),\n0px 1px 2px 0px rgba(0,0,0,0.06)";
  const md: string =
    "0px 4px -1px 0px rgba(0,0,0,0.1),\n 0px 2px 4px -1px rgba(0,0,0,0.06)";
  const lg: string =
    "0px 10px 15px -3px rgba(0,0,0,0.1),\n 0px 4px 6px -2px rgba(0,0,0,0.05)";
  const xl: string =
    "0px 20px 25px -5px rgba(0,0,0,0.1),\n 0px 10px 10px -5px rgba(0,0,0,0.04)";
  const handleChange = (
    value: any,
    option: { value: string; label: string }
  ) => {
    setColor(value);
    setLabel(option.label);
    setShadow((prev: any) => {
      return {
        ...prev,
        boxShadow: option.value,
      };
    });
  };
  const sendDataMargin = () => {
    props.callBackShadow(shadow);
  };
  sendDataMargin();
  const ClearObject = () => {
    setShadow((prev: any) => {
      return {
        ...prev,
        boxShadow: undefined,
      };
    });
  };
  const onClickShowShadow = () => {
    setShowSettingArrow(!showSettingShadow);
    setDisableSelect(!showSettingShadow);
  };
  function onChangeColor(value: Color, hex: string) {
    setColor(hex);
    setShadow((prev: any) => {
      console.log("prev", prev);
      return {
        ...prev,
        boxShadow: `${prev.X}px ${prev.Y}px ${prev.Vague}px ${prev.Extend}px ${hex}`,
      };
    });
  }
  const content = (
    <div>
      <div className={boxShadow["box-popup"]}>
        <div className={boxShadow["box"]}>
          <div
            className={boxShadow["box-white"]}
            style={{
              boxShadow: shadow.boxShadow,
            }}
          ></div>
        </div>
      </div>
      <p>{lable ? lable : "No Shadow"}</p>
      <p className={boxShadow["text-shadow"]}>{shadow.boxShadow}</p>
    </div>
  );

  function handleChangeDirection(event: any, direction: any) {
    const value2 = event.target.value;
    const numericValue = value2.replace(/[^0-9-]/g, "");

    setShadow((prev: any) => {
      console.log("prev", prev);
      return {
        ...prev,
        [direction]: numericValue,
      };
    });
    setShadow((prev: any) => {
      console.log("prev", prev);
      return {
        ...prev,
        boxShadow: `${prev.X}px ${prev.Y}px ${prev.Vague}px ${prev.Extend}px ${color}`,
      };
    });

    if (event.target.value === "") {
      setShadow((prev: any) => {
        console.log("prev", prev);
        return {
          ...prev,
          [direction]: 0,
        };
      });
      setShadow((prev: any) => {
        console.log("prev", prev);
        return {
          ...prev,
          boxShadow: `${prev.X}px ${prev.Y}px ${prev.Vague}px ${prev.Extend}px ${color}`,
        };
      });
    }
  }

  return (
    <>
      <div className={boxShadow["shadow"]}>
        <p>Shadow</p>
        <SettingOutlined
          style={{ color: "#5c5f66", cursor: "pointer" }}
          onClick={onClickShowShadow}
        />
      </div>
      <div className={boxShadow["box-shadow"]}>
        <Popover content={content} title="Shadow Preview">
          <div className={boxShadow["box"]}>
            <div
              className={boxShadow["box-white"]}
              style={{ boxShadow: shadow.boxShadow }}
            ></div>
          </div>
        </Popover>

        <Select
          allowClear
          className={boxShadow["select-style-shadow"]}
          placeholder="No Shadow"
          style={{ width: 120 }}
          onClear={ClearObject}
          disabled={disableSelect}
          onChange={handleChange}
          options={[
            { value: "0px 0px 0px 0px transparent", label: "none" },
            { value: "0px 1px 2px 0px rgba(0,0,0,0.05)", label: "sm" },
            {
              value: normal,
              label: "normal",
            },
            {
              value: md,
              label: "md",
            },
            {
              value: lg,
              label: "lg",
            },
            {
              value: xl,
              label: "xl",
            },
            { value: "0px 25px 50px -12px rgba(0,0,0,0.25)", label: "2xl" },
          ]}
        />
      </div>
      {showSettingShadow && (
        <div>
          <div className={boxShadow["setting-shadow"]}>
            <div className={boxShadow["border-top-left"]}>
              <Input
                className={boxShadow["input-top-left"]}
                value={boxShadow["topLeftBorderRadius"]}
                onChange={(value: any) => {
                  handleChangeDirection(value, "X");
                }}
              />
              <div className={boxShadow["icon-top"]}>X</div>
            </div>
            <div className={boxShadow["border-top-right"]}>
              <Input
                className={boxShadow["input-top-right"]}
                value={boxShadow["topRightBorderRadius"]}
                onChange={(value: any) => {
                  handleChangeDirection(value, "Y");
                }}
              />
              <div className={boxShadow["icon-bottom"]}>Y</div>
            </div>
            <div className={boxShadow["border-bottom-left"]}>
              <Input
                className={boxShadow["input-bottom-left"]}
                value={boxShadow["bottomLeftBorderRadius"]}
                onChange={(value: any) => {
                  handleChangeDirection(value, "Vague");
                }}
              />
              <div className={boxShadow["icon-left"]}>Vague</div>
            </div>
            <div className={boxShadow["border-bottom-right"]}>
              <Input
                className={boxShadow["input-bottom-right"]}
                value={boxShadow["bottomRightBorderRadius"]}
                onChange={(value: any) => {
                  handleChangeDirection(value, "Extend");
                }}
              />
              <div className={boxShadow["icon-right"]}>Extend</div>
            </div>
            <ColorPicker
              style={{ marginLeft: "5px" }}
              onChange={onChangeColor}
            />
          </div>
        </div>
      )}
    </>
  );
}
