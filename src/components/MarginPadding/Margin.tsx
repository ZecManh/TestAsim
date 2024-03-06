import { Input, Popover } from "antd";
import { useState } from "react";
import marginPadding from "./Margin.module.scss";
export default function Margin(props: any) {
  const [customMarginPadding, setCustomMarginPadding] = useState(false);
  const [valueMargin, setValueMargin] = useState("");
  const [valuePadding, setValuePadding] = useState("");
  const [activeIcon, setActiveIcon] = useState(false);
  const [selectMarginPadding, setSelectMarginPadding] = useState<any>({
    marginTop: undefined,
    marginLeft: undefined,
    marginRight: undefined,
    marginBottom: undefined,
    paddingTop: undefined,
    paddingLeft: undefined,
    paddingRight: undefined,
    paddingBottom: undefined,
  });
  const sendDataMargin = () => {
    props.callBackMargin(selectMarginPadding);
  };
  function handleChangeInputMargin(event: any) {
    const value = event.target.value;
    setValueMargin(value);
    const updatedValuesMargin = value === "" ? undefined : value;
    setSelectMarginPadding((prev: any) => {
      return {
        ...prev,
        marginTop: updatedValuesMargin,
        marginLeft: updatedValuesMargin,
        marginRight: updatedValuesMargin,
        marginBottom: updatedValuesMargin,
      };
    });
  }
  function handleChangeInputPadding(event: any) {
    const value = event.target.value;
    setValuePadding(value);
    const updatedValuespadding = value === "" ? undefined : value;
    setSelectMarginPadding((prev: any) => {
      return {
        ...prev,
        paddingTop: updatedValuespadding,
        paddingLeft: updatedValuespadding,
        paddingRight: updatedValuespadding,
        paddingBottom: updatedValuespadding,
      };
    });
  }
  function handleChangeInputNumberMarginPadding(
    event: any,
    directionMarginPadding: any
  ) {
    const updatedValuesMagginPadding =
      event.target.value === "" ? undefined : event.target.value;
    setSelectMarginPadding((prev: any) => {
      return {
        ...prev,
        [directionMarginPadding]: updatedValuesMagginPadding,
      };
    });
  }
  function inputNumberMarginPadding(direction: string) {
    return (
      <Input
        placeholder=""
        value={selectMarginPadding[direction]}
        onChange={(value: any) => {
          handleChangeInputNumberMarginPadding(value, direction);
        }}
      />
    );
  }
  sendDataMargin();
  return (
    <>
      <div className={marginPadding["margin"]}>
        <div className={marginPadding["margin-left"]}>
          <div
            className={marginPadding["margin-full"]}
            onClick={() => {
              setCustomMarginPadding(false);
              setActiveIcon(!activeIcon);
            }}
          >
            <div className={marginPadding["box-margin"]} />
          </div>
          <div
            className={marginPadding["margin-direction"]}
            onClick={() => {
              setCustomMarginPadding(true);
            }}
          >
            <div className={marginPadding["box-margin-direction"]} />
          </div>
        </div>
        {!customMarginPadding && (
          <div className={marginPadding["input-right"]}>
            <div className={marginPadding["input-margin"]}>
              <Input
                className={marginPadding["input-number-margin"]}
                onChange={handleChangeInputMargin}
                value={valueMargin}
              />
              <div>Margin</div>
            </div>
            <div className={marginPadding["input-margin"]}>
              <Input
                value={valuePadding}
                className={marginPadding["input-number-padding"]}
                onChange={handleChangeInputPadding}
                // value={borderWidth[selectBorder]}
              />
              <div>Padding</div>
            </div>
          </div>
        )}
      </div>
      {customMarginPadding && (
        <div className={marginPadding["back-ground-img-margin"]}>
          <img
            className={marginPadding["img-margin-padding"]}
            src="src/assets/margin.svg"
            alt=""
          />

          <div className={marginPadding["name-margin"]}>Margin</div>
          <div className={marginPadding["margin-top"]}>
            <Popover
              title={() => inputNumberMarginPadding("marginTop")}
              trigger="click"
              className={marginPadding["font-size-margin-padding"]}
            >
              {selectMarginPadding.marginTop
                ? selectMarginPadding.marginTop
                : "-"}
            </Popover>
          </div>

          <div className={marginPadding["name-padding"]}>Padding</div>
          <div className={marginPadding["padding-top"]}>
            <Popover
              title={() => inputNumberMarginPadding("paddingTop")}
              trigger="click"
              className={marginPadding["font-size-margin-padding"]}
            >
              {selectMarginPadding.paddingTop
                ? selectMarginPadding.paddingTop
                : "-"}
            </Popover>
          </div>

          <div className={marginPadding["margin-left-style"]}>
            <Popover
              title={() => inputNumberMarginPadding("marginLeft")}
              trigger="click"
              className={marginPadding["font-size-margin-padding"]}
            >
              {selectMarginPadding.marginLeft
                ? selectMarginPadding.marginLeft
                : "-"}
            </Popover>
          </div>
          <div className={marginPadding["padding-left"]}>
            <Popover
              title={() => inputNumberMarginPadding("paddingLeft")}
              trigger="click"
              className={marginPadding["font-size-margin-padding"]}
            >
              {selectMarginPadding.paddingLeft
                ? selectMarginPadding.paddingLeft
                : "-"}
            </Popover>
          </div>
          <div className={marginPadding["padding-right"]}>
            <Popover
              title={() => inputNumberMarginPadding("paddingRight")}
              trigger="click"
              className={marginPadding["font-size-margin-padding"]}
            >
              {selectMarginPadding.paddingRight
                ? selectMarginPadding.paddingRight
                : "-"}
            </Popover>
          </div>
          <div className={marginPadding["margin-right"]}>
            <Popover
              title={() => inputNumberMarginPadding("marginRight")}
              trigger="click"
              className={marginPadding["font-size-margin-padding"]}
            >
              {selectMarginPadding.marginRight
                ? selectMarginPadding.marginRight
                : "-"}
            </Popover>
          </div>

          <div className={marginPadding["margin-bottom"]}>
            <Popover
              title={() => inputNumberMarginPadding("marginBottom")}
              trigger="click"
              className={marginPadding["font-size-margin-padding"]}
            >
              {selectMarginPadding.marginBottom
                ? selectMarginPadding.marginBottom
                : "-"}
            </Popover>
          </div>
          <div className={marginPadding["padding-bottom"]}>
            <Popover
              title={() => inputNumberMarginPadding("paddingBottom")}
              trigger="click"
              className={marginPadding["font-size-margin-padding"]}
            >
              {selectMarginPadding.paddingBottom
                ? selectMarginPadding.paddingBottom
                : "-"}
            </Popover>
          </div>
        </div>
      )}
    </>
  );
}
