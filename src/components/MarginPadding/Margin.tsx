import { Input, Popover } from "antd";
import { useState } from "react";
import marginPadding from "./Margin.module.scss";
export default function Margin(props: any) {
  const [showDiv, setShowDiv] = useState(false);
  const [direction, setDirection] = useState("");

  const [selectMargin, setSelectMargin] = useState<any>({
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
    props.callBackMargin(selectMargin);
  };
  function handleChangeInputMargin(event: any) {
    const value = event.target.value;
    // setValueMargin(value);
    setSelectMargin((prev: any) => {
      return {
        ...prev,
        marginTop: value,
        marginLeft: value,
        marginRight: value,
        marginBottom: value,
      };
    });
  }
  function handleChangeInputPadding(event: any) {
    const value = event.target.value;
    // setValuePadding(value);
    setSelectMargin((prev: any) => {
      return {
        ...prev,
        paddingTop: value,
        paddingLeft: value,
        paddingRight: value,
        paddingBottom: value,
      };
    });
  }
  function handleChangeInputNumberMargin(
    event: any,
    directionMarginPadding: any
  ) {
    // setValueMarginPadding(event.target.value);
    setSelectMargin((prev: any) => {
      return {
        ...prev,
        [directionMarginPadding]: event.target.value,
      };
    });
    console.log("directionMarginPadding", directionMarginPadding);
  }
  function inputNumber(direction: string) {
    setDirection(direction);
    return (
      <Input
        placeholder=""
        value={selectMargin[direction]}
        onChange={(value: any) => {
          handleChangeInputNumberMargin(value, direction);
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
              setShowDiv(false);
            }}
          >
            <div className={marginPadding["box-margin"]} />
          </div>
          <div
            className={marginPadding["margin-direction"]}
            onClick={() => {
              setShowDiv(true);
            }}
          >
            <div className={marginPadding["box-margin-direction"]} />
          </div>
        </div>
        {!showDiv && (
          <div className={marginPadding["input-right"]}>
            <div className={marginPadding["input-margin"]}>
              <Input
                className={marginPadding["input-number-margin"]}
                onChange={handleChangeInputMargin}
              />
              <div>Margin</div>
            </div>
            <div className={marginPadding["input-margin"]}>
              <Input
                className={marginPadding["input-number-padding"]}
                onChange={handleChangeInputPadding}
                // value={borderWidth[selectBorder]}
              />
              <div>Padding</div>
            </div>
          </div>
        )}
      </div>
      {showDiv && (
        <div className={marginPadding["back-ground-img-margin"]}>
          <img
            className={marginPadding["img-margin-padding"]}
            src="src/assets/margin.svg"
            alt=""
          />

          <div className={marginPadding["name-margin"]}>Margin</div>
          <div className={marginPadding["margin-top"]}>
            <Popover
              title={() => inputNumber("marginTop")}
              trigger="click"
              className={marginPadding["font-size-margin-padding"]}
            >
              {selectMargin.marginTop ? selectMargin.marginTop : "-"}
            </Popover>
          </div>

          <div className={marginPadding["name-padding"]}>Padding</div>
          <div className={marginPadding["padding-top"]}>
            <Popover
              title={() => inputNumber("paddingTop")}
              trigger="click"
              className={marginPadding["font-size-margin-padding"]}
            >
              {selectMargin.paddingTop ? selectMargin.paddingTop : "-"}
            </Popover>
          </div>

          <div className={marginPadding["margin-left-style"]}>
            <Popover
              title={() => inputNumber("marginLeft")}
              trigger="click"
              className={marginPadding["font-size-margin-padding"]}
            >
              {selectMargin.marginLeft ? selectMargin.marginLeft : "-"}
            </Popover>
          </div>
          <div className={marginPadding["padding-left"]}>
            <Popover
              title={() => inputNumber("paddingLeft")}
              trigger="click"
              className={marginPadding["font-size-margin-padding"]}
            >
              {selectMargin.paddingLeft ? selectMargin.paddingLeft : "-"}
            </Popover>
          </div>
          <div className={marginPadding["padding-right"]}>
            <Popover
              title={() => inputNumber("paddingRight")}
              trigger="click"
              className={marginPadding["font-size-margin-padding"]}
            >
              {selectMargin.paddingRight ? selectMargin.paddingRight : "-"}
            </Popover>
          </div>
          <div className={marginPadding["margin-right"]}>
            <Popover
              title={() => inputNumber("marginRight")}
              trigger="click"
              className={marginPadding["font-size-margin-padding"]}
            >
              {selectMargin.marginRight ? selectMargin.marginRight : "-"}
            </Popover>
          </div>

          <div className={marginPadding["margin-bottom"]}>
            <Popover
              title={() => inputNumber("marginBottom")}
              trigger="click"
              className={marginPadding["font-size-margin-padding"]}
            >
              {selectMargin.marginBottom ? selectMargin.marginBottom : "-"}
            </Popover>
          </div>
          <div className={marginPadding["padding-bottom"]}>
            <Popover
              title={() => inputNumber("paddingBottom")}
              trigger="click"
              className={marginPadding["font-size-margin-padding"]}
            >
              {selectMargin.paddingBottom ? selectMargin.paddingBottom : "-"}
            </Popover>
          </div>
        </div>
      )}
    </>
  );
}
