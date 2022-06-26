<template>
  <div class="pengiriman">
    <NavbarView />
    <section
      class="mb-4 mb-md-1"
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
                    to="/keranjang"
                    class="text-decoration-none text-light"
                    >Keranjang</router-link
                  >
                </li>
                <li class="breadcrumb-item">
                  <router-link
                    to="/checkout"
                    class="text-decoration-none text-light"
                    >Checkout</router-link
                  >
                </li>
              </ol>
            </nav>
          </div>
          <div class="text-center text-lg-start order-lg-1">
            <h2 class="fw-bold text-light">
              Proses <span class="fs-3" style="color: #fe696a">Checkout</span>
            </h2>
          </div>
        </div>
      </div>
    </section>

    <div class="container mb-5 mb-md-3">
      <div class="row">
        <div class="col-12">
          <div class="progresses py-4">
            <ul class="d-flex align-items-center justify-content-between">
              <li id="step-1" class="orange"></li>
              <li id="step-2" class="orange"></li>
              <li id="step-3"></li>
            </ul>
            <div class="progress bg-white">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 50%; background-color: #fe696a"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-8 col-md-6">
          <div
            class="p-4 bg-white"
            style="
              box-shadow: 0 0 11px 0 rgba(174, 215, 225, 1);
              border-radius: 10px;
            "
          >
            <h4
              class="py-3 text-white rounded-3 text-center"
              style="background-color: #4e54c8"
            >
              Detail Pengiriman
            </h4>

            <div class="mt-4">
              <p class="fs-6 fw-bold">Alamat Pengiriman</p>
              <div class="mb-4" v-for="dataUser in dataForm" :key="dataUser.id">
                <span class="d-block">{{ dataUser.nama }}</span>
                <span class="d-block">{{ dataUser.alamat }}</span>
                <span class="d-block"
                  >{{ dataUser.kecamatan }}, {{ dataUser.kota }}</span
                >
                <span class="d-block"
                  >{{ dataUser.provinsi }} {{ dataUser.kodePos }}</span
                >
                <span class="d-block">{{ dataUser.negara }}</span>
                <span class="d-block"
                  ><b>No.Telp :</b> {{ dataUser.notelp }}</span
                >
              </div>
              <p class="fs-6 fw-bold">Pilih Jasa Pengiriman</p>
              <form v-on:submit.prevent>
                <ul class="list-group">
                  <li
                    class="list-group-item py-3 d-flex justify-content-between"
                  >
                    <label
                      ><input
                        class="form-check-input me-1"
                        type="radio"
                        name="pengiriman"
                        @click="setDataOngkir(0)"
                      />
                      In Stok Pick Up</label
                    >
                    <span class="fw-bold">Rp.0</span>
                  </li>
                  <li
                    class="list-group-item py-3 d-flex justify-content-between"
                  >
                    <label>
                      <input
                        class="form-check-input me-1"
                        type="radio"
                        name="pengiriman"
                        @click="setDataOngkir(0)"
                      />
                      Gojek (Pay On Delivery)
                    </label>
                    <span class="fw-bold">Rp.0</span>
                  </li>
                  <li
                    class="list-group-item py-3 d-flex justify-content-between"
                  >
                    <label>
                      <input
                        class="form-check-input me-1"
                        type="radio"
                        name="pengiriman"
                        @click="setDataOngkir(8000)"
                      />
                      <img src="../assets/img/jne.jpg" alt="jne" class="me-1" />
                      Layanan Reguler 2-3 hari
                    </label>
                    <span class="fw-bold">Rp.8000</span>
                  </li>
                </ul>
              </form>
              <form v-on:submit.prevent>
                <div class="col-12 mt-3 d-flex justify-content-between">
                  <button
                    type="button"
                    @click="hapusDataUser()"
                    class="btn w-auto me-2 me-lg-0 p-2 my-button-outline"
                    style="font-size: 15px"
                  >
                    <i class="fa-solid fa-arrow-left"></i>
                    Kembali ke checkout
                  </button>
                  <button
                    type="button"
                    class="btn w-auto me-s ms-lg-0 p-2 my-button"
                    style="font-size: 15px"
                    @click="checkout_pembayaran"
                  >
                    Lanjut ke pembayaran <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div
            class="p-4 bg-white"
            style="
              box-shadow: 0 0 11px 0 rgba(174, 215, 225, 1);
              border-radius: 10px;
            "
          >
            <h5 class="fw-bold text-center mb-4">Detail Pesanan</h5>
            <div v-for="keranjang in keranjangs" :key="keranjang.id">
              <div class="d-flex justify-content-between">
                <img
                  :src="'/img/' + keranjang.products.img"
                  alt="Gambar Produk"
                  class="w-25 h-25"
                />
                <p>{{ keranjang.products.nama }}</p>
                <p>Rp.{{ formatHarga(keranjang.products.harga) }}</p>
              </div>
              <hr />
            </div>
            <small>TAMBAHKAN KUPON DISKON</small>
            <form action="" v-on:submit.prevent class="d-lg-flex my-2">
              <input
                type="text"
                class="form-control border-dark me-2 w-100"
                placeholder="Diskon"
                autocomplete="off"
              />
              <button class="btn my-button w-100 mt-lg-0 mt-2">Tambah</button>
            </form>
            <hr />
            <div class="d-flex justify-content-between">
              <p class="fw-bold">Subtotal</p>
              <span class="fw-bold">Rp.{{ formatHarga(totalHarga) }}</span>
            </div>
            <div class="d-flex justify-content-between">
              <p class="fw-bold">Biaya Pengiriman</p>
              <span class="fw-bold" v-if="dataOngkir"
                >Rp.{{ formatHarga(dataOngkir.harga) }}</span
              >
            </div>
            <div class="d-flex justify-content-between">
              <p class="fw-bold">Pajak</p>
              <span class="fw-bold">Rp.0</span>
            </div>
            <hr />
            <div class="d-flex justify-content-between">
              <p class="fw-bold">Total</p>
              <span class="fw-bold" style="color: #fe696a"
                >Rp.{{ formatHarga(total) }}</span
              >
            </div>
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
  components: {
    NavbarView,
    FooterView,
  },
  name: "CheckoutPengiriman",
  data() {
    return {
      userId: "",
      keranjangs: [],
      dataForm: [],
      dataOngkir: {
        harga: 0,
      },
    };
  },
  methods: {
    setKeranjang(data) {
      this.keranjangs = data;
    },
    setDataForm(data) {
      this.dataForm = data;
    },
    setDataOngkir(data) {
      this.dataOngkir.harga = data;
    },
    checkout_pembayaran() {
      if (this.dataOngkir.harga) {
        axios
          .post("http://localhost:3000/data-ongkir", this.dataOngkir)
          .then(() => {
            this.$router.push({ path: "/checkout-pembayaran" });
          })
          .catch((error) => console.log("ERROR", error));
      } else {
        this.$toast.error("Pilih jasa pengiriman!", {
          type: "error",
          position: "top",
          duration: 3000,
          dismissible: true,
        });
      }
    },
    hapusDataUser() {
      axios
        .delete("http://localhost:3000/data-form/1")
        .then(() => {
          this.$router.push({ path: "/checkout" });
        })
        .catch((error) => console.log("ERROR", error));
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
    total() {
      return this.totalHarga + this.dataOngkir.harga;
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    this.userId = JSON.parse(user).id;
    axios
      .get("http://localhost:3000/keranjang?userId=" + this.userId)
      .then((response) => this.setKeranjang(response.data))
      .catch((error) => console.log("ERROR", error));
    axios
      .get("http://localhost:3000/data-form/")
      .then((response) => this.setDataForm(response.data))
      .catch((error) => console.log("ERROR", error));
  },
};
</script>

<style scoped>
label {
  cursor: pointer;
  font-size: 14px;
}
p,
span {
  font-size: 14px;
}
input {
  font-size: 14px;
}
@media (max-width: 576px) {
  .container {
    margin-top: -40px;
  }
}
</style>