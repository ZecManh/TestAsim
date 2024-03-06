import {
  Button,
  ColorPicker,
  GetProp,
  Input,
  Select,
  Tabs,
  Upload,
  UploadProps,
} from "antd";
import backgroundStyle from "./Background.module.scss";
import { useState } from "react";
import {
  AndroidOutlined,
  AppleOutlined,
  CloseCircleOutlined,
  DownOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { message } from "antd";
export default function Background(props: any) {
  const [selectBackGround, setSelectBackGround] = useState({
    background: undefined,
  });
  const [color, setColor] = useState("red");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

  const getBase64 = (img: FileType, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };
  const beforeUpload = (file: FileType) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };
  const handleChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const tab2 = () => {
    return (
      <>
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? (
            <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
          ) : (
            uploadButton
          )}
        </Upload>
        <div className="select-color-picker">
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
            ]}
          />
          <ColorPicker className="choose-box" defaultValue="#1677ff" />
          <ColorPicker className="choose-color" defaultValue="#1677ff" />
        </div>
      </>
    );
  };
  //End Tab upload Image

  function ChangeColor(value: any, hex: string) {
    setColor(hex);
    setSelectBackGround((prev: any) => {
      return {
        ...prev,
        background: hex,
      };
    });
  }

  function resetColor() {
    setSelectBackGround((prev: any) => {
      return {
        ...prev,
        background: undefined,
      };
    });
  }
  const sendDataMargin = () => {
    props.callBackBackground(selectBackGround);
  };
  sendDataMargin();
  const [openColor, setOpenColor] = useState(false);
  function handleChangeClose() {
    setOpenColor(!openColor);
  }
  return (
    <>
      <div className={backgroundStyle["select-background"]}>
        <ColorPicker
          open={openColor}
          defaultValue="#000000"
          onChange={ChangeColor}
          value={selectBackGround.background}
          panelRender={(panel) => (
            <div className={backgroundStyle["custom-panel"]}>
              <Tabs
                items={[
                  { key: "1", label: <AppleOutlined />, children: panel },
                  { key: "2", label: <AndroidOutlined />, children: tab2() },
                ]}
              />
            </div>
          )}
        >
          <Button
            className={backgroundStyle["button-background"]}
            onClick={handleChangeClose}
          >
            {selectBackGround.background ? (
              <>
                <div className={backgroundStyle["style-choose-color"]}>
                  <div
                    className={backgroundStyle["color-default"]}
                    style={{
                      backgroundColor: color,
                    }}
                  ></div>
                  <div className={backgroundStyle["text-color"]}>
                    {selectBackGround.background}
                  </div>
                </div>
              </>
            ) : (
              <div className={backgroundStyle["color-default"]}>
                <div className={backgroundStyle["line-red"]}></div>
              </div>
            )}

            <div className={backgroundStyle["icon-drop-down"]}>
              {selectBackGround.background ? (
                <div
                  className={backgroundStyle["close-icon"]}
                  onClick={resetColor}
                >
                  <CloseCircleOutlined
                    className={backgroundStyle["close-color"]}
                  />
                </div>
              ) : (
                ""
              )}
              <DownOutlined />
            </div>
          </Button>
        </ColorPicker>
      </div>
    </>
  );
}
