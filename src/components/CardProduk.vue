<template>
  <div class="card">
    <div class="position-absolute me-4 mt-2 top-0 end-0">
      <button class="btn btn-outline-danger">
        <i class="fa-solid fa-heart"></i>
      </button>
    </div>
    <router-link :to="'/detail-produk/' + product.id" class="mx-auto mt-5">
      <img class="card-img-top" src="../assets/logo.png" alt="" />
    </router-link>
    <div class="card-body">
      <small class="badge my-2" style="background-color: red">{{
        product.kategori
      }}</small>
      <h6>
        <router-link :to="'/detail-produk/' + product.id" class="link-name">
          {{ product.nama }}
        </router-link>
      </h6>
      <p class="fw-bold mt-2" style="color: #4e54c8">Rp. {{ product.harga }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CardProduk",
  // props: ["product"],
  data() {
    return {
      products: [],
      keranjang: {},
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
    tambahCart() {
      if (this.keranjang.qty) {
        this.keranjang.products = this.products;
        this.$router.push({ path: "/keranjang" });
        axios
          .post(" http://localhost:3000/keranjang", this.keranjang)
          .then(() => {
            this.$toast.success("Barang berhasil ditambahkan ke keranjang!", {
              type: "success",
              position: "top",
              duration: 3500,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/semua-produk/")
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log("ERROR", error));
  },
};
</script>

<style scoped>
span,
p {
  font-size: 14px;
}
.link-name {
  color: black;
  font-weight: 600;
  text-decoration: none;
  transition: 0.2s;
}
.link-name:hover {
  color: #fe696a;
}
</style>