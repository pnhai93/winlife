/* eslint-disable jsx-a11y/alt-text */
import React from "react";
const Footer = () => {
  return (
    <>
      <div style={{ marginBottom: "-10%" }}>
        <div style={{ display: "flex", flexDirection: "row", width: "85%", margin: "0 auto", marginBottom: "-50%", marginTop: "10%" }}>
          <img style={{ width: "70%", margin: "0 auto", position: "relative" }} src="/images/winmartCard.svg"></img>
          <img style={{ width: "70%", margin: "0 auto", position: "relative" }} src="/images/drWinCard.svg"></img>
          <img style={{ width: "70%", margin: "0 auto", position: "relative" }} src="/images/phucLongCard.svg"></img>
        </div>
        <div>
          <img style={{ width: "100%", margin: "0 auto", position: "relative" }} src="/images/Group 1.svg"></img>
        </div>
      </div>

      <div className="footer">
        <div className="footer-contact">
          <p className="contact-title">HOT LINE</p>
          <img style={{width: 32, position:"relative", top:-5}} src="/images/phoneIcon.svg"></img>
          <span className="phoneNumber"> 0247 1066 866 </span>
          <p className="contact-title">EMAIl</p>
          <div className="email"> CSKH@winmart.masangroup.com </div>
        </div>
        <div className="footer-infomation">
          <p className="info-title"> Công ty Cổ Phần Dịch Vụ Thương Mại Tổng Hợp WinCommerce</p>
          <p className="info">Mã số doanh nghiệp 0104918404 Đăng ký lần đầu ngày 20 tháng 09 năm 2010</p>
          <p className="info-title"> Trụ sở chính & địa chỉ giao dịch TP HCM</p>
          <p className="info">Công ty Cổ Phần Dịch Vụ Thương Mại Tổng Hợp WinCommerce, Tầng 5, Mplaza Saigon, 39 Lê Duẩn, Phường Bến Nghé Quận 1, TP Hồ Chí Minh</p>
          <p className="info-title"> Địa chỉ giao dịch Hà Nội</p>
          <p className="info">Công ty Cổ Phần Dịch Vụ Thương Mại Tổng Hợp WinCommerce, Tầng 6, toà nhà trung tâm Quốc Tế, số 17 Ngô Quyền, Phường Tràng Tiền, Quận Hoàn Kiếm, TP Hà Nội.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
