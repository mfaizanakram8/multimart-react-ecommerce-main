import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
              <div className="logo">
                  <ion-icon name="bag"></ion-icon>
                  <h1>Merimart</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Follow  Us</h2>
              <ul>
                <li><a href="https://www.linkedin.com/in/m-faizan-akram-02196231a/" className="atag">Linkdin</a></li>
                <li><a href="https://github.com/mfaizanakram8" className="atag">Github</a></li>
                <li><a href="https://mfaizanakram.vercel.app/" className="atag">Portfolio </a></li>
                <li><a href="https://www.instagram.com/akram.mfaizan/" className="atag">Instagram</a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100089323489351" className="atag">Facebook</a></li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Customer Care</h2>
              <ul>
                <li>Help Center </li>
                <li>How to Buy </li>
                <li>Track Your Order </li>
                <li>Corporate & Bulk Purchasing </li>
                <li>Returns & Refunds </li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Contact Us</h2>
              <ul>
                <li>Adda Gulmerg chowk </li>
                <li>Email: mfaizanakram536@gmail.com</li>
                <li>Phone: 03106800495</li>
              </ul>
            </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer
