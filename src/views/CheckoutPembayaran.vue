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
              <li id="step-3" class="orange"></li>
            </ul>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 100%; background-color: #fe696a"
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
              class="py-3 text-white rounded-top text-center"
              style="background-color: #4e54c8"
            >
              Metode Pembayaran
            </h4>
            <div class="row my-2">
              <div class="col-md-6 my-2 col-lg-4 text-center">
                <div
                  class="border rounded-3 payment-method p-2"
                  @click="isi_pembayaran('BRI Virtual Account')"
                >
                  <img
                    src="../assets/img/BRIVA.svg"
                    alt="bri"
                    height="36"
                    class="w-50 mb-2 mx-auto d-block"
                  />
                  <span>BRI Virtual Account</span>
                </div>
              </div>
              <div class="col-md-6 my-2 col-lg-4 text-center">
                <div
                  class="border rounded-3 payment-method p-2"
                  @click="isi_pembayaran('BCA Virtual Account')"
                >
                  <img
                    src="../assets/img/bca.png"
                    alt="bri"
                    class="w-50 h-50 mb-2 mx-auto d-block"
                  />
                  <span>BCA Virtual Account</span>
                </div>
              </div>
              <div class="col-md-6 my-2 col-lg-4 text-center">
                <div
                  class="border rounded-3 payment-method p-2"
                  @click="isi_pembayaran('BNI Virtual Account')"
                >
                  <img
                    src="../assets/img/bni.png"
                    alt="bri"
                    class="w-50 h-50 mb-2 mx-auto d-block"
                  />
                  <span>BNI Virtual Account</span>
                </div>
              </div>
              <div class="col-md-6 my-2 col-lg-4 text-center">
                <div
                  class="border rounded-3 payment-method p-2"
                  @click="isi_pembayaran('Mandiri Virtual Account')"
                >
                  <img
                    src="../assets/img/MandiriVA.svg"
                    alt="bri"
                    class="w-50 h-50 mb-2 mx-auto d-block"
                  />
                  <span>Mandiri Virtual Account</span>
                </div>
              </div>
              <div class="col-md-6 my-2 col-lg-4 text-center">
                <div
                  class="border rounded-3 payment-method p-2"
                  @click="isi_pembayaran('Alfamart Group')"
                >
                  <img
                    src="../assets/img/Alfamart.svg"
                    alt="bri"
                    class="w-50 h-50 mb-2 mx-auto d-block"
                  />
                  <span>Alfamart Group</span>
                </div>
              </div>
              <div class="col-md-6 my-2 col-lg-4 text-center">
                <div
                  class="border rounded-3 payment-method p-2"
                  @click="isi_pembayaran('Indomaret')"
                >
                  <img
                    src="../assets/img/Indomaret.svg"
                    alt="bri"
                    class="w-50 h-50 mb-2 mx-auto d-block"
                  />
                  <span>Indomaret</span>
                </div>
              </div>
              <div class="col-md-6 my-2 col-lg-4 text-center">
                <div
                  class="border rounded-3 payment-method p-2"
                  @click="isi_pembayaran('GoPay')"
                >
                  <img
                    src="../assets/img/GoPay.svg"
                    alt="bri"
                    class="w-50 h-50 mb-2 mx-auto d-block"
                  />
                  <span>Gopay</span>
                </div>
              </div>
              <div class="col-md-6 my-2 col-lg-4 text-center">
                <div
                  class="border rounded-3 payment-method p-2"
                  @click="isi_pembayaran('Ovo')"
                >
                  <img
                    src="../assets/img/Ovo.svg"
                    alt="bri"
                    class="w-50 h-50 mb-2 mx-auto d-block"
                  />
                  <span>Ovo</span>
                </div>
              </div>
              <div class="col-md-6 my-2 col-lg-4 text-center">
                <div
                  class="border rounded-3 payment-method p-2"
                  @click="isi_pembayaran('Dana')"
                >
                  <img
                    src="../assets/img/DANA.svg"
                    alt="bri"
                    class="w-50 h-50 mb-2 mx-auto d-block"
                  />
                  <span>Dana</span>
                </div>
              </div>
            </div>

            <form v-on:submit.prevent>
              <div class="col-12 d-flex justify-content-between">
                <button
                  type="submit"
                  class="btn w-auto me-2 me-lg-0 p-2 my-button-outline"
                  style="font-size: 15px"
                  @click="hapusDataOngkir()"
                >
                  <i class="fa-solid fa-arrow-left"></i>
                  Kembali ke pengiriman
                </button>
                <button
                  type="button"
                  class="btn my-button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Proses Pesanan <i class="fa-solid fa-arrow-right"></i>
                </button>

                <!-- Modal -->
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div
                    class="
                      modal-dialog modal-dialog-centered modal-dialog-scrollable
                    "
                  >
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Pesanan Anda
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <div class="container-fluid">
                          <div
                            v-for="keranjang in keranjangs"
                            :key="keranjang.id"
                          >
                            <div class="d-flex justify-content-between">
                              <img
                                :src="'/img/' + keranjang.products.img"
                                alt="Gambar Produk"
                                class="w-25 h-25"
                              />
                              <p>{{ keranjang.products.nama }}</p>
                              <p>
                                Rp.{{ formatHarga(keranjang.products.harga) }}
                              </p>
                            </div>
                            <hr />
                          </div>

                          <div class="row">
                            <div class="col-md-7">
                              <div
                                v-for="dataUser in dataForm"
                                :key="dataUser.id"
                              >
                                <p class="fw-bold">Dikirim ke:</p>
                                <span class="">{{ dataUser.alamat }}</span>
                                <span class="d-block"
                                  >{{ dataUser.kecamatan }},
                                  {{ dataUser.kota }}</span
                                >
                                <span class="d-block"
                                  >{{ dataUser.provinsi }}
                                  {{ dataUser.kodePos }}</span
                                >
                                <span class="d-block">{{
                                  dataUser.negara
                                }}</span>
                                <span class="d-block">{{ dataUser.nama }}</span>
                                <span class="d-block"
                                  ><b>No.Telp :</b> {{ dataUser.notelp }}</span
                                >
                              </div>
                            </div>
                            <div class="col-md-5 mt-4 mt-md-0">
                              <p class="fw-bold">Metode Pembayaran</p>
                              <p>{{ metode_pembayaran }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn my-button-outline"
                          data-bs-dismiss="modal"
                          style="padding: 7px"
                        >
                          Batal
                        </button>
                        <button
                          data-bs-dismiss="modal"
                          type="button"
                          class="btn my-button"
                          @click="order"
                        >
                          Pesan Sekarang
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
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
              <span
                class="fw-bold"
                v-for="ongkir in dataOngkir"
                :key="ongkir.id"
                >Rp.{{ formatHarga(ongkir.harga) }}</span
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
                >Rp.{{ formatHarga(total2) }}</span
              >
            </div>
            <div class="d-flex justify-content-between mt-2">
              <p class="fw-bold">Metode Pembayaran</p>
              <span class="fw-bold">{{ metode_pembayaran }}</span>
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
      dataOngkir: [],
      metode_pembayaran: "BRI Virtual Account",
      dataForm: [],
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
    setKeranjang(data) {
      this.keranjangs = data;
    },
    setDataOngkir(data) {
      this.dataOngkir = data;
    },
    setDataForm(data) {
      this.dataForm = data;
    },
    isi_pembayaran(data) {
      this.metode_pembayaran = data;
    },
    hapusDataOngkir() {
      axios
        .delete("http://localhost:3000/data-ongkir/1")
        .then(() => {
          this.$router.push({ path: "/checkout-pengiriman" });
        })
        .catch((error) => console.log("ERROR", error));
    },
    hapusDataUser() {
      axios
        .delete("http://localhost:3000/data-form/1")
        .then(() => {})
        .catch((error) => console.log("ERROR", error));
    },
    formatHarga(value) {
      let val = (value / 1).toFixed().replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    order() {
      axios
        .post("http://localhost:3000/orderan", {
          keranjang: this.keranjangs,
          dataForm: this.dataForm,
          tanggal: this.currentDateTime(),
          totHarga: this.total2,
          status: "Processing",
          userId: this.userId,
        })
        .then(() => {
          axios
            .delete("http://localhost:3000/data-ongkir/1")
            .then(() => {})
            .catch((error) => console.log("ERROR", error));
          this.hapusDataUser();
          this.$router.push({ path: "/checkout-sukses" });
        })
        .catch((error) => console.log("error", error));
    },
  },
  computed: {
    totalHarga() {
      return this.keranjangs.reduce(function (items, data) {
        return items + data.products.harga * data.qty;
      }, 0);
    },
    total() {
      return this.dataOngkir.reduce(function (items, data) {
        return items + data.harga;
      }, 0);
    },
    total2() {
      return this.totalHarga + this.total;
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
      .get("http://localhost:3000/data-ongkir/")
      .then((response) => this.setDataOngkir(response.data))
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
.payment-method:hover {
  background-color: #c3c6ff;
  cursor: pointer;
}
@media (max-width: 576px) {
  .container {
    margin-top: -40px;
  }
}
</style>