<template>
  <div class="detail-produk-all">
    <NavbarView />
    <section style="background: #373f50; padding: 65px 0; margin-top: -50px">
      <div class="container">
        <div
          class="
            d-lg-flex
            flex-nowrap
            align-items-center
            justify-content-between
          "
        >
          <div class="text-center text-lg-start order-lg-2">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item">
                  <router-link to="/" class="text-decoration-none text-light"
                    ><i class="fa-solid fa-house"></i> Home</router-link
                  >
                </li>
                <li class="breadcrumb-item">
                  <router-link
                    to="/produk"
                    class="text-decoration-none text-light"
                    >Produk</router-link
                  >
                </li>
                <li class="breadcrumb-item text-light" aria-current="page">
                  <span>{{ products.nama }}</span>
                </li>
              </ol>
            </nav>
          </div>
          <div class="text-center text-lg-start order-lg-1">
            <h2 class="fw-bold text-light">
              Detail <span style="color: #fe696a">Produk</span>
            </h2>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div
        class="container py-5 bg-white"
        style="
          box-shadow: 0px 11px 28px -7px rgba(174, 215, 225, 1);
          border-radius: 10px;
          margin-top: -30px;
        "
      >
        <div class="row">
          <div class="col-md-6 text-center">
            <img
              class="p-2 mx-auto"
              :src="'/img/' + products.img"
              width="50%"
              alt=""
            />
          </div>
          <!-- px-4 px-md-1 -->
          <div class="col-md-6 mt-5 mt-md-0">
            <span class="badge bg-danger">{{ products.kategori }}</span>
            <h4 class="fw-bold mt-2">{{ products.nama }}</h4>
            <p style="color: #4e54c8">Rp. {{ products.harga }}</p>
            <small for="qty">Jumlah item</small>
            <form class="mt-2 d-flex" v-on:submit.prevent>
              <input
                v-model="keranjang.qty"
                type="number"
                class="form-control border-dark text-center w-25"
                value="1"
                min="1"
                max="100"
                id="jumlahItem"
                required
                autocomplete="off"
              />
              <button class="btn my-button ms-2" @click="tambahCart">
                <i class="fa-solid fa-cart-shopping"></i> Keranjang
              </button>
            </form>
            <div class="mt-5">
              <div class="d-block d-md-flex">
                <div class="me-3">
                  <span><i class="fa-solid fa-truck-fast"></i></span>
                </div>
                <div style="font-size: 14px">
                  <span class="mb-1">Gratis Ongkir</span>
                  <p class="text-muted">
                    Gratis ongkir dengan min. belanja Rp 1.500.000
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-2">
              <div class="d-block d-md-flex">
                <div class="me-3">
                  <span><i class="fa-solid fa-shield-halved"></i></span>
                </div>
                <div style="font-size: 14px">
                  <span class="mb-1">Proteksi Kerusakan Produk</span>
                  <p class="text-muted">
                    Jaminan produk diterima dalam keadaan baik
                  </p>
                </div>
              </div>
            </div>
            <p class="fw-bold mt-4">Deskripsi</p>
            <p>{{ products.deskripsi }}</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div
        class="container bg-white my-3"
        style="
          box-shadow: 0px 11px 28px -7px rgba(174, 215, 225, 1);
          border-radius: 10px;
          margin-top: -30px;
        "
      >
        <div class="row">
          <div class="col-md-8">
            <div class="text-center text-md-start p-3">
              <h4>Ulasan Pembeli</h4>
              <hr />
              <div class="my-4 text-start">
                <div v-if="komentars == 0">
                  <p class="text-center">Belum ada ulasan</p>
                </div>
                <div v-for="komentar in komentars" :key="komentar.id">
                  <h6 class="fw-bold d-inline" style="color: #4e54c8">
                    {{ komentar.nama }} -
                  </h6>
                  <span class="text-muted"> {{ komentar.rating }}. </span>
                  <div class="text-muted mt-1" style="font-size: 13px">
                    {{ komentar.tanggal }}
                  </div>
                  <p class="border-bottom pb-2 mt-2" style="font-size: 15px">
                    {{ komentar.pesan }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 bg-light" style="border-radius: 10px">
            <div class="card-body">
              <h4 class="card-title">Tulis Ulasan</h4>
              <div class="mt-3 mb-3">
                <label for="nama" class="form-label">Nama</label>
                <input
                  v-model="nama"
                  type="text"
                  class="form-control"
                  id="nama"
                  autocomplete="off"
                />
              </div>
              <div class="mt-3 mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  v-model="email"
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  autocomplete="off"
                />
              </div>
              <div class="mt-3 mb-3">
                <label for="email" class="form-label">Rating</label>
                <select v-model="rating" class="form-select">
                  <option value="Tidak Puas">Tidak Puas</option>
                  <option value="Cukup Puas">Cukup Puas</option>
                  <option value="Puas">Puas</option>
                  <option value="Sangat Puas">Sangat Puas</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="pesan" class="form-label">Pesan</label>
                <textarea
                  v-model="pesan"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  autocomplete="off"
                ></textarea>
                <small class="text-danger" style="font-size: 12px"
                  >*Mohon isi pesan disesuaikan dengan rating anda</small
                >
              </div>
              <button
                @click="tambahKomentar"
                type="button"
                class="btn my-button w-100"
              >
                Kirim Ulasan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterView />
  </div>
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import FooterView from "@/components/FooterView.vue";
import axios from "axios";

export default {
  name: "DetailProduk",
  components: {
    NavbarView,
    FooterView,
  },
  data() {
    return {
      userId: "",
      user: "",
      nama: "",
      email: "",
      rating: "",
      pesan: "",
      idProduk: "",
      products: [],
      keranjang: {},
      komentars: [],
    };
  },
  methods: {
    currentDateTime() {
      const current = new Date();
      const date =
        current.getFullYear() +
        "-" +
        (current.getMonth() + 1) +
        "-" +
        current.getDate();
      const time =
        current.getHours() +
        ":" +
        current.getMinutes() +
        ":" +
        current.getSeconds();
      const dateTime = date + " " + time;

      return dateTime;
    },
    setProduct(data) {
      this.products = data;
    },
    setKomentar(data) {
      this.komentars = data;
    },
    tambahCart() {
      if (this.user) {
        if (this.keranjang.qty) {
          this.keranjang.products = this.products;
          this.keranjang.userId = this.userId;
          axios
            .post(" http://localhost:3000/keranjang", this.keranjang)
            .then(() => {
              this.$router.push({ path: "/keranjang" });
              this.$toast.success("Barang berhasil ditambahkan ke keranjang!", {
                type: "success",
                position: "top",
                duration: 3500,
                dismissible: true,
              });

              // window.location.reload();
              //mereset inputan
              let jumlahItem = document.getElementById("jumlahItem");
              jumlahItem.value = "";
            })
            .catch((err) => console.log(err));
        } else {
          this.$toast.warning("Masukan jumlah barang terlebih dahulu!", {
            type: "warning",
            position: "top",
            duration: 3500,
            dismissible: true,
          });
        }
      } else {
        this.$toast.warning("Anda harus login terlebih dahulu!", {
          type: "warning",
          position: "top",
          duration: 3500,
          dismissible: true,
        });
      }
    },
    async tambahKomentar() {
      if (this.user && this.nama && this.email && this.pesan) {
        if (this.user) {
          let komentar = await axios.post("http://localhost:3000/komentar", {
            idProduct: this.products.id,
            nama: this.nama,
            email: this.email,
            rating: this.rating,
            pesan: this.pesan,
            tanggal: this.currentDateTime(),
          });
          window.location.reload();
          return komentar;
        } else {
          this.$router.push({ path: "/login" });
          this.$toast.warning("Anda harus login terlebih dahulu!", {
            type: "warning",
            position: "top",
            duration: 3500,
            dismissible: true,
          });
        }
      } else {
        this.$toast.warning("Lengkapi form ulasan!", {
          type: "warning",
          position: "top",
          duration: 3500,
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.user = user;
      this.userId = JSON.parse(user).id;
    }
    axios
      .get("http://localhost:3000/produk/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log("ERROR", error));
    axios
      .get("http://localhost:3000/komentar?idProduct=" + this.$route.params.id)
      .then((response) => this.setKomentar(response.data))
      .catch((error) => console.log("ERROR", error));
  },
};
</script>

<style scoped>
button {
  width: 50%;
}
@media (max-width: 576px) {
  button {
    width: 100%;
  }
}
</style>