/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import ListProduct from "../components/listProduct";
import { useState, useRef } from "react";
import Tooltip from "react-bootstrap/Tooltip";
import Overlay from "react-bootstrap/Overlay";
import Button from "react-bootstrap/Button";
import Header from "../components/header";

const LandingPage = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show3, setShow3] = useState(false);
  const target = useRef(null);
  const target1 = useRef(null);
  const target3 = useRef(null);

  return (
    <div className="container" style={{ backgroundColor: "white", justifyContent: "center" }}>
      <Header />

      <div className="logo">
        <div className="logo-winmart">
          <img src="/images/image104.svg"></img>
        </div>
        <div className="logo-drWin">
          <p>DR.</p>
          <img src="/images/drwin.svg"></img>
        </div>
        <div className="logo-phuclong">
          <img src="/images/image 109.svg"></img>
        </div>
      </div>
      <div className="slogan">
        <div style={{ fontSize: 40, color: "#E52722" }}>tiết kiệm đến</div>
        <div style={{ fontSize: 136, color: "#E52722", fontWeight: 800, display: "flex", justifyContent: "center" }}>
          20
          <span>
            <p style={{ fontSize: 70, color: "#E52722", fontWeight: 800, position: "relative", top: "35%" }}>%</p>
          </span>
        </div>
        <div style={{ fontSize: 20, backgroundColor: "#E52722", color: "white", borderRadius: 50, width: "75%", justifyContent: "center", padding: 10 }}>Cho giỏ hàng thiết yếu</div>
      </div>
      <ListProduct />

      <div style={{ marginBottom: "10%" }}>
        <h2 style={{ fontFamily: "Proxima Soft", fontStyle: "italic", fontWeight: 800, fontSize: 24, textAlign: "center", letterSpacing: "-0.05em", textTransform: "uppercase" }}>Và các sản phẩm khác</h2>
        <div style={{ fontFamily: "Proxima Soft Regular", fontStyle: "normal", fontWeight: 400, fontSize: 16, textAlign: "center", letterSpacing: "-0.05em" }}>Giá sản phẩm có thể thay đổi theo tình hình thực tế</div>
        <div style={{ fontFamily: "Proxima Soft Regular", fontStyle: "normal", fontWeight: 400, fontSize: 16, textAlign: "center", letterSpacing: "-0.05em" }}>Chi tiết vui lòng xem tại điểm bán</div>
      </div>

      <div className="slider">
        <div className="slides">
          <div id="slide-1" className="slide">
            <Overlay  className="toast" id="1" delay={3000} target={target.current} show={show} placement="left">
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
          <div id="slide-2" className="slide">
            <Overlay className="toast" id="2" delay={3000} target={target1.current} show={show1} placement="left">
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
          <div id="slide-3" className="slide">
            <div className="cardContent3">
              <div className="cardText3">tích điểm mua sắm</div>
              <p className="cardTag3">VỚI 1 ĐỒNG = 1 ĐIỂM</p>
            </div>
          </div>
          <div id="slide-4" className="slide" style={{ backgroundColor: "#0C713D" }}>
            <Overlay className="toast" id="4" delay={3000} target={target3.current} show={show3} placement="left">
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
        </div>
        <a href="#slide-1"></a>
        <a href="#slide-2"></a>
        <a href="#slide-3"></a>
        <a href="#slide-4"></a>
      </div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "10%" }}>
        <img src="/images/Frame 10064.svg" style={{ width: 172, margin: "0 auto" }}></img>
        <Button href="/register" className="btnReg" style={{ backgroundColor: "#E52722", border: "none" }}>
          đăng ký ngay
        </Button>
        <Button className="btnReg" style={{ color: "#E52722", backgroundColor: "white", border: " 1px solid #E52722" }}>
          điều kiện sử dụng
        </Button>
        <Button className="btnReg" style={{ color: "black", backgroundColor: "white", border: " 1px solid black" }}>
          <img src="/images/fi-sr-shop.svg"></img>các cửa hàng áp dụng
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
