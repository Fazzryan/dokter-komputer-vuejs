<template>
  <div class="akun">
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
                <li class="breadcrumb-item text-light" aria-current="page">
                  Akun
                </li>
              </ol>
            </nav>
          </div>
          <div class="text-center text-lg-start order-lg-1">
            <h2 class="fw-bold text-light">
              Akun <span style="color: #fe696a">Saya</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div
        class="container py-3 bg-white"
        style="
          box-shadow: 0px 11px 28px -7px rgba(174, 215, 225, 1);
          border-radius: 10px;
          margin-top: -30px;
        "
      >
        <div class="row">
          <div class="col-10">
            <h5 class="border-bottom pb-2">Info Akun</h5>
            <div class="">
              <div class="d-flex justify-content-between ingfo my-1">
                <span class="fw-bold">Nama Lengkap :</span>
                <span>{{ namaD }} {{ namaB }}</span>
              </div>
              <div class="d-flex justify-content-between ingfo my-1">
                <span class="fw-bold">Email :</span>
                <span>{{ email }}</span>
              </div>
              <div class="d-flex justify-content-between ingfo my-1">
                <span class="fw-bold">Password :</span>
                <span>{{ password }}</span>
              </div>
              <div class="d-flex justify-content-between ingfo my-1">
                <span class="fw-bold">Telepon :</span>
                <span>{{ telepon }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="pesanan < 1">
      <div
        class="container py-2 mt-3 bg-white"
        style="
          box-shadow: 0px 11px 28px -7px rgba(174, 215, 225, 1);
          border-radius: 10px;
          margin-top: -30px;
        "
      >
        <div class="row">
          <div class="col-12 text-center py-2">
            <h5 class="">Tidak ada Riwayat Transaksi.</h5>
            <router-link to="/produk" class="btn my-button-outline px-4">
              <i class="fa-solid fa-arrow-left"></i> Belanja
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div
        class="container py-3 mt-3 bg-white"
        style="
          box-shadow: 0px 11px 28px -7px rgba(174, 215, 225, 1);
          border-radius: 10px;
          margin-top: -30px;
        "
      >
        <div class="row">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Id Pesanan</th>
                    <th scope="col">Tanggal</th>
                    <th scope="col">Jumlah Item</th>
                    <th scope="col">Total Harga</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="order in pesanan" :key="order.id">
                    <th scope="row">{{ order.id }}</th>
                    <td>{{ order.tanggal }}</td>
                    <td>{{ order.keranjang.length }}</td>
                    <td>Rp. {{ formatHarga(order.totHarga) }}</td>
                    <td>
                      <span class="badge bg-success py-2">{{
                        order.status
                      }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-5">
      <div
        class="container py-2 bg-white"
        style="
          box-shadow: 0px 11px 28px -7px rgba(174, 215, 225, 1);
          border-radius: 10px;
          margin-top: -30px;
        "
      >
        <div class="row">
          <div class="col-12 py-3">
            <h5>Detail Akun Pembelian</h5>
            <div class="table-responsive">
              <table class="table" v-for="order in pesanan" :key="order.id">
                <tbody v-for="data in order.dataForm" :key="data.id">
                  <tr>
                    <td width="20%">Id Pesanan :</td>
                    <td>{{ order.id }}</td>
                  </tr>
                  <tr>
                    <td>Nama :</td>
                    <td>
                      {{ data.nama }}
                    </td>
                  </tr>
                  <tr>
                    <td>Email :</td>
                    <td>{{ data.email }}</td>
                  </tr>
                  <tr>
                    <td>Kecamatan :</td>
                    <td>{{ data.kecamatan }}</td>
                  </tr>
                  <tr>
                    <td>Kota :</td>
                    <td>{{ data.kota }}</td>
                  </tr>
                  <tr>
                    <td>Provinsi :</td>
                    <td>{{ data.provinsi }}, {{ data.negara }}</td>
                  </tr>
                  <tr>
                    <td>Kode Pos :</td>
                    <td>{{ data.kodePos }}</td>
                  </tr>
                  <tr class="border-bottom border-danger">
                    <td>Telepon :</td>
                    <td>{{ data.notelp }}</td>
                  </tr>
                </tbody>
              </table>
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
  name: "AkunSaya",
  components: {
    NavbarView,
    FooterView,
  },
  data() {
    return {
      user: "",
      namaD: "",
      namaB: "",
      email: "",
      password: "",
      telepon: "",
      pesanan: [],
    };
  },
  methods: {
    setPesanan(data) {
      this.pesanan = data;
    },
    formatHarga(value) {
      let val = (value / 1).toFixed().replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    this.namaD = JSON.parse(user).namaD;
    this.namaB = JSON.parse(user).namaB;
    this.email = JSON.parse(user).email;
    this.password = JSON.parse(user).password;
    this.telepon = JSON.parse(user).telepon;
    this.user = JSON.parse(user).id;

    axios
      .get("http://localhost:3000/orderan?userId=" + this.user)
      .then((response) => {
        this.setPesanan(response.data);
      })
      .catch((error) => console.log("Error", error));
  },
};
</script>

<style scoped>
.ingfo {
  width: 35%;
}
@media (max-width: 768px) {
  .ingfo {
    width: 50%;
  }
}
@media (max-width: 576px) {
  .ingfo {
    width: 100%;
  }
}
</style>