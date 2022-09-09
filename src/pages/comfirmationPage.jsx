/* eslint-disable jsx-a11y/alt-text */
import { useEffect, React, useState, useMemo } from "react";
import Form from "react-bootstrap/Form";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ComfirmationPage = () => {
  const navigate = useNavigate();

  let { phoneNumber } = useParams();
  const [validated, setValidated] = useState(false);
  const [time, setTime] = useState(5);
  const [showWarning, setShowWarning] = useState(false);
  const [showSurvey, setShowSurvey] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const handleEnter = (e) => {
    if (e.target.value) {
      const form = e.target.form;
      const index = [...form].indexOf(e.target);
      form.elements[index + 1].focus();
      e.preventDefault();
    }
  };
  console.log("rerender");
  useEffect(() => {
    const myInterval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      }
    }, 1000);
    return () => clearInterval(myInterval);
  });

  return (
    <div className="container">
      <div className="logo">
        <img src="/images/winLogo.svg"></img>
      </div>
      <h1 style={{ paddingLeft: 30 }}>Xác thực OTP</h1>
      <div className="confirmForm" style={{ padding: 30 }}>
        <div style={{ marginBottom: 80 }}>Vui lòng nhập mã OTP đã được gửi đến số điện thoại {phoneNumber}</div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <div className="refCode">
            <input maxlength="1" onChange={handleEnter} />
            <input maxlength="1" onChange={handleEnter} />
            <input maxlength="1" onChange={handleEnter} />
            <input maxlength="1" onChange={handleEnter} />
            <input maxlength="1" onChange={handleEnter} />
            <input maxlength="1" />
          </div>
          {time === 0 ? null : (
            <div>
              Thời gian còn lại: <span style={{ color: "#E52722" }}>{time}</span>
            </div>
          )}

          <Button onClick={() => setShowSurvey(true)} style={{ backgroundColor: "#E52722", border: "none" }} className="btnReg">
            Tiếp tục
          </Button>
          <Button onClick={() => navigate(-1) || navigate("/home")} style={{ backgroundColor: "white", border: "none", color: "black", border: "1px solid black" }} className="btnReg">
            Quay lại
          </Button>
          <div style={{ marginTop: 20 }}>
            Chưa nhận được mã <span style={{ color: "#999999" }}>{time}</span>
            <span onClick={() => setShowWarning(true)} style={{ color: "#E52722" }}>
              Gửi lại
            </span>
          </div>
        </Form>
      </div>

      {/* SURVEY MODAL */}

      <Modal style={{ borderRadius: 24 }} show={showSurvey} fullscreen onHide={() => setShowSurvey(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h3> Bạn biết đến chương trình Đăng ký hội viên Win bằng cách nào?</h3>
          <Form>
            <Form.Group className="refSource" name="refSource">
              <Form.Check className="checkbox" label="Nhận tin nhắn SMS" value={"ref1"} type="checkbox" />
              <Form.Check className="checkbox" label="Giới thiệu của nhân viên cửa hàng" value={"ref2"} type="checkbox" />
              <Form.Check className="checkbox" label="Qua hình ảnh giới thiệu chương trình tại cửa hàng" value={"ref3"} type="checkbox" />
              <Form.Check className="checkbox" label="Hình ảnh quảng cáo ngoài trời" value={"ref4"} type="checkbox" />
              <Form.Check className="checkbox" label="Giới thiệu của bạn bè người thân" value={"ref5"} type="checkbox" />
              <Form.Check className="checkbox" label="Khác" value={"ref6"} type="checkbox" />
            </Form.Group>
            <h3> Trong 1 tháng vừa qua, bạn có mua hàng ở cửa hàng WinMart/ WinMart+/ Win hay không?</h3>
            <Form.Group className="isBought" name="isBought">
              <div>
                <Form.Check className="checkbox" label="Có" value={true} type="radio" name="isBought" />
                <Form.Check className="checkbox" label="Không" value={false} type="radio" name="isBought" />
              </div>
            </Form.Group>
            <div>
              <Button style={{ backgroundColor: "#E52722", border: "none" }} className="btnReg" type="submit">
                Trả lời
              </Button>
              <Button onClick={() => setShowSurvey(false)} style={{ backgroundColor: "white", border: "none", color: "black", border: "1px solid black" }} className="btnReg">
                Bỏ qua
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* WARNING MODAL */}

      <Modal style={{ borderRadius: 24 }} show={showWarning} onHide={() => setShowWarning(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          Bạn chỉ còn 01 lần yêu cầu gửi lại mã OTP mới. Nếu tiếp tục nhập sai hoặc để hết hạn, bạn sẽ bị hạn chế đăng ký hội viên Win trong vòng 24h tiếp theo.
          <Button style={{ backgroundColor: "#E52722", border: "none" }} className="btnReg">
            Đồng ý gửi lại OTP
          </Button>
          <Button onClick={() => setShowWarning(false)} style={{ backgroundColor: "white", border: "none", color: "black", border: "1px solid black" }} className="btnReg">
            Hủy, không gửi nữa
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ComfirmationPage;
