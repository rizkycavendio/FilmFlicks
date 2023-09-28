const data = {
  "error": false,
  "message": "success",
  "films": [
    {
      "id": 1,
      "judul": "Avatar The Way Of Water",
      "genre": ["Aksi", "Petualangan", "Fantasi"],
      "tahun": 2022,
      "durasi": "2 jam 30 menit",
      "gambar": "https://i.pinimg.com/564x/10/e8/58/10e8588cc42266bbcb5e7bfc13e41e79.jpg",
      "deskripsi": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure."
    },
    {
      "id": 2,
      "judul": "Onepiece Live Action",
      "genre": ["Aksi", "Petualangan", "Komedi"],
      "tahun": 2023,
      "durasi": "2 jam 15 menit",
      "gambar": "https://i.pinimg.com/564x/c4/af/c9/c4afc91c3a66c0dbe80171cac3d7baf0.jpg",
      "deskripsi": "With his straw hat and ragtag crew, young pirate Monkey D. Luffy goes on an epic voyage for treasure in this live-action adaptation of the popular manga."
    },
    {
      "id": 3,
      "judul": "Oppenheimer",
      "genre": ["Drama", "Sejarah"],
      "tahun": 2023,
      "durasi": "3 Jam 0 menit",
      "gambar": "https://i.pinimg.com/564x/6e/76/dd/6e76dd32268d3ec4269751dd4e8f4cf2.jpg",
      "deskripsi": "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II."
    },
    {
      "id": 4,
      "judul": "Transformer: Rise Of The Beast",
      "genre": ["Aksi", "Petualangan", "Sains Fiksi"],
      "tahun": 2023,
      "durasi": "2 jam 7 menit",
      "gambar": "https://i.pinimg.com/564x/10/e8/58/10e8588cc42266bbcb5e7bfc13e41e79.jpg",
      "deskripsi": "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth."
    },
    {
      "id": 5,
      "judul": "Meg 2: The Trench",
      "genre": ["Horror", "Petualangan"],
      "tahun": 2023,
      "durasi": "1 jam 56 menit",
      "gambar": "https://i.pinimg.com/564x/c2/ea/56/c2ea5611fa913423b5a3080a573bc224.jpg",
      "deskripsi": "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival."
    },
    {
      "id": 6,
      "judul": "The Matrix Resurrections",
      "genre": ["Aksi", "Sains Fiksi"],
      "tahun": 2021,
      "durasi": "2 jam 28 menit",
      "gambar": "https://i.pinimg.com/564x/93/0e/3e/930e3e44f2e178eb4e3a2e67ba13d9b0.jpg",
      "deskripsi": "Neo kembali ke dunia Matrix dalam upaya untuk mengungkap kebenaran tentang Matrix dan menyelamatkan umat manusia dari kendali mesin."
    },
    {
      "id": 7,
      "judul": "Dune",
      "genre": ["Petualangan", "Sains Fiksi"],
      "tahun": 2021,
      "durasi": "2 jam 35 menit",
      "gambar": "https://i.pinimg.com/564x/2a/b5/14/2ab51409bf2df8b4b42078cb31ff9e1f.jpg",
      "deskripsi": "Seorang pangeran muda harus menjalani perjalanan berbahaya untuk melindungi planet gurun yang berharga dan melawan kekuatan jahat yang ingin menguasainya."
    },
    {
      "id": 8,
      "judul": "Spider-Man: No Way Home",
      "genre": ["Aksi", "Petualangan", "Sains Fiksi"],
      "tahun": 2021,
      "durasi": "2 jam 28 menit",
      "gambar": "https://i.pinimg.com/564x/55/b9/73/55b97368ee71700c76269d04a8a78e90.jpg",
      "deskripsi": "Peter Parker berusaha untuk mengatasi konsekuensi pengungkapan identitasnya sebagai Spider-Man dan meminta bantuan dari Doctor Strange untuk mengembalikan kehidupannya yang berantakan."
    },
    {
      "id": 9,
      "judul": "The French Dispatch",
      "genre": ["Komedi", "Drama"],
      "tahun": 2021,
      "durasi": "1 jam 47 menit",
      "gambar": "https://i.pinimg.com/564x/b1/e9/a8/b1e9a8dcb1dc9490f24bf31495b1fbbd.jpg",
      "deskripsi": "Sebuah kisah antologi tentang kisah-kisah yang diterbitkan dalam The French Dispatch, sebuah majalah sastra fiksi yang terinspirasi oleh The New Yorker."
    },
    {
      "id": 10,
      "judul": "No Time to Die",
      "genre": ["Aksi", "Petualangan", "Thriller"],
      "tahun": 2021,
      "durasi": "2 jam 43 menit",
      "gambar": "https://i.pinimg.com/564x/06/6f/6a/066f6ac7c266bc906ae1b748bec9a5e5.jpg",
      "deskripsi": "James Bond telah pensiun, tetapi harus kembali ke dunia mata-mata ketika seorang penjahat misterius muncul dengan teknologi berbahaya."
    },
    {
      "id": 11,
      "judul": "The Suicide Squad",
      "genre": ["Aksi", "Petualangan", "Komedi"],
      "tahun": 2021,
      "durasi": "2 jam 12 menit",
      "gambar": "https://i.pinimg.com/564x/b8/7d/9c/b87d9c4243b4b890bb9edd7136a94395.jpg",
      "deskripsi": "Sebuah tim penyelidik pemerintah menyewa sekelompok penjahat super untuk melaksanakan misi berisiko tinggi dan membuktikan bahwa tak seorang pun peduli jika mereka mati."
    },
    {
      "id": 12,
      "judul": "Black Widow",
      "genre": ["Aksi", "Petualangan", "Sains Fiksi"],
      "tahun": 2021,
      "durasi": "2 jam 14 menit",
      "gambar": "https://i.pinimg.com/564x/6b/3a/3d/6b3a3d98dd88514ddd2756a5784bda29.jpg",
      "deskripsi": "Natasha Romanoff, alias Black Widow, menghadapi masa lalunya yang kelam ketika dia terlibat dalam konspirasi berbahaya."
    },
    {
      "id": 13,
      "judul": "A Quiet Place Part II",
      "genre": ["Horror", "Drama", "Sains Fiksi"],
      "tahun": 2021,
      "durasi": "1 jam 37 menit",
      "gambar": "https://i.pinimg.com/564x/77/eb/d5/77ebd5670717d98e257368217e2ee9ae.jpg",
      "deskripsi": "Keluarga Abbott melanjutkan perjuangan mereka untuk bertahan hidup di dunia yang dikuasai oleh makhluk yang memburu dengan suara."
    },
    {
      "id": 14,
      "judul": "Jungle Cruise",
      "genre": ["Petualangan", "Komedi"],
      "tahun": 2021,
      "durasi": "2 jam 7 menit",
      "gambar": "https://i.pinimg.com/564x/91/26/b2/9126b24e0495236ebbf9daf44a937303.jpg",
      "deskripsi": "Seorang kapten perahu sungai dan seorang penjelajah bersama-sama melakukan perjalanan epik melalui hutan hujan Amazon untuk menemukan pohon kehidupan magis."
    },
    {
      "id": 15,
      "judul": "The Green Knight",
      "genre": ["Petualangan", "Fantasi", "Drama"],
      "tahun": 2021,
      "durasi": "2 jam 5 menit",
      "gambar": "https://i.pinimg.com/564x/0b/80/10/0b801092517297c25fec829e346c3a0d.jpg",
      "deskripsi": "Seorang ksatria muda menghadapi makhluk mistis yang memungkinkan dia untuk menguji keberanian dan kehormatannya."
    }
  ]
};

const films = data.films;
export default films;
