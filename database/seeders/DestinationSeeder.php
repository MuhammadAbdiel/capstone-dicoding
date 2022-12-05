<?php

namespace Database\Seeders;

use App\Models\Destination;
use Illuminate\Database\Seeder;

class DestinationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $destination = [
            [
                'name' => 'Hawai Waterpark',
                'open_time' => '09:00:00',
                'close_time' => '17:00:00',
                'price' => 125000,
                'rating' => 4.4,
                'location' => 'Jl. Graha Kencana Utara V, Karanglo, Banjararum, Kec. Singosari, Kabupaten Malang, Jawa Timur',
                'description' => '
                                    Hawai Waterpark merupakah salah satu waterpark terbaik di Indonesia.Dibangun di lahan seluas 28.000 meter persegi dan terletak di Perumahan Graha Kencana Jl. Balearjosari Malang. Hawai Waterpark memiliki berbagai macam wahana air dan wahana kering dengan sistem keamaan tinggi dan lifeguard bersertifikat Internasional. Beberapa wahana yang dikenal luas di masyarakat antara lain Kolam Ombak Tsunami dengan ombak tertinggi di Indonesia, Jet Coaster Water Slide dengan tower tertinggi di Indonesia, serta kolam arus dengan 8 tema yang berbeda.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'FLORA WISATA Santerra De Laponte',
                'open_time' => '08:00:00',
                'close_time' => '17:00:00',
                'price' => 25000,
                'rating' => 4.6,
                'location' => 'Jalan Raya Madya, Jurangrejo, Pandesari, Kec. Pujon, Kabupaten Malang, Jawa Timur',
                'description' => '
                                    Flora Wisata San Terra merupakan destinasi wisata kekinian dan instagramable yang terletak di Kota Wisata Pujon Malang, Jawa Timur. Dengan ketinggian 1200mdpl, sehingga dapat dirasakan hawa sejuknya ditambah dengan view khas pegunungan.

                                    Flora Wisata San Terra didirikan pada tahun 2019. Flora Wisata San Terra dibangun dengan konsep taman bunga, spot foto instagramable, wahana permainan dan kuliner ala garden. Wisata ini sangat cocok untuk segala usia dari anak, remaja, dewasa, maupun lansia. Terdapat ratusan jenis tanaman bunga hias, juga melayani penjualan tanaman bunga hias dalam pot.

                                    Wisata yang berdiri diatas tanah dengan luas 5 hektar ini mulai dibuka pukul 08.00-17.00 WIB. Harga Tiket Masuk (HTM) sangat terjangkau yaitu Weekday 25.000 dan Weekend/Libur Nasional 30.000 per orang. Dengan biaya tiket yang terjangkau sudah dapat menikmati semua spot foto tanpa berbayar lagi, kecuali untuk wahana permainan akan dikenai tiket bermain. Flora Wisata San Terra juga terdapat Gedung serbaguna yang dapat digunakan untuk acara gathering, rapat, wedding, dan prewedding.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Batu Flower Garden',
                'open_time' => '08:00:00',
                'close_time' => '16:00:00',
                'price' => 112500,
                'rating' => 4.1,
                'location' => 'Oro-Oro Ombo, Kec. Batu, Kota Batu, Jawa Timur',
                'description' => '
                                    Batu Flower Garden merupakan Wana Wisata Buatan yang terletak di dalam Kawasan Wana Wisata Coban Rais. Wisata Batu Flower Garden mengusung konsep Wisata Selfie. Jumlah spot selfie yang ada di wisata ini yaitu 34 spot. Di setiap spot telah disediakan crew foto (tanpa biaya) dan wisatawan bisa langsung berfoto ria sesuai arahan ataupun gaya sendiri.

                                    Batu Flower Garden cocok sebagai tujuan destinasi semua kalangan. Pada Tahun 2017 BFG meraih penghargaan Juara 1 Wisata Alam Buatan Terbaik di JATIM. Selain wisata selfie, di Batu Flower Garden juga menyediakan paket OutBound, Praweeding, Edukasi Hidroponik dan Family Gathering.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Jawa Timur Park 3',
                'open_time' => '11:00:00',
                'close_time' => '20:00:00',
                'price' => 200000,
                'rating' => 4.5,
                'location' => 'Jl. Ir. Soekarno No.144, Beji, Kec. Junrejo, Kota Batu, Jawa Timur',
                'description' => '
                                    Dari wahana sebelumnya yaitu Jatim Park 1 yang menawarkan permainan, pengetahuan hingga hiburan dan Jatim Park 2 dengan kemegahan dari Museum Satwa serta Secret Zoonya, Jatim Park kini menghadirkan wahana menarik buatan berupa replika Dinosaurus.

                                    Jatim Park 3 berada di desa Beji, Kecamatan Junrejo, Kota Batu. Jatim Park 3 mengusung konsep taman bermain sekaligus edukasi mengenai hewan-hewan purbakala termasuk Dinosaurus di area Dinopark dan area spot foto patung lilin yang lengkap dengan nuansa berbagai negara serta terdapat taman lampu yang luas diarea The Legend Stars serta terdapat 3 lokasi lain yaitu Museum Musik Dunia , Funtech Plaza, dan Milenial Glow Garden. Taman Wisata Jatim Park 3 juga dilengkapi dengan food court di tiap area yang menyajikan aneka masakan tradisional, eropa, jajanan ringan dan minuman segar.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Jawa Timur Park 2',
                'open_time' => '08:30:00',
                'close_time' => '17:30:00',
                'price' => 135800,
                'rating' => 4.7,
                'location' => 'Jl. Oro-Oro Ombo No.9, Temas, Kec. Batu, Kota Batu, Jawa Timur',
                'description' => '
                                    Di Jatim Park dua, Anda lebih menikmati wisata edukasi. Kita diajarkan ilmu pengetahuan khsusunya alam, serta mengenalkan lingkungan satwa, alam, budaya dan lain-lain.

                                    Di dalam wisata ini, Anda bisa menikmati beberapa area wisata dengan penyajian berbeda yang bisa dinikmati hanya dari satu tempat saja. Dengan luas sekitar 2 hektare, Anda bisa menikmati 3 are utama yakni Secret Zoo, Museum Satwa, dan Eco Green Park.

                                    Jatim Park begitu terkenal di telinga kita entah itu yang bertempat di provinsi Jawa Timur maupun luar provinsi tersebut. Saking terkenalnya, hampir setiap hari akan ditemukan pengunjung lebih dari 1000. Pada hari tertentu, pengunjung bisa mencapai 3000 lebih atau sampai 5000. Seperti pada hari libur atau natal.

                                    Jumlah yang tidak sedikit itu, patut kita acungi jempol. Sebab dengan jumlah tersebut, sudah cukup membuktikan bahwa Jatim Park memang wisata yang wajib Anda kunjungi.Dan meskipun ia diresmikan pada tahun 2008 lalu, hal yang harus kita banggakan adalah,sampai sekarang Jatim Park 2 terus selalu melakukan pengembangan. Tak ayal, kualitas wisata ini dari hari ke hari pun makin baik.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Jawa Timur Park 1',
                'open_time' => '08:30:00',
                'close_time' => '16:30:00',
                'price' => 97000,
                'rating' => 4.7,
                'location' => 'Jl. Kartika No.2, Sisir, Kec. Batu, Kota Batu, Jawa Timur',
                'description' => '
                                    Jatim Park adalah sebuah tempat rekreasi dan taman belajar yang terdapat di Kota Batu, Jawa Timur. Objek wisata ini berada sekitar 20 km barat Kota Malang, dan kini menjadi salah satu icon wisata Jawa Timur. Objek wisata ini memiliki 36 wahana, di antaranya kolam renang raksasa (dengan latar belakang patung Ken Dedes, Ken Arok, dan Mpu Gandring), spinning coaster, dan drop zone. Wahana pendidikan yang menjadi pusat perhatian di antaranya adalah Volcano dan Galeri Nusantara yang juga terdapat tanaman agro, diorama binatang langka, dan miniatur candi-candi. Jatim Park 1 beralamat di Jalan Kartika no. 2, yang berdekatan dengan Klub Bunga

                                    Jatim Park 1 dinobatkan sebagai juara 1 kategori wisata buatan berskala besar tingkat nasional yang dianugerahkan Menteri Pariwisata dan Ekonomi Kreatif, Mari Elka Pangestu, Jumat (27/9/2013), di Jakarta. “Saya tidak menyangka Kota Wisata Batu sedemikian indah. Kita tidak perlu ke Disneyland, Ancol, cukup disini (Batu, Red),” kata Mari Elka Pengestu di Klub Bunga dalam acara Galadinner bersama Muspida Malang Raya, Rabu (2/5/2013).',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Malang Night Paradise',
                'open_time' => '17:45:00',
                'close_time' => '22:00:00',
                'price' => 145000,
                'rating' => 4.4,
                'location' => 'Jl. Graha Kencana Raya Jl. Raya Karanglo No.66, Karanglo, Balearjosari, Kec. Blimbing, Kota Malang, Jawa Timur',
                'description' => '
                                    Taman dengan sejuta gemerlap lampu LED. Malang Night Paradise merupakan wisata malam terbesar di Jawa Timur yang menawarkan keindahan gemerlap taman lampu LED dan taman lampion, dan merupakan satu-satunya tempat foto dengan standar internasional. Malang Night Paradise dibangun dengan kualitas taman bermain yang mampu memanjakan mata dan membuat Anda untuk segera mengabadikan moment tersebut. Terdapat banyak wahana permainan yang dapat digunakan oleh semua umur, wahana yang dicari oleh pengunjung antara lain : Magic Journey 2, Roemah 147, Adventure land, dan Museum Ganesya.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Taman Rekreasi Selecta',
                'open_time' => '07:00:00',
                'close_time' => '16:00:00',
                'price' => 40000,
                'rating' => 4.5,
                'location' => 'Jl. Raya Selecta No.1, Tulungrejo, Kec. Bumiaji, Kota Batu, Jawa Timur',
                'description' => '
                                    Selecta terkenal dengan Kolam renang dengan Air yang jernih yang membuat wisatawan pasti ingin berlama lama disini, selain bermain bersama keluarga disini jug aada  Water Park dan Area Anak – anak. Sepeda udara yang menyajikan pemandangan natural yang apik di Taman Rekreasi Selecta, Udara yang sejuk dan Bunga bunga di kiri kanan mata akan memanjakan Anda dan keluarga.
                
                                    Rasakan keseruan dan petualangan bersepeda mengayuh bersama dikolam air yang jernih dan asri. Selecta menyediakan Bioskop 4 Dimensi untuk anda nikmati, Bioskop dengan teknologi terkini ini siap menjadi salah satu Andalan dari Taman rekreasi Selecta,tidak hanya Visual tapi juga Motion dihadirkan dalam Bioskop iniSelecta juga menyediakan Arena Flying Fox bagi anda yang bernyali tinggi, tentu saja akan ada nuansa berbeda saat anda Mencobanya karena Suasana alam yang Masih natural akan membuat Flying Fox menjadi semakin Asyik dan seru. Tidak ada yang lebih asyik dari Melihat pemandangan Wisata Selecta dari ketinggian, Nikamti Alam yang masih bersih dan sejuk Di Taman Rekreasi Selecta.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Museum Angkut',
                'open_time' => '12:00:00',
                'close_time' => '20:00:00',
                'price' => 160000,
                'rating' => 4.7,
                'location' => 'Jl. Terusan Sultan Agung No.2, Ngaglik, Kec. Batu, Kota Batu, Jawa Timur',
                'description' => '
                                    Museum Angkut merupakan museum transportasi dan tempat wisata modern yang terletak di Kota Batu, Jawa Timur, sekitar 20 km dari Kota Malang. Museum ini terletak di kawasan seluas 3,8 hektar di lereng Gunung Panderman dan memiliki lebih dari 300 koleksi jenis angkutan tradisional hingga modern. Museum ini terbagi dalam beberapa zona yang didekorasi dengan setting landscape model bangunan dari benua Asia, Eropa hingga Amerika. Di Zona Sunda Kelapa dan Batavia yang merupakan Replika Pelabuhan Sunda Kelapa, dihiasi oleh beberapa alat transportasi kuno seperti becak dan miniatur kapal. Zona Eropa juga di setting seakan-akan berada di jalanan kota-kota di Prancis dengan mobil-mobil kuno Eropa.

                                    Selain mobil-mobil kuno, salah satu koleksi terbarunya adalah Mobil listrik Tucuxi milik mantan menteri Dahlan Iskan yang sebelumnya pernah mengalami kecelakaan di sebuah lereng gunung di Magetan saat baru diujicobakan. Di museum ini juga terdapat wahana Flight Simulator yang terletak di lantai 3 gedung museum.

                                    Museum Angkut dikelola oleh Jawa Timur Park Group yang sebelumnya juga membangun Batu Secret Zoo, Batu Night Spectacular (BNS), Eco Green Park dan Museum Satwa. Museum ini didirikan pada 9 Maret 2014.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Taman Langit Gunung Banyak',
                'open_time' => '07:00:00',
                'close_time' => '00:00:00',
                'price' => 10000,
                'rating' => 4.6,
                'location' => 'Jl. Gn. Banyak, Gunungsari, Kec. Bumiaji, Kota Batu, Jawa Timur',
                'description' => '
                                    Taman Langit berada di kawasan Gunung Banyak dengan ketinggian sekitar 1.315 meter diatas permukaan laut. Lokasi nya tidak terlalu jauh dari tempat wisata Paralayang Batu yang sudah sangat terkenal di kalangan wisatawan.

                                    Tempat ini sangat cocok untuk Anda yang ingin menikmati keindahan alam dan senang berfoto. Meskipun relatif baru, Taman Langit berhasil menarik banyak perhatian pengunjung berkat spot foto menarik yang dimilikinya.

                                    Pemandangan indah dari ketinggian menjadi latar belakang utama foto-foto yang akan Anda dapatkan. Ditemani hawa sejuk dan dingin ala pegunungan akan membuat Anda betah berlama-lama bermain di Taman Langit.

                                    Dengan segala keindahan dan spot berfoto yang ada di Taman Langit, menjadikan tempat ini salah satu spot favorit untuk berfoto. Jangan lewatkan kesempatan Anda mendapatkan foto terbaik saat berkunjung ke Taman Langit Malang.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Wisata Paralayang',
                'open_time' => '00:00:00',
                'close_time' => '00:00:00',
                'price' => 20000,
                'rating' => 4.7,
                'location' => 'Jl. Gn. Banyak, Songgokerto, Kec. Batu, Kota Batu, Jawa Timur',
                'description' => '
                                    Paralayang adalah nama untuk Puncak Gunung Banyak, Kota Batu yang memiliki ketinggian 1.326 mdpl. Tempat ini pada mulanya merupakan tempat yang dijadikan sebagai landasan take-off atlet paralayang.

                                    Lokasi ini dijadikan pusat latihan dan event paralayang se-Malang Raya. Diresmikan pada tahun 2000, bersamaan dengan diadakannya event PON VI Jatim yang ditandai dengan penandatanganan prasasti oleh Ketua Umum Federasi Aero Sport Indonesia Marsekal TNI Hanafi Asnan.

                                    Di Paralayang, para atlet dapat melayang sambil menikmati keindahan alam dari udara. Pesona pemandangan yang dapat dinikmati para olahragawan menjadi sajian yang menakjubkan, sehingga makin banyak para atlet yang menjajal area ini.

                                    Tidak hanya atlet lokal Malang, atlet daerah Jawa Timur, Nasional dan Internasional sangat menikmati mengikuti ajang paralayang di kawasan Paralayang Batu ini.

                                    Seiring berjalannya waktu serta makin banyaknya minat pengunjung untuk mendatangi Paralayang, kawasan ini dibuka lebih umum dan luas. Bukan hanya atlet profesional yang dapat menjajal terbang bersama burung di udara, pengunjung pun dapat turut merasakan sensasi terbang ini.

                                    Anda dapat merasakan kebebasan melayang bersama angin sambil menikmati keindahan alam dengan ditemani instruktur yang disediakan pengelola. Biaya yang harus anda keluarkan memang tidak sedikit, namun itu sepadan dengan pengalaman yang anda rasakan.

                                    Karena kegiatan uji nyali ini sangat bergantung pada cuaca dan angin, tidak setiap saat anda dapat terbang. Hanya ketika cuaca cerah dan angin berhembus ke arah yang tepat aktivitas ini dilakukan.

                                    Puncak kegiatan paralayang di daerah ini berlangsung antara Bulan Juni Hingga Oktober. Di bulan-bulan ini, sering pula diadakan kejuaraan paralayang mulai tingkat regional hingga internasional.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Wisata Agro Wonosari',
                'open_time' => '06:00:00',
                'close_time' => '17:00:00',
                'price' => 12000,
                'rating' => 4.4,
                'location' => 'Bodean Putuk, Toyomarto, Kec. Singosari, Kabupaten Malang, Jawa Timur',
                'description' => '
                                    Kebun Teh Wonosari ini terletak di dataran tinggi lereng Gunung Arjuna Malang. Kebun teh ini berada di ketinggian 1250 Mdpl. Dan tentunya menawaran pemandangan hijau yang memanjakan mata dan menyejukkan. Kebun ini berdiri diatas lahan seluas 1.144 hektar, dan menjadi satu-satunya kebun teh di Jawa Timur yang diolah sebagai obyek wisata.

                                    Layaknya seperti sebuah alternative objek wisata Kebun Teh Bogor. Masyarakat sudah merasakan seperti tempat wisata kebun teh Bogor. Kebun teh yang terbentang sangat luas, jika kamu mengunjungi tempat ini kamu akan disuguhkan hamparan hijau dari tanaman teh yang tertata rapi.

                                    Wisata ini sangat cocok untuk kamu kunjungi bersama keluarga. Karena tempatnya yang sejuk, dingin dan asri sangat layak kamu coba kunjungi.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Bukit Teletubbies Batu',
                'open_time' => '00:00:00',
                'close_time' => '00:00:00',
                'price' => 0,
                'rating' => 4.5,
                'location' => 'Bumiaji, Kec. Bumiaji, Kota Batu, Jawa Timur',
                'description' => '
                                    Bukit Teletubbies juga tak hanya terdapat di kawasan Bromo, namun di Kota Batu juga ada lho. Bahkan bukit Teletubbies ada di kota Batu ini menjadi salah satu destinasi wisata favorit untuk warga Kota Batu hingga wisatawan yang berkunjung ke Kota Dingin satu ini.

                                    Mengapa tempat ini disebut sebagai Bukit Bukit Teletubbies? Hal tersebut tak lain karena bukitnya memiliki hamparan rumput yang hijau bergelombang seperti yang ada di dalam film kartun Teletubbies.

                                    Hamparan bukit hijau yang ini letaknya berada disebelah Sekolah Luar Biasa Negeri (SLBN) Kota Batu. Tepatnya dengan jarak sekitar 200 meter dari arah Balai Desa Bumiaji, Kecamatan Bumiaji.

                                    Tempat ini juga menjadi salah satu unggulan desa wisata yang sering direkomendasikan untuk wisatawan yang hendak berlibur menghindar kebisingan kota.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Kampoeng Heritage Kajoetangan',
                'open_time' => '08:00:00',
                'close_time' => '18:00:00',
                'price' => 10000,
                'rating' => 4.6,
                'location' => 'Jl. Arief Rahman Hakim Gg. 11, Kauman, Kec. Klojen, Kota Malang, Jawa Timur',
                'description' => '
                                    Kampung Heritage Kajoetangan adalah kampung wisata tematik yang mengusung konsep suasana tempo dulu. Kawasan yang berlokasi di Jl. Arif Rahman Hakim gg II, Kauman, Kec. Klojen, Kota Malang, Jawa Timur ini sudah tercatat dalam sejarah masa klasik hingga modern. Kampung ini memiliki ciri khas deretan rumah berarsitektur kolonial Belanda dengan aksesoris, perabotan, hingga nuansa kesehariannya yang khas tempo dulu.

                                    Seperti halnya banyak perkampungan di kota, di sini pengunjung diajak menyusuri gang-gang kecil. Terdapat tiga akses masuk menuju Kampoeng Heritage Kajoetangan. Bisa dari koridor Talun di Jalan Arif Rahman Hakim. Dua akses lainnya dari koridor Kayutangan di Jalan Basuki Rahmat.

                                    Pengunjung diberi peta wisata Kayutangan dan kartupos bergambar bangunan lawas. Terdapat 60 rumah tua yang berhasil diidentifikasi di kampung ini. Seluruhnya relatif terjaga bentuk aslinya. Di depan rumah-rumah tersebut dipasang plakat informasi usia bangunan hingga pemilik pertamanya. Rumah tertua dicatat dibangun pada 1870.

                                    Banyak pula rumah yang dibangun dalam kurun 1920-1940 dengan model atap pelana atau biasa disebut rumah jengki. Warga juga menyiapkan rumah mereka sebagai titik swafoto bagi pengunjung.

                                    Dari seluruh rumah bergaya arsitektur Belanda, terdapat 25 rumah siap menerima wisatawan dengan menyediakan berbagai properti untuk pengunjung berfoto sembari pemiliknya tetap beraktivitas seperti biasa.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Batu Night Spectacular',
                'open_time' => '15:00:00',
                'close_time' => '23:00:00',
                'price' => 120000,
                'rating' => 4.5,
                'location' => 'Jl. Hayam Wuruk No.1, Oro-Oro Ombo, Kec. Batu, Kota Batu, Jawa Timur',
                'description' => '
                                    Jelajahi Batu Night Spectacular, pasar malam penuh warna yang cocok untuk seluruh keluarga! Dari wahana ramah anak sampai yang menguji nyali, serta tempat-tempat berfoto unik, semua dapat Anda nikmati di sini ditemani udara pegunungan yang segar.

                                    Buka dari pukul 3 sore hingga tengah malam, taman ini menawarkan berbagai macam hiburan untuk semua orang. Nikmati beragam wahana yang menguji adrenalin dan menghibur untuk keluarga, seperti Flying Swinger, Rumah Hantu, dan VR Ride. Masuki taman lampion untuk mengabadikan pemandangan lampion berwarna-warni. Jangan lewatkan juga kesempatan menyaksikan pertunjukan air mancur yang spektakuler diikuti pertunjukan multimedia, di mana Anda dapat melihat air mancur menari dengan indah mengikuti alunan musik.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        Destination::insert($destination);
    }
}
