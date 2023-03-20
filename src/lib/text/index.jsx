import { useEffect, useRef, useState } from "react";
import useObserver from "../hooks/useObserver";
import "./Style.css";

const wordAnimate = {
  opacity: ({ duration }) => ({
    animation: `opacity ${duration}s ease-in`,
    opacity: 1,
  }),
  underline: () => ({}),
  slide: ({ duration, idx }) => ({
    transform: `translate(0)`,
    transition: `transform ${duration + idx * 0.1}s ease-in, opacity ${
      duration + idx * 0.1
    }s ease-in`,
    opacity: 1,
  }),
  drop: ({ idx }) => ({
    opacity: 0,
    animation: `dropIn 0.30s forwards`,
    animationDelay: `${idx * 0.08}s`,
  }),
};

const defaultStyle = {
  opacity: () => ({
    opacity: 0,
  }),
  underline: () => ({
    opacity: 1,
  }),
  slide: ({ option }) => ({
    opacity: 0,
    transform: option.translate,
  }),
  drop: () => ({
    opacity: 0,
  }),
};

const Word = ({ char, type, isActive, wordAnimate, defaultStyle, option }) => {
  const [isWordActive, setIsWordActive] = useState(false);

  const wordActiveEvent = () => {
    switch (type) {
      case "opacity":
        setTimeout(() => {
          setIsWordActive(true);
        }, Math.random() * 1000);
        break;
      default:
        setIsWordActive(true);
    }
  };

  useEffect(() => {
    if (isActive) wordActiveEvent();
    else {
      setIsWordActive(false);
    }
  }, [isActive]);

  return (
    <span
      className="animation_word"
      style={isWordActive ? { ...wordAnimate } : { ...defaultStyle }}
    >
      {char}
    </span>
  );
};

/*
props
value : 출력할 문자열
delay : default 1, unit: s
      : 이벤트 시작 시간 ( 초 )
duration : default 1, unit : s
         : 이벤트 진행 시간 ( 초 )
type : default opacity, [ opacity, underline, slide, drop ]
     : fade 유형
isRepeat : default false
         : 반복 설정
option : default {}
       underLine : { 
         background: "red"
         height: "10px";
       }, 
       slide : {
        translate: "translateX(100px)"
       }

*/
const Text = ({
  value,
  delay = 1,
  duration = 1,
  type = "opacity",
  isRepeat = false,
  option = {},
  //
}) => {
  const textRef = useRef();
  const underlineRef = useRef();
  const [isActive, setIsActive] = useState(false);

  const underlineEvent = (isActive) => {
    const underline = underlineRef.current;

    if (isActive) {
      const style = Object.keys(option).map((key) => `${key}: ${option[key]};`);
      style.push(`width: 100%; transition: width ${duration}s`);
      underline.style = style.join("");
    } else {
      underline.style = "width: 0;";
    }
  };

  useObserver({
    target: textRef,
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

  useEffect(() => {
    if (type === "underline") {
      underlineEvent(isActive);
    }
  }, [isActive]);

  return (
    <span className="animation_text" ref={textRef}>
      {value
        .split("")
        .map((char, idx) =>
          char === " " ? (
            <span key={`${char}-${idx}`}>{char}</span>
          ) : (
            <Word
              char={char}
              key={`${char}-${idx}`}
              idx={idx}
              type={type}
              option={option}
              isActive={isActive}
              wordAnimate={wordAnimate[type]({ duration, idx })}
              defaultStyle={defaultStyle[type]({ option })}
            />
          )
        )}

      <span className="animation_underline" ref={underlineRef} />
    </span>
  );
};

export default Text;
