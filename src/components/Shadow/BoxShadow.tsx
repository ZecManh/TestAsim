import { ColorPicker, Input, Popover, Select } from "antd";
import boxShadow from "./BoxShadow.module.scss";

import { SettingOutlined } from "@ant-design/icons";

import { useState } from "react";
export default function BoxShadow(props: any) {
  const [shadow, setShadow] = useState({
    boxShadow: undefined,
    TRE: undefined,
    D: undefined,
    TRA: undefined,
    P: undefined,
    Vague: undefined,
    Extend: undefined,
  });
  const [disableSelect, setDisableSelect] = useState(false);
  const [showSettingShadow, setShowSettingArrow] = useState(false);
  const [color, setColor] = useState("");
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
  const content = (
    <div>
      <div className={boxShadow["box-popup"]}>
        <div className={boxShadow["box"]}>
          <div
            className={boxShadow["box-white"]}
            style={{
              boxShadow: color,
            }}
          ></div>
        </div>
      </div>
      <p>{lable ? lable : "No Shadow"}</p>
      <p className={boxShadow["text-shadow"]}>{shadow.boxShadow}</p>
    </div>
  );

  function handleChangeDirection(event: any, direction: any) {
    const value = event.target.value;

    setShadow((prev: any) => {
      return {
        ...prev,
        [direction]: value,
      };
    });
    if (shadow.TRE) {
      setShadow((prev: any) => {
        return {
          ...prev,
          boxShadow: `-${value} `,
        };
      });
    } else if (shadow.D) {
      setShadow((prev: any) => {
        return {
          ...prev,
          boxShadow: `${value}`,
        };
      });
    } else if (shadow.TRA) {
      setShadow((prev: any) => {
        return {
          ...prev,
          boxShadow: `-${value}`,
        };
      });
    } else if (shadow.P) {
      setShadow((prev: any) => {
        return {
          ...prev,
          boxShadow: `${value}`,
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
            <div className={boxShadow["box-white"]}></div>
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
                  handleChangeDirection(value, "TRE");
                }}
              />
              <div className={boxShadow["icon-top"]}>Top</div>
            </div>
            <div className={boxShadow["border-top-right"]}>
              <Input
                className={boxShadow["input-top-right"]}
                value={boxShadow["topRightBorderRadius"]}
                onChange={(value: any) => {
                  handleChangeDirection(value, "D");
                }}
              />
              <div className={boxShadow["icon-bottom"]}>Bottom</div>
            </div>
            <div className={boxShadow["border-bottom-left"]}>
              <Input
                className={boxShadow["input-bottom-left"]}
                value={boxShadow["bottomLeftBorderRadius"]}
                onChange={(value: any) => {
                  handleChangeDirection(value, "TRA");
                }}
              />
              <div className={boxShadow["icon-left"]}>Left</div>
            </div>
            <div className={boxShadow["border-bottom-right"]}>
              <Input
                className={boxShadow["input-bottom-right"]}
                value={boxShadow["bottomRightBorderRadius"]}
                onChange={(value: any) => {
                  handleChangeDirection(value, "P");
                }}
              />
              <div className={boxShadow["icon-right"]}>Right</div>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: "10px" }}>
            <div className={boxShadow["border-top-right"]}>
              <Input
                className={boxShadow["input-top-right"]}
                value={boxShadow["topRightBorderRadius"]}
                onChange={(value: any) => {
                  handleChangeDirection(value, "Vague");
                }}
              />
              <div className={boxShadow["icon-bottom"]}>Vague</div>
            </div>
            <div className={boxShadow["border-bottom-left"]}>
              <Input
                className={boxShadow["input-bottom-left"]}
                value={boxShadow["bottomLeftBorderRadius"]}
                onChange={(value: any) => {
                  handleChangeDirection(value, "Extend");
                }}
              />
              <div className={boxShadow["icon-left"]}>Extend</div>
            </div>
            <ColorPicker></ColorPicker>
          </div>
        </div>
      )}
    </>
  );
}
