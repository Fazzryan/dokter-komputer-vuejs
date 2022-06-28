<template>
  <div class="pesanan-saya">
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
                  <router-link
                    to="/akun"
                    class="text-decoration-none text-light"
                    >Akun</router-link
                  >
                </li>
                <li class="breadcrumb-item text-light" aria-current="page">
                  <span class="text-light">Detail Pesanan</span>
                </li>
              </ol>
            </nav>
          </div>
          <div class="text-center text-lg-start order-lg-1">
            <h2 class="fw-bold text-light">
              Detail <span style="color: #fe696a">Pesanan</span>
            </h2>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div
        class="container bg-white py-3"
        style="
          box-shadow: 0px 11px 28px -7px rgba(174, 215, 225, 1);
          border-radius: 10px;
          margin-top: -30px;
        "
      >
        <div class="row">
          <div class="col-md-12">
            <h6 class="pb-2 ms-2 text-muted">
              <i class="fa-solid fa-file-circle-exclamation"></i> Detail Pesanan
            </h6>
            <div v-for="data in pesanan" :key="data.id">
              <div v-for="item in data.keranjang" :key="item.id">
                <div class="table-responsive">
                  <table class="table border mt-md-2">
                    <tbody>
                      <tr>
                        <th>Produk</th>
                        <th>Harga</th>
                        <th>Jumlah</th>
                        <th>Total</th>
                      </tr>
                      <tr>
                        <td>{{ item.products.nama }}</td>
                        <td>Rp. {{ formatHarga(item.products.harga) }}</td>
                        <td>{{ data.keranjang.length }}</td>
                        <td>Rp. {{ formatHarga(data.totHarga) }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div class="ms-2 mt-3" style="font-size: 14px">
              <h6 class="text-muted">
                <i class="fa-solid fa-location-dot"></i> Alamat Tagihan
              </h6>
              <div class="mb-4" v-for="data in pesanan" :key="data.id">
                <div v-for="dataUser in data.dataForm" :key="dataUser.id">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-3">
        <div class="row">
          <div class="text-start">
            <router-link class="btn my-button-3" to="/akun">
              <i class="fa-solid fa-arrow-left"></i> Kembali
            </router-link>
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
  name: "PesananSaya",
  components: {
    NavbarView,
    FooterView,
  },
  data() {
    return {
      userId: "",
      pesanan: [],
    };
  },
  methods: {
    setPesanan(pesanan) {
      this.pesanan = pesanan;
    },
    formatHarga(value) {
      let val = (value / 1).toFixed().replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/orderan?id=" + this.$route.params.id)
      .then((response) => {
        this.setPesanan(response.data);
      })
      .catch((error) => console.log("error", error));
  },
};
</script>

<style scoped>
table,
p {
  font-size: 14px;
}
</style>