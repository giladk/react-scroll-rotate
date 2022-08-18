import React, { useState, useEffect } from "react";
import throttle from "lodash/throttle";
import PropTypes from "prop-types";

export function ScrollRotate(props) {
  let [values, setValues] = useState({
    clientHeight: 0,
    scrollTop: 0,
    topPercentage: 0,
    scrollOnce: false,
  });
  let [getOnce, setGetOnce] = useState(false);

  let updateValues = (e) => {
    const se = props.target ? e.srcElement : e.srcElement.scrollingElement;
    const { clientHeight, scrollTop } = se;
    const topPercentage =
      (scrollTop /
        ((props.target ? se.scrollHeight : se.offsetHeight) - clientHeight)) *
      100;
    setValues({ clientHeight, scrollTop, topPercentage, scrollOnce: true });
  };

  let getStartValues = () => {
    if (props.target) {
      // document.getElementById(props.target)
      // TODO
    } else {
      const clientHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const topPercentage =
        (scrollTop / (document.documentElement.offsetHeight - clientHeight)) *
        100;
      setValues({ clientHeight, scrollTop, topPercentage });
    }
    setGetOnce(true);
  };

  useEffect(() => {
    let handleScrollThrottle = throttle(
      (e) => {
        updateValues(e);
      },
      props.throttle,
      { leading: false }
    );

    let handleScroll = (e) => {
      updateValues(e);
    };

    let handle = props.throttle ? handleScrollThrottle : handleScroll;
    let targetElement = props.target
      ? document.getElementById(props.target)
      : window;
    targetElement.addEventListener("scroll", handle);
    getStartValues();
    return () => {
      targetElement.removeEventListener("scroll", handle);
    };
  }, [props.throttle]);

  const wrapperStyles = {
    display: "inline-block",
    position: "relative",
  };

  const getDeg = () => {
    const from = props.from || 0;
    const to = props.to || 360;
    if (props.method === "perc") {
      const { topPercentage: perc } = values;
      const loops = props.loops || 1;
      const currentLoop =
        parseInt((loops * perc) / 100) +
        (perc !== 100 ? 1 : Number.isInteger(loops) ? 0 : 1);
      return (
        (perc / 100 - (1 / loops) * (currentLoop - 1)) * (to - from) * loops +
        from +
        360 * (currentLoop - 1) * (from > to ? -1 : 1)
      );
    } else {
      const { scrollTop } = values;
      const currentLoop = parseInt(scrollTop / (to - from));
      return (
        (scrollTop - currentLoop * (to - from)) * (from > to ? -1 : 1) +
        from +
        360 * currentLoop
      );
    }
  };

  const getAnimationStyles = () => {
    return {
      transform: `rotate(${getDeg()}deg)`,
      transition: !values.scrollOnce
        ? ""
        : `transform ${
            props.animationDuration ? props.animationDuration : "0.1"
          }s`,
    };
  };

  // const getLoop = (perc) => {
  //   const loops = props.loops || 1;
  //   if (props.method === 'perc'){
  //   return parseInt(loops*perc/100)+ ( perc !== 100 ? 1 : 0);
  //   } else {
  //     return parseInt(values.scrollTop/(props.to-props.from));
  //   }
  // }

  return (
    <div
      style={{ position: "relative", display: "inline-block", ...props.style }}
    >
      {getOnce && (
        <div
          style={{
            height: "inherit",
            width: "inherit",
            ...wrapperStyles,
            ...getAnimationStyles(),
          }}
        >
          {props.children}
        </div>
      )}
      {/* {props.debuge && <span style={infoStyles}>Info: {`H : ${values.clientHeight} , ST : ${values.scrollTop} , % : ${ values.topPercentage } , deg: ${getDeg()}, Loop: ${getLoop(values.topPercentage)}`  }</span>} */}
    </div>
  );
}

ScrollRotate.propTypes = {
  target: PropTypes.string,
  throttle: PropTypes.number,
  from: PropTypes.number,
  to: PropTypes.number,
  method: PropTypes.string,
  loops: PropTypes.number,
  animationDuration: PropTypes.number,
};

ScrollRotate.defaultProps = {
  target: null,
  throttle: null,
  from: 0,
  to: 360,
  method: "px",
  loops: 1,
  animationDuration: 0.1,
};
