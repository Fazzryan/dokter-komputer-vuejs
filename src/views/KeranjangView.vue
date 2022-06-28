<template>
  <div class="keranjang">
    <NavbarView :updateKeranjang="keranjangs" />
    <section
      class="mb-5"
      style="background: #373f50; padding: 65px 0; margin-top: -50px"
    >
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
                    >Keranjang</router-link
                  >
                </li>
              </ol>
            </nav>
          </div>
          <div class="text-center text-lg-start order-lg-1">
            <h2 class="fw-bold text-light">
              Keranjang <span style="color: #fe696a">Saya</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <!-- jika keranjang kosong -->
          <div class="mb-4 text-center" v-if="keranjangs == 0">
            <img
              src="../assets/img/empty_cart.png"
              alt="gambar"
              class="mb-4 w-75 text-center shadow"
              style="border-radius: 20px"
            />
            <br />
            <h5 class="fw-bold">Opss! Keranjang kamu masih kosong</h5>
            <p style="font-size: 14px">
              Yuk, mulai belanja dan lengkapi kebutuhanmu di Dokter Komputer!
            </p>
            <router-link to="/produk" class="btn my-button-3">
              Belanja <i class="fa-solid fa-arrow-right"></i
            ></router-link>
          </div>

          <!-- jika ada item di keranjang -->
          <div
            class="rounded-3 bg-white d-lg-flex mt-2 mt-md-2 m-1 m-md-0"
            v-for="keranjang in keranjangs"
            :key="keranjang.id"
            style="box-shadow: 4px 10px 12px -8px rgba(174, 215, 225, 1)"
          >
            <div class="text-center">
              <img
                class="p-2"
                width="150"
                height="150"
                :src="'/img/' + keranjang.products.img"
                alt="Gambar Produk"
              />
            </div>
            <div class="card-body">
              <p class="card-title fw-bold">{{ keranjang.products.nama }}</p>
              <p class="d-block mb-1">
                Rp. {{ formatHarga(keranjang.products.harga) }}
              </p>
              <div class="d-flex align-items-center justify-content-between">
                <span class="card-text">Jumlah : {{ keranjang.qty }}</span>
                <div>
                  <button
                    class="btn text-white"
                    style="background-color: #fe696a"
                    @click="hapusKeranjang(keranjang.id)"
                  >
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-5 col-lg-4 mt-4 mt-md-2">
          <div class="p-4 card m-1 m-md-0">
            <p class="fw-bold">Ringkasan Belanja</p>
            <div class="d-flex justify-content-between">
              <small class="text-muted"
                >Total Harga ({{ keranjangs.length }} barang)</small
              >
              <span class="text-muted">Rp.{{ formatHarga(totalHarga) }}</span>
            </div>
            <hr />

            <div class="d-flex justify-content-between mt-4">
              <p class="fw-bold">Total Harga</p>
              <span class="fw-bold">Rp.{{ formatHarga(totalHarga) }}</span>
            </div>
            <form v-on:submit.prevent>
              <button class="btn my-button w-100" @click="checkout">
                <i class="fa-regular fa-credit-card"></i> Checkout
              </button>
              <div v-if="keranjangs != 0">
                <router-link
                  to="/produk"
                  class="btn w-100 py-2 mt-3 my-button-outline"
                >
                  <i class="fa-solid fa-arrow-left"></i>
                  Lanjutkan belanja
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <FooterView />
  </div>
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import FooterView from "@/components/FooterView.vue";
import axios from "axios";
export default {
  name: "KeranjangView",
  components: {
    NavbarView,
    FooterView,
  },
  data() {
    return {
      user: "",
      keranjangs: [],
    };
  },
  methods: {
    setKeranjang(data) {
      this.keranjangs = data;
    },
    hapusKeranjang(id) {
      axios
        .delete("https://my-json-server.typicode.com/Fazzryan/dokter-komputer-api/keranjang/" + id)
        .then(() => {
          this.$toast.success("Barang berhasil dihapus dari keranjang!", {
            type: "success",
            position: "top",
            duration: 3000,
            dismissible: true,
          });
          // update data keranjang
          axios
            .get("https://my-json-server.typicode.com/Fazzryan/dokter-komputer-api/keranjang?userId=" + this.user)
            .then((response) => this.setKeranjang(response.data))
            .catch((error) => console.log("ERROR", error));
        })
        .catch((error) => console.log("ERROR", error));
    },
    checkout() {
      if (this.keranjangs == 0) {
        this.$toast.warning("Keranjang kamu masih kosong!", {
          type: "warning",
          position: "top",
          duration: 3000,
          dismissible: true,
        });
      } else {
        this.$router.push({ path: "/checkout" });
      }
    },
    formatHarga(value) {
      let val = (value / 1).toFixed().replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
  computed: {
    totalHarga() {
      return this.keranjangs.reduce(function (items, data) {
        return items + data.products.harga * data.qty;
      }, 0);
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    this.user = JSON.parse(user).id;
    axios
      .get("https://my-json-server.typicode.com/Fazzryan/dokter-komputer-api/keranjang?userId=" + this.user)
      .then((response) => this.setKeranjang(response.data))
      .catch((error) => console.log("ERROR", error));
  },
};
</script>

<style scoped>
.row {
  margin-bottom: 150px;
}

@media (max-width: 576px) {
  .row {
    margin-bottom: 10px;
  }
}
</style>
