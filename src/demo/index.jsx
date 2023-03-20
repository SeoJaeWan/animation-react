import { useState } from "react";
import { Fade, Text } from "../lib";
import FadeArea from "./fade";
import TextArea from "./text";
import "./style.css";

const Demo = () => {
  const [isFade, setIsFade] = useState(true);

  return (
    <div>
      <div className=""></div>
      {isFade ? <FadeArea /> : <TextArea />}
    </div>
  );
};

export default Demo;
