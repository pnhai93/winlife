/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/alt-text */
import {React, useState, useEffect, useRef, Fragment } from "react";

import Tooltip from "react-bootstrap/Tooltip";
import Overlay from "react-bootstrap/Overlay";
const Slider = () => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show3, setShow3] = useState(false);
    const target = useRef(null);
    const target1 = useRef(null);
    const target3 = useRef(null);


  const slides = [
    {
      content: () => {
        return (
          <div id="slide-1" className="slide">
            <Overlay className="toast" id="1"  target={target.current} show={show} placement="left">
              {(props) => <Tooltip {...props}>Số lượng quà tặng có hạn, chương trình có thể kết thúc sớm hơn dự kiến</Tooltip>}
            </Overlay>
            <div className="cardContent">
              <div className="text1">
                Tặng lên tới
                <div className="moreBtn" ref={target} onClick={() => setShow(!show)}>
                  <img className="i" src="/images/Vector (1).svg"></img>
                </div>
              </div>
              <div className="number">
                50
                <span>
                  <div className="percent">%</div>
                </span>
              </div>
              <div style={{ textAlign: "center", position: "relative" }}>
                <div className="text2">giá trị hoá đơn đầu tiên</div>
                <p className="text3">tối đa 50.000đ</p>
              </div>
            </div>
          </div>
        );
      },
    },
    {
      content: () => {
        return (
          <div id="slide-2" className="slide">
            <Overlay className="toast" id="2"  target={target1.current} show={show1} placement="left">
              {(props) => <Tooltip {...props}>Số lượng quà tặng có hạn, chương trình có thể kết thúc sớm hơn dự kiến</Tooltip>}
            </Overlay>
            <div className="cardContent">
              <div className="text1">
                giảm lên tới
                <div className="moreBtn" ref={target1} onClick={() => setShow1(!show1)}>
                  <img className="i" src="/images/Vector (1).svg"></img>
                </div>
              </div>
              <div className="number">
                50
                <span>
                  <div className="percent">%</div>
                </span>
              </div>
              <div style={{ textAlign: "center", position: "relative" }}>
                <div className="text2">giá trị hoá đơn đầu tiên</div>
                <p className="text3" style={{ fontStyle: "italic" }}>
                  tối đa 50.000đ
                </p>
              </div>
            </div>
          </div>
        );
      },
    },
    {
      content: () => {
        return (
          <div id="slide-3" className="slide">
            <div className="cardContent3">
              <div className="cardText3">tích điểm mua sắm</div>
              <p className="cardTag3">VỚI 1 ĐỒNG = 1 ĐIỂM</p>
            </div>
          </div>
        );
      },
    },
    {
      content: () => {
        return (
          <div id="slide-4" className="slide" style={{ backgroundColor: "#0C713D" }}>
            <Overlay className="toast" id="4"  target={target3.current} show={show3} placement="left">
              {(props) => <Tooltip {...props}>Số lượng quà tặng có hạn, chương trình có thể kết thúc sớm hơn dự kiến</Tooltip>}
            </Overlay>
            <div className="cardContent">
              <div className="text1">
                tặng kèm
                <div className="moreBtn" style={{ position: "relative", right: "15%" }} ref={target3} onClick={() => setShow3(!show3)}>
                  <img className="i" src="/images/Vector.svg"></img>
                </div>
              </div>
              <div className="number">
                01
                <span>
                  <div className="pl">WELCOME DRINK</div>
                </span>
              </div>
              <div style={{ textAlign: "center", position: "relative" }}>
                <div style={{ backgroundColor: "white", borderRadius: 30, color: "#0C713D", fontSize: 16, fontWeight: 800, fontFamily: "Proxima Soft", textTransform: "uppercase", padding: "6px 12px 6px", width: "100%" }}>giá trị hoá đơn đầu tiên</div>
                <p className="text3" style={{ marginRight: "15%" }}>
                  Từ phúc long
                </p>
              </div>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <Fragment>
      <Carousel slides={slides} speed={5000} slideWidth={400} slideHeight={300} />
    </Fragment>
  );
};
export default Slider;

const Carousel = ({ slides = [], speed = 5000, transitionSpeed = 500, slideWidth = 300, slideHeight = 300 }) => {
  const [visibleSlide, setVisibleSlide] = useState(1);
  const [hasTransitionClass, setHasTransitionClass] = useState(true);
  const [stateSlides, setStateSlides] = useState(slides);
  const [leftAndRightDisabled, setLeftAndRightDisabled] = useState(false);
  const intervalId = useRef(null);

  useEffect(() => {
    const slidesWithClones = [...slides];
    slidesWithClones.unshift(slidesWithClones[slidesWithClones.length - 1]);
    slidesWithClones.push(slidesWithClones[1]);
    setStateSlides(slidesWithClones);
  }, []);

  useEffect(() => {
    if (visibleSlide == stateSlides.length - 1) {
      setLeftAndRightDisabled(true);
      setTimeout(() => {
        setHasTransitionClass(false);
        setVisibleSlide(1);
      }, transitionSpeed);
    }

    if (visibleSlide === 1) {
      setTimeout(() => {
        setHasTransitionClass(true);
      }, transitionSpeed);
    }

    if (visibleSlide === 0) {
      setLeftAndRightDisabled(true);
      setTimeout(() => {
        setHasTransitionClass(false);
        setVisibleSlide(stateSlides.length - 2);
      }, transitionSpeed);
    }

    if (visibleSlide == stateSlides.length - 2) {
      setTimeout(() => {
        setHasTransitionClass(true);
      }, transitionSpeed);
    }
  }, [visibleSlide]);
    
  useEffect(() => {
    if (leftAndRightDisabled) {
      setTimeout(() => {
        setLeftAndRightDisabled(false);
      }, transitionSpeed * 2);
    }
  }, [leftAndRightDisabled]);
  useEffect(() => {
   if (intervalId.current != null) {
     return;
   }
   intervalId.current = setInterval(() => {
     setVisibleSlide((prevVisibleSlide) => {
       if (prevVisibleSlide + 1 === stateSlides.length) {
         return 0;
       }
       return prevVisibleSlide + 1;
     });
   }, speed);
  });


  const calculateLeftMargin = () => {
    return "-" + visibleSlide * slideWidth + "px";
  };

  const slideDimensionStyles = () => {
    return { width: slideWidth + "px", height: slideHeight + "px" };
  };


  const dotIsActive = (index) => {
    return index === visibleSlide || (index === 1 && visibleSlide === stateSlides.length - 1) || (index === stateSlides.length - 2 && visibleSlide === 0);
  };

  return (
    <div className="carousel">
      <div className="slidesContainer" style={slideDimensionStyles()}>
        <div className="slideIndicator">
          {stateSlides.map((slide, index) => {
            if (index === 0 || index === stateSlides.length - 1) {
              return null;
            }
            return <div key={index} onClick={() => setVisibleSlide(index)} className={`dot ${dotIsActive(index) ? "active" : ""}`} />;
          })}
        </div>

        <div id="slides" className={`slides ${hasTransitionClass ? "transition" : ""}`} style={{ left: calculateLeftMargin() }}>
          {stateSlides.map((slide, index) => {
            return (
              <div key={index} className="slide" style={slideDimensionStyles()}>
                <div className="slideInner">{slide.content()}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
