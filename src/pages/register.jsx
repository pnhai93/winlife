/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { React, useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
   import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Register = () => {
  const [validated, setValidated] = useState(false);

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

   function handleShow(breakpoint) {
     setFullscreen(breakpoint);
     setShow(true);
   }
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="register_container">
      <div className="logo">
        <Link to={"/home"}>
          <img src="/images/winLogo.svg"></img>
        </Link>
      </div>
      <h1 style={{ padding: 30 }}>Đăng ký hội viên</h1>
      <div className="registerForm" style={{ padding: 30 }}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Form.Group className="inputForm" id="fullName ">
              <Form.Label>Họ và tên</Form.Label>
              <Form.Control type="text" placeholder="Nhập họ tên" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="inputForm" id="phoneNumber ">
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control required type="text" placeholder="Nhập số điện thoại" />
              <Form.Control.Feedback type="invalid">Bạn đã nhập sai định dạng số điện thoại. Vui lòng nhập theo định dạng tương tự như ví dụ sau: 0908000000</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="inputForm" id="refCode ">
              <Form.Label>Mã giới thiệu (Không bắt buộc) </Form.Label>
              <Form.Control type="text" placeholder="Nhập mã giới thiệu" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="inputForm" id="gender ">
              <Form.Label>Giới tính</Form.Label>
              <div style={{ paddingBottom: 30 }}>
                <Form.Check inline label="Nam" value={"M"} type="radio" />
                <Form.Check style={{ paddingLeft: 50 }} inline label="Nữ" value={"F"} type="radio" />
              </div>
            </Form.Group>
          </Row>
          <div style={{ paddingBottom: 30, fontFamily: "Proxima Soft Regular", fontSize: 16 }}>
            Bằng việc chọn vào tiếp tục, bạn sẽ đồng ý với{" "}
            <a onClick={() => handleShow(true)} style={{ color: "#E52722", textDecorationLine: "none" }}>
              các điều kiện áp dụng
            </a>{" "}
            của Winlife
          </div>
          <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title style={{ color: "#E52722", fontFamily: "Proxima Soft", fontSize: 20 }}>ĐIỀU KHOẢN & ĐIỀU KIỆN DÀNH CHO HỘI VIÊN WIN</Modal.Title>
            </Modal.Header>
            <Modal.Body>Modal body content</Modal.Body>
          </Modal>
          <Button style={{ backgroundColor: "#E52722", border: "none" }} href="/register" className="btnReg" type="submit">
            Tiếp tục
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
