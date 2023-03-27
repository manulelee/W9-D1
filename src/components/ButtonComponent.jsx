//import ImageComponent from "./ImageComponent";

const ButtonComponent = function (props) {
  return <button /*onClick={this.props.hide}*/ className={props.className}>{props.text}</button>;
};

export default ButtonComponent;
