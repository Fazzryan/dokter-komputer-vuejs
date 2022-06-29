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
          <div class="col-md-6">
            <h6 class="pb-2 ms-2 text-muted">
              <i class="fa-solid fa-user"></i> {{ namaD }} {{ namaB }}
            </h6>
            <div class="table-responsive-sm">
              <table class="table border">
                <tbody>
                  <tr>
                    <td>Nama Lengkap</td>
                    <td>{{ namaD }} {{ namaB }}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{{ email }}</td>
                  </tr>
                  <tr>
                    <td>Telepon</td>
                    <td>{{ telepon }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="col-md-6 mt-4 mt-md-0">
            <h6 class="pb-2 ms-2 text-muted">
              <i class="fa-solid fa-file-circle-exclamation"></i> Riwayat
              Pembelian
            </h6>
            <div class="table-responsive" v-if="pesanan != 0">
              <table class="table border">
                <tbody>
                  <tr>
                    <th>Id Pesanan</th>
                    <th>Tanggal</th>
                    <th>Jml Item</th>
                    <th>Total Harga</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                  <tr v-for="order in pesanan" :key="order.id">
                    <td class="fw-bold">#{{ order.id }}</td>
                    <td>{{ order.tanggal }}</td>
                    <td>{{ order.keranjang.length }}</td>
                    <td>Rp. {{ formatHarga(order.totHarga) }}</td>
                    <td>
                      <span class="badge bg-success py-2">{{
                        order.status
                      }}</span>
                    </td>
                    <td>
                      <router-link
                        class="my-button-outline"
                        :to="'/akun/pesanan/' + order.id"
                      >
                        <i class="fa-solid fa-eye"></i> View
                      </router-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="text-center" v-if="pesanan < 1">
              <h5 class="ms-2 fw-bold">Kamu belum pernah bertransaksi</h5>
              <p>
                Yuk, mulai belanja dan lengkapi kebutuhanmu di Dokter Komputer!
              </p>
              <router-link to="/produk" class="btn my-button px-4">
                Belanja
              </router-link>
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
          <h6 class="ms-2 my-3">Detail Akun Pembelian</h6>
          <div
            class="col-md-6 col-lg-4"
            v-for="order in pesanan"
            :key="order.id"
          >
            <div class="table-responsive-sm">
              <table
                class="table border"
                v-for="data in order.dataForm"
                :key="data.id"
              >
                <tbody>
                  <tr>
                    <td class="fw-bold">Id Pesanan :</td>
                    <td class="fw-bold">#{{ order.id }}</td>
                  </tr>
                  <tr>
                    <td>Nama</td>
                    <td>
                      {{ data.nama }}
                    </td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{{ data.email }}</td>
                  </tr>
                  <tr>
                    <td>Kecamatan</td>
                    <td>{{ data.kecamatan }}</td>
                  </tr>
                  <tr>
                    <td>Kota</td>
                    <td>{{ data.kota }}</td>
                  </tr>
                  <tr>
                    <td>Provinsi</td>
                    <td>{{ data.provinsi }}, {{ data.negara }}</td>
                  </tr>
                  <tr>
                    <td>Kode Pos</td>
                    <td>{{ data.kodePos }}</td>
                  </tr>
                  <tr>
                    <td>Telepon</td>
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
table,
p {
  font-size: 14px;
}

.ingfo {
  width: 50%;
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
