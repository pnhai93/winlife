import React from "react";
import Card from "react-bootstrap/Card";
function ListProduct() {
  return (
    <div className="listProduct">
      <Card border="light" className="card">
        <Card.Img className="card-image" variant="top" src="/images/product1.svg" />
        <Card.Body>
          <Card.Title className="card-title">
            <div className="price">59.900đ</div> <span className="oum">/kg</span>
          </Card.Title>
          <Card.Text>
            <div className="sellPrice">
              49.900 <span style={{ fontSize: 20, color: "#E52722", fontWeight: 800, verticalAlign: "top" }}>đ</span>
            </div>
          </Card.Text>
          <Card.Text className="productName">Táo Braeburn New Zealand</Card.Text>
        </Card.Body>
      </Card>
      <Card border="light" className="card">
        <Card.Img className="card-image" variant="top" src="/images/product2.svg" />
        <Card.Body>
          <Card.Title className="card-title">
            <div className="price">9.900đ</div> <span className="oum">/Gói</span>
          </Card.Title>
          <Card.Text>
            <div className="sellPrice">
              8.910 <span style={{ fontSize: 20, color: "#E52722", fontWeight: 800, verticalAlign: "top" }}>đ</span>
            </div>
          </Card.Text>
          <Card.Text className="productName">Wanesco Giá đỗ 300g</Card.Text>
        </Card.Body>
      </Card>
      <Card border="light" className="card">
        <Card.Img className="card-image" variant="top" src="/images/product3.svg" />
        <Card.Body>
          <Card.Title className="card-title">
            <div className="price" style={{ textDecorationLine: "none" }}>
              Giá chỉ
            </div>
          </Card.Title>
          <Card.Text>
            <div className="sellPrice">
              99.900 <span style={{ fontSize: 20, color: "#E52722", fontWeight: 800, verticalAlign: "top" }}>đ</span>
            </div>
          </Card.Text>
          <Card.Text className="productName">Meat Deli: Thịt heo xay (s)</Card.Text>
        </Card.Body>
      </Card>
      <Card border="light" className="card">
        <Card.Img className="card-image" variant="top" src="/images/product4.svg" />
        <Card.Body>
          <Card.Title className="card-title">
            <div className="price">13.900</div> <span className="oum">/Bó</span>
          </Card.Title>
          <Card.Text>
            <div className="sellPrice">
              9.700 <span style={{ fontSize: 20, color: "#E52722", fontWeight: 800, verticalAlign: "top" }}>đ</span>
            </div>
          </Card.Text>
          <Card.Text className="productName">Rau Muống 500g</Card.Text>
        </Card.Body>
      </Card>
      <Card border="light" className="card">
        <Card.Img className="card-image" variant="top" src="/images/product5.svg" />
        <Card.Body>
          <Card.Title className="card-title">
            <div className="price">14.900đ</div> <span className="oum">/Gói</span>
          </Card.Title>
          <Card.Text>
            <div className="sellPrice">
              9.900 <span style={{ fontSize: 20, color: "#E52722", fontWeight: 800, verticalAlign: "top" }}>đ</span>
            </div>
          </Card.Text>
          <Card.Text className="productName">Nấm kim châm 150g</Card.Text>
        </Card.Body>
      </Card>
      <Card border="light" className="card">
        <Card.Img className="card-image" variant="top" src="/images/product6.svg" />
        <Card.Body>
          <Card.Title className="card-title">
            <div className="price">29.900đ</div> <span className="oum">/Quả</span>
          </Card.Title>
          <Card.Text>
            <div className="sellPrice">
              26.900 <span style={{ fontSize: 20, color: "#E52722", fontWeight: 800, verticalAlign: "top" }}>đ</span>
            </div>
          </Card.Text>
          <Card.Text className="productName">Dưa hấu Sài Gòn</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ListProduct;
