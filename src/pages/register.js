/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import  React  from "react";
import {  useState,useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Link , useNavigate} from "react-router-dom";
   import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Register = () => {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({})
    const navigate = useNavigate();

  interface FormDataType {
    fullName: string;
    phoneNumber: number;
    refCode: string;
    gender: string;
  }
  const formData: FormDataType = { fullName: "", phoneNumber: 0, refCode: "", gender: "" };

  const [responseBody, setResponseBody] = useState(formData);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = event.target;
  setResponseBody({ ...responseBody, [name]: value });
};

   function handleShow() {
     setShow(true);
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
     event.preventDefault();
     console.log("responseBody", responseBody);
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
            <Form.Group className="inputForm">
              <Form.Label>Họ và tên</Form.Label>
              <Form.Control name="fullName" onChange={(e) => inputChangeHandler(e)} type="text" placeholder="Nhập họ tên" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="inputForm">
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control min={10} required type="number" placeholder="Nhập số điện thoại" name="phoneNumber" onChange={(e) => inputChangeHandler(e)} />
              <Form.Control.Feedback type="invalid">Bạn đã nhập sai định dạng số điện thoại. Vui lòng nhập theo định dạng tương tự như ví dụ sau: 0908000000</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="inputForm">
              <Form.Label>Mã giới thiệu (Không bắt buộc) </Form.Label>
              <Form.Control type="text" placeholder="Nhập mã giới thiệu" name="refCode" onChange={(e) => inputChangeHandler(e)} />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="inputForm" name="gender" onChange={(e) => inputChangeHandler(e)}>
              <Form.Label>Giới tính</Form.Label>
              <div style={{ paddingBottom: 30 }}>
                <Form.Check inline label="Nam" value={"M"} type="radio" name="gender" />
                <Form.Check style={{ paddingLeft: 50 }} inline label="Nữ" value={"F"} type="radio" name="gender" />
              </div>
            </Form.Group>
          </Row>
          <div style={{ paddingBottom: 30, fontFamily: "Proxima Soft Regular", fontSize: 16 }}>
            Bằng việc chọn vào tiếp tục, bạn sẽ đồng ý với{" "}
            <a onClick={() => handleShow()} style={{ color: "#E52722", textDecorationLine: "none" }}>
              các điều kiện áp dụng
            </a>{" "}
            của Winlife
          </div>
          <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title style={{ color: "#E52722", fontFamily: "Proxima Soft", fontSize: 20 }}>ĐIỀU KHOẢN & ĐIỀU KIỆN DÀNH CHO HỘI VIÊN WIN</Modal.Title>
            </Modal.Header>
            <Modal.Body>Modal body content</Modal.Body>
          </Modal>
          <Button onClick={() => navigate(`/confirm/${responseBody.phoneNumber}`)} style={{ backgroundColor: "#E52722", border: "none" }} className="btnReg" type="submit">
            Tiếp tục
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
