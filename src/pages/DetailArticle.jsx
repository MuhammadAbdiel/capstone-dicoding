import React from 'react'
import FooterComponent from '../components/FooterComponent'
import HeaderComponent from '../components/HeaderComponent'
import Card from 'react-bootstrap/Card'
// import logo from '../images/logo192.png'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

const DetailArticle = () => {
  return (
    <div>
      <HeaderComponent />
      <Card>
        <Card.Body>
          <Card.Title className='d-flex justify-content-center fw-bold'>
            <h1>Title Article</h1>
          </Card.Title>
          <Card.Text>
            HAWAI GROUP – Tiap tempat wisata pasti punya peraturan masing-masing untuk menjaga tempatnya agar tetap aman dan nyaman bagi
            pengunjung. Salah satu tempat wisata yang juga punya peraturan sendiri untuk pengunjung adalah Hawai Group Malang. Hawai Group
            Malang yang terdiri dari Hawai Waterpark Malang, Malang Night Paradise, Malang Smart Arena, dan Museum Ganesya ini mengajak
            pengunjung untuk bersama-sama tertib demi kenyamanan bersama. Selain itu, peraturan-peraturan ini juga dibuat berdasarkan
            beberapa komplain dari pengunjung lain yang merasa terganggu karena pengunjung lainnya yang meresahkan. Di sini, ada beberapa
            peraturan utama yang wajib untuk kamu ingat ya, Hawaians. Yuk disimak! 1. Dilarang Membawa Makanan Dan Minuman Dari Luar
            Larangan yang pertama adalah Hawaians dilarang untuk membawa makanan dan minuman dari luar. Ketentuan ini dibuat agar kebersihan
            area di dalam tetap terjaga, mengingat ada kemungkinan sampah yang bertebaran di mana-mana bisa menyebabkan kolam renangnya
            kotor. Namun, pengunjung diperbolehkan untuk menitipkan makanan atau bekalnya di area lobby. Jika sewaktu-waktu lapar dan ingin
            memakan bekalnya, kamu bisa mengambilnya. Lalu, kamu akan diarahkan keluar sambil diberikan cap oleh petugas agar bisa masuk
            kembali. 2. Dilarang Membawa Senjata Tajam dan Obat-Obatan Terlarang Selanjutnya, sudah sangat jelas bahwa Hawaians dilarang
            untuk membawa senjata tajam dan obat-obatan terlarang saat akan masuk ke area manapun di Hawai Group Malang. Kamu akan melewati
            pemeriksaan tas dan barang bawaan, maka dari itu lebih baik barang kesayanganmu disimpan di rumah saja ya! 3. Dilarang Membawa
            Hewan Peliharaan Nah yang ketiga ini tak kalah krusial juga. Jika kamu berlibur ke tiap area di Hawai Group Malang, pastikan
            peliharaanmu jangan dibawa. Alasannya karena selain untuk kebersihan, kami juga tidak menyediakan tempat penitipan untuk hewan.
            4. Dilarang Menerbangkan Drone di Area Hawai Group Malang Keempat, kamu juga dilarang untuk menerbangkan drone di area Hawai
            Group Malang. Selain karena alasan privasi dan kenyamanan pengunjung lain, alasan keselamatan alatmu juga jadi prioritas kami.
            Maka dari itu, lebih baik diterbangkan di tempat lain saja ya, Hawaians. 5. Tinggi Badan Anak di Atas 85 Cm Dikenakan Harga
            Tiket Penuh Peraturan terakhir cukup sederhana, yakni minimum tinggi badan sebelum akhirnya dikenakan harga tiket. Untuk
            anak-anak, jika tingginya sudah diatas 85 cm, berarti orang tuanya sudah harus membelikan tiket agar anaknya bisa ikut masuk ke
            dalam. Namun, khusus di Malang Smart Arena anak dengan tinggi di bawah 85 cm juga sudah dikenakan biaya tiket ya, Hawaians. Itu
            dia tadi beberapa peraturan utama jika kamu ingin berwisata ke seluruh wahana Hawai Group Malang. Beberapa peraturan lainnya
            seperti wajib menjaga barang berharga masing-masing dan peraturan lainnya, bisa kamu lihat langsung di papan peraturan ya.
            Selamat berlibur, Hawaians!
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title className='d-flex justify-content-start'>
            <h2>excerpt</h2>
          </Card.Title>
          <Card.Text className='text-center'>
            HAWAI GROUP - Tiap tempat wisata pasti punya peraturan masing-masing untuk menjaga tempatnya agar tetap aman dan nyaman bagi
            pengunjung. Salah satu tempat wisata yang juga punya peraturan sendiri untuk pengunjung adalah Hawai Group Malang.
          </Card.Text>
        </Card.Body>
        {/* <Card.Body>
          <Card.Title className='d-flex justify-content-start'>
            <h2>Gallery</h2>
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
              <Col xs={6} md={4}>
                <Card.Img variant='top' height={250} widt={250} src={logo} />
              </Col>
            </Row>
          </Container>
        </Card.Body> */}
      </Card>
      <FooterComponent />
    </div>
  )
}

export default DetailArticle
