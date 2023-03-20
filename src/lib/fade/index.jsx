import { useRef, useState } from "react";
import useObserver from "../hooks/useObserver";
import "./Style.css";

// props
// delay : default 1, unit: s
//       : 이벤트 시작 시간 ( 초 )
// duration : default 1, unit : s
//          : 이벤트 진행 시간 ( 초 )
// type : default opacity, [ opacity, top, bottom, left, right ]
//      : fade 유형
// isRepeat : default false
//          : 반복 설정
// translate : default 100px,
//           : 이벤트 거리
const Fade = ({
  delay = 1,
  duration = 1,
  type = "opacity",
  isRepeat = false,
  translate = "100px",
  //
  children,
}) => {
  const fadeRef = useRef();
  const [isActive, setIsActive] = useState(false);

  useObserver({
    target: fadeRef,
    onIntersect: ([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          setIsActive(true);
        }, [delay * 1000]);
      } else if (isRepeat) {
        setIsActive(false);
      }
    },
  });

  const transform = {
    opacity: "",
    top: `translateY(-${translate})`,
    bottom: `translateY(${translate})`,
    left: `translateX(-${translate})`,
    right: `translateX(${translate})`,
  };

  const activeStyle = {
    transition: `transform ${duration}s, opacity ${duration}s`,
    opacity: "1",
  };

  return (
    <div className="aniation_container">
      <div
        className="animation_fade"
        style={
          isActive
            ? { ...activeStyle }
            : {
                transform: transform[type],
                transition: `transform ${duration}s, opacity ${duration}s`,
              }
        }
      >
        {children}
      </div>
      <div className="animation_trigger" ref={fadeRef} />
    </div>
  );
};

export default Fade;
