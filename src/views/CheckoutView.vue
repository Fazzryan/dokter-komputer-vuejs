<template>
  <div class="checkout">
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
                  <router-link to="" class="text-decoration-none text-light"
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
              <li id="step-2"></li>
              <li id="step-3"></li>
            </ul>
            <div class="progress bg-white">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 0"
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
              Informasi Pelanggan
            </h4>
            <form v-on:submit.prevent class="row g-3 mt-2">
              <div class="col-12">
                <p class="fs-6 fw-bold">Alamat email anda</p>
                <div class="form-floating">
                  <input
                    autocomplete="off"
                    v-model="dataForm.email"
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Alamat email"
                  />
                  <label for="email">Alamat email</label>
                </div>
              </div>
              <span>
                Sudah mempunyai akun di website kami?
                <router-link to="/login" class="text-decoration-none"
                  >Log in</router-link
                >
              </span>

              <div class="col-12">
                <p class="fs-6 fw-bold">Alamat pengiriman</p>
                <select
                  class="form-select py-3"
                  aria-label="Default select example"
                  id="negara"
                  autocomplete="off"
                  v-model="dataForm.negara"
                >
                  <option :value="Negara" selected>Negara</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Australia">Australia</option>
                  <option value="">---</option>
                </select>
              </div>
              <div class="col-12">
                <div class="form-floating">
                  <input
                    autocomplete="off"
                    v-model="dataForm.nama"
                    type="text"
                    class="form-control"
                    id="namaLengkap"
                    placeholder="Nama Lengkap"
                  />
                  <label for="Nama Lengkap">Nama Lengkap</label>
                </div>
              </div>

              <div class="col-12">
                <div class="form-floating">
                  <input
                    autocomplete="off"
                    v-model="dataForm.alamat"
                    type="text"
                    class="form-control"
                    id="Alamat"
                    placeholder="Alamat"
                  />
                  <label for="alamat">Alamat</label>
                </div>
              </div>
              <div class="col-6">
                <div class="form-floating">
                  <input
                    autocomplete="off"
                    v-model="dataForm.kecamatan"
                    type="text"
                    class="form-control"
                    id="kecamatan"
                    placeholder="Kecamatan"
                  />
                  <label for="kecamatan">Kecamatan</label>
                </div>
              </div>
              <div class="col-6">
                <div class="form-floating">
                  <input
                    autocomplete="off"
                    v-model="dataForm.kota"
                    type="text"
                    class="form-control"
                    id="kota"
                    placeholder="Kota"
                  />
                  <label for="kota">Kota</label>
                </div>
              </div>
              <div class="col-md-6">
                <select
                  class="form-select py-3"
                  aria-label="Default select example"
                  id="provinsi"
                  v-model="dataForm.provinsi"
                >
                  <option :value="Provinsi">Provinsi</option>
                  <option value="Aceh">Aceh</option>
                  <option value="Bali">Bali</option>
                  <option value="Bangka-Belitung">Bangka-Belitung</option>
                  <option value="Banten">Banten</option>
                  <option value="">Bengkulu</option>
                  <option value="">Gorontalo</option>
                  <option value="">Jakarta</option>
                  <option value="">Jawa Barat</option>
                  <option value="">Jawa Tengah</option>
                  <option value="">Jawa Timur</option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    autocomplete="off"
                    v-model="dataForm.kodePos"
                    type="text"
                    class="form-control"
                    id="kodePos"
                    placeholder="Kode pos"
                  />
                  <label for="kode pos">Kode pos</label>
                </div>
              </div>
              <div class="col-12">
                <div class="form-floating">
                  <input
                    autocomplete="off"
                    v-model="dataForm.notelp"
                    type="text"
                    class="form-control"
                    id="notelp"
                    placeholder="Nomor Telepon"
                  />
                  <label for="nomor telp">Nomor Telepon</label>
                </div>
              </div>
              <div class="col-12 d-flex justify-content-between">
                <router-link
                  to="/keranjang"
                  class="btn w-auto me-2 me-lg-0 p-2 my-button-outline"
                  style="font-size: 15px"
                >
                  <i class="fa-solid fa-arrow-left"></i>
                  Kembali ke keranjang
                </router-link>
                <button
                  type="submit"
                  class="btn w-auto me-s ms-lg-0 p-2 my-button"
                  style="font-size: 15px"
                  @click="tambahDataForm"
                >
                  Lanjut ke pengiriman <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </form>
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
            <form v-on:submit.prevent class="d-lg-flex my-2">
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
              <span class="fw-bold">Rp.0</span>
            </div>
            <div class="d-flex justify-content-between">
              <p class="fw-bold">Pajak</p>
              <span class="fw-bold">Rp.0</span>
            </div>
            <hr />
            <div class="d-flex justify-content-between">
              <p class="fw-bold">Total</p>
              <span class="fw-bold" style="color: #fe696a"
                >Rp.{{ formatHarga(totalHarga) }}</span
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
  name: "CheckoutView",
  data() {
    return {
      keranjangs: [],
      dataForm: {},
    };
  },
  methods: {
    setKeranjang(data) {
      this.keranjangs = data;
    },
    tambahDataForm() {
      if (
        this.dataForm.email &&
        this.dataForm.nama &&
        this.dataForm.negara &&
        this.dataForm.alamat &&
        this.dataForm.kecamatan &&
        this.dataForm.kota &&
        this.dataForm.kodePos &&
        this.dataForm.provinsi &&
        this.dataForm.notelp
      ) {
        axios
          .post("http://localhost:3000/data-form", this.dataForm)
          .then(() => {
            this.$router.push({ path: "/checkout-pengiriman" });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("Lengkapi form terlebih dahulu!", {
          type: "error",
          position: "top",
          duration: 3500,
          dismissible: true,
        });
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
    axios
      .get("http://localhost:3000/keranjang/")
      .then((response) => this.setKeranjang(response.data))
      .catch((error) => console.log("ERROR", error));
  },
};
</script>
<style scoped>
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