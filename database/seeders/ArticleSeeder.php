<?php

namespace Database\Seeders;

use App\Models\Article;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $article = [
            [
                'title' => 'Tampilkan Guyon Waton dan Mr. Jono and Joni, Hawai Ambyar Siap Bikin Hati Remuk Redam',
                'content' => '
                            Setelah sukses dengan Festival Army Day, Hawai Group kini bersiap menggelar event Hawai Ambyar. Perhelatan di destinasi buatan terbesar di Kota Malang ini dikemas dengan menhadirkan mini konser yang dimeriahkan Guyon Waton dan Mr. Jono & Joni.

                            “Konsep Hawai Ambyar kami kemas untuk memanjakan pengunjung Hawai Group. Untuk itu, Hawai Waterpark berusaha memberikan tawaran baru bagi masyarakat dalam berwisata. Tidak hanya berenang atau bermain di Kolam Tsunami semata. Namun pengunjung juga dapat menikmati penampilan khusus dari Guyon Waton dan Mr. Jono & Joni,” ungkap Marketing Communication Hawai Group, Andi Prasetya kepada Malang Pagi, Sabtu (30/7/2022).


                            “Selain itu kami juga menyediakan sejumlah activity fun games berhadiah, Foam Party, Smoke Bomb, dan yang paling spesial kami juga menghadirkan sensasi baru dan tantangan seru, yaitu bermain snow di Hawai Waterpark,” imbuhnya.

                            Seluruh rangkaian acara Hawai Ambyar akan dilaksanakan pada Minggu, 14 Agustus 2022 mendatang, mulai pukul 10.00 WIB hingga 17.00 WIB. “Jangan sampai terlewat. Ada harga tiket presale sebesar Rp100.000 untuk pembelian tiket hingga 31 Juli 2022. Dan harga tiket normal kami bandrol sebesar Rp110.000, berlaku saat pembelian tiket di Agustus,” jelas Andi.

                            Tiket dapat dibeli secara online melalui laman hawaiwaterpark.com/ambyar. Untuk informasi lebih lanjut dapat menghubungi nomor kontak WhatsApp 0811 42 525252, atau melalui Instagram @hawaiwaterpark.

                            Andi membeberkan, dengan harga tiket yang cukup terjangkau tersebut, pihaknya memberikan banyak fasilitas. Pengunjung dapat menikmati semua permainan wahana air seperti Jet Coaster, Rainbow, Ekolu, Tsunami Pool, serta bebas bermain snow di Hawai Waterpark. “Sekaligus menikmati penampilan khusus dari Guyon Waton dan Mr. Jono & Joni.
                            Di samping itu, kami juga menyediakan berbagai hadiah bagi pengunjung,” terangnya.

                            Ditargetkan sebanyak 3.000 pengunjung akan memenuhi lokasi konser di area Kolam Tsunami. “Sedangkan untuk snow-nya ditempatkan atau dibuat di dalam Kolam Tsunami. Jadi pengunjung dapat bermain seluncuran di kolam menggunakan seluncuran es,” ujar Andi.

                            Hawai Ambyar diharapkan mampu memberi pengalaman terbaik bagi pengunjung. “Jadi Hawai Ambyar kami sajikan untuk memberikan hiburan dan pelayanan terbaik kepada para pengunjung. Ayo buruan beli tiketnya,” tandasnya. (Har/MAS)',
                'category_id' => 2,
                'user_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        Article::insert($article);
    }
}
