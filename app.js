const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "Pelajaran Hidup",
      author: "Usman",
      age: "30",
      x: 0,
      y: 0,
      books: [
        { title: "Name of the wind", author: "Patrick Rothfuss", img: "assets/1.jpg", isFav: true },
        { title: "The way of Kings", author: "Brandon Sanderson", img: "assets/2.jpg", isFav: false },
        { title: "The final Empire", author: "Patrick Rothfuss", img: "assets/3.jpg", isFav: true },
      ],
    };
  },
  methods: {
    ubahTitle() {
      this.title = "Test 2";
    },
    toggleBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
