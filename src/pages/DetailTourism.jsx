import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import Card from 'react-bootstrap/Card'
import logo from '../images/logo192.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const DetailTourism = () => {
  return (
    <div>
      <HeaderComponent />
      <Card>
        <Card.Body>
          <Card.Title className='d-flex justify-content-center fw-bold'>
            <h1>Title Tourism</h1>
          </Card.Title>
          <Container>
            <Row>
              <Col className='mt-3'>
                <Card className='p-5'>
                  <Card.Text>
                    <h3>Description :</h3>
                    <p>
                      Hawai Waterpark merupakah salah satu waterpark terbaik di Indonesia.Dibangun di lahan seluas 28.000 meter persegi dan
                      terletak di Perumahan Graha Kencana Jl. Balearjosari Malang. Hawai Waterpark memiliki berbagai macam wahana air dan
                      wahana kering dengan sistem keamaan tinggi dan lifeguard bersertifikat Internasional. Beberapa wahana yang dikenal
                      luas di masyarakat antara lain Kolam Ombak Tsunami dengan ombak tertinggi di Indonesia, Jet Coaster Water Slide dengan
                      tower tertinggi di Indonesia, serta kolam arus dengan 8 tema yang berbeda.
                    </p>
                  </Card.Text>
                </Card>
              </Col>
              <Col className='mt-3'>
                <Card className='p-5'>
                  <Card.Text>
                    <p>Name : Hawai Waterpark</p>
                    <p>Open Time : 09:00:00</p>
                    <p>Close Time : 17:00:00</p>
                    <p>Ticket Price : 125000</p>
                    <p>Rating : 4.4</p>
                    <p>Location : Jl. Graha Kencana Utara V, Karanglo, Banjararum, Kec. Singosari, Kabupaten Malang, Jawa Timur</p>
                  </Card.Text>
                </Card>
              </Col>
            </Row>
          </Container>
        </Card.Body>

        <Card.Body>
          <Card.Title className='d-flex justify-content-center'>
            <h2>Gallery Tourism</h2>
          </Card.Title>
          <Container className='d-flex justify-content-center'>
            <Row>
              <Col xs={6} md={4}>
                <Card.Img variant='top' height={250} width={300} src={logo} />
              </Col>
              <Col xs={6} md={4}>
                <Card.Img variant='top' height={250} widt={250} src={logo} />
              </Col>
              <Col xs={6} md={4}>
                <Card.Img variant='top' height={250} widt={250} src={logo} />
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
      <FooterComponent />
    </div>
  )
}

export default DetailTourism
