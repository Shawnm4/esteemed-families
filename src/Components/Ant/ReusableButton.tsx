import { Button as AntButton, ButtonProps } from "antd";

export default function ReusableButton(props: ButtonProps) {
  return <AntButton {...props} className={props.className || ""} />;
}
