export const changeRouteOne = (route, wait, props) => {
  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";

  //before pushing it will wait 600ms
  setTimeout(() => props.history.push(route), wait);
};

export const pageDataArr = [
  {
    introTitle: "INTRO",
    introHead:
      " Aplikasi bank sampah berbasis android adalah suatu aplikasi mobile android yang menjadi salah satu solusi masalah sampah yang ada di masyarakat",
    introDesc:
      " Aplikasi bank sampah berbasi android ini juga memiliki fitur jemput sampah yang ter intergrasi dengan google maps dan memungkinkan pengepul langsung menuju ke lokasi penjemputan limbah sampah dan dapat melakukan transaksi secara langsung dan penggunaannya dapat ditampilkan menggunakan smartphone android. Berdasarkan hasil implementasi, aplikasi bank sampah ini mudah digunakan sehingga tidak memerlukan waktu yang banyak untuk mempelajari fitur-fitur yang ada di aplikasi. Dengan adanya aplikasi bank sampah ini di harapkan masyarakat bisa dengan mudah untuk berpartisipasi secara langsung terhadap issu lingkungan dan bisa menjadikan aplikasi ini sebagai pemasukan tambahan secara ekonomi"
  },
  {
    introTitle: "ABOUT ME",
    introHead:
      "Dengan gerakan 3R. Kami mencoba membuat aplikasi yang akan meningkatkan antusiasme komunitas dalam mengelola sampah",
    introDesc:
      "Dalam aplikasi ini kami menerapkan poin ketika pengguna menjual limbah untuk aplikasi, limbah yang dapat dijual antara lain limbah: plastik/botol kaca,karton, besi. Poin dapat ditukar dengan E-money. Pengguna menjual sampah melalui aplikasi dengan mengambil foto dan melaporkan secara otomatis atau manual memasukkan karton dan limbah besi. Setelah itu sampah akan di jemput oleh kurir sesuai lokasi pengguna,kemudian limbah dikirim ke produsen untuk didaur ulang"
  },
  {
    introTitle: "DESIGN",
    introHead:
      "Your team designs a Display that not only complements the functional value but also people love.",
    introDesc:
      "Here the results of the ui/ux display that our group made and we use the figma tool so that it produces what we expect so that the target user likes the appearance. "
  },
  {
    introTitle: "DEVELOP",
    introHead:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    introDesc:
      " The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. "
  }
];
