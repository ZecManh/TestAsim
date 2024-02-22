import { Input, Popover } from "antd";
import { useState } from "react";
import marginPadding from "./Margin.module.scss";
export default function Margin(props: any) {
  const [showDiv, setShowDiv] = useState(false);
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
  function inputNumber() {
    return <Input placeholder="" />;
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
      </div>
      {showDiv && (
        <div className={marginPadding["back-ground-img-margin"]}>
          <div className={marginPadding["name-margin"]}>Margin</div>
          <div className={marginPadding["margin-top"]}>
            <Popover
              //   content={<a onClick={hide}>Close</a>}
              title={inputNumber}
              trigger="click"
              //   open={open}
              //   onOpenChange={handleOpenChange}
            >
              -
            </Popover>
          </div>
          <div className={marginPadding["margin-left-style"]}>
            <Popover
              //   content={<a onClick={hide}>Close</a>}
              title={inputNumber}
              trigger="click"
              //   open={open}
              //   onOpenChange={handleOpenChange}
            >
              -
            </Popover>
          </div>
          <div className={marginPadding["margin-right"]}>
            <Popover
              //   content={<a onClick={hide}>Close</a>}
              title={inputNumber}
              trigger="click"
              //   open={open}
              //   onOpenChange={handleOpenChange}
            >
              -
            </Popover>
          </div>
          <div className={marginPadding["margin-bottom"]}>
            <Popover
              //   content={<a onClick={hide}>Close</a>}
              title={inputNumber}
              trigger="click"
              //   open={open}
              //   onOpenChange={handleOpenChange}
            >
              -
            </Popover>
          </div>
          <div className={marginPadding["name-padding"]}>Padding</div>
          <div className={marginPadding["padding-top"]}>
            <Popover
              //   content={<a onClick={hide}>Close</a>}
              title={inputNumber}
              trigger="click"
              //   open={open}
              //   onOpenChange={handleOpenChange}
            >
              -
            </Popover>
          </div>
          <div className={marginPadding["padding-left"]}>
            <Popover
              //   content={<a onClick={hide}>Close</a>}
              title={inputNumber}
              trigger="click"
              //   open={open}
              //   onOpenChange={handleOpenChange}
            >
              -
            </Popover>
          </div>
          <div className={marginPadding["padding-right"]}>
            <Popover
              //   content={<a onClick={hide}>Close</a>}
              title={inputNumber}
              trigger="click"
              //   open={open}
              //   onOpenChange={handleOpenChange}
            >
              -
            </Popover>
          </div>
          <div className={marginPadding["padding-bottom"]}>
            <Popover
              //   content={<a onClick={hide}>Close</a>}
              title={inputNumber}
              trigger="click"
              //   open={open}
              //   onOpenChange={handleOpenChange}
            >
              -
            </Popover>
          </div>
        </div>
      )}
    </>
  );
}
