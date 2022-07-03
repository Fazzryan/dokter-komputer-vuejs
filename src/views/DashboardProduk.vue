<template>
  <div class="dashboard">
    <HeaderDashboard />
    <section>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-2 rounded bg-white">
            <div class="position-sticky pt-3">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link" href="/dashboard">
                    <i class="fa-solid fa-chart-line me-1"></i> Dashboard
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/dashboard/produk">
                    <i class="fa-solid fa-cart-shopping"></i> Produk
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-9 rounded ms-4 mt-2">
            <div class="d-flex justify-content-between my-3">
              <h3>Semua Produk</h3>
              <button class="btn my-button">
                <i class="fa-solid fa-plus"></i> Tambah Data
              </button>
            </div>
            <div class="row">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Produk</th>
                      <th>Kategori</th>
                      <th>Harga</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="product in products" :key="product.id">
                      <td>{{ product.nama }}</td>
                      <td>{{ product.kategori }}</td>
                      <td>Rp.{{ formatHarga(product.harga) }}</td>
                      <td>
                        <router-link
                          :to="'/dashboard/produk/' + product.id + '/edit'"
                          class="btn my-button"
                          ><i class="fa-solid fa-pen-to-square"></i>
                        </router-link>
                        |
                        <button
                          class="btn my-button"
                          @click="hapusProduk(product.id)"
                        >
                          <i class="fa-solid fa-trash-can"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterView />
  </div>
</template>

<script>
import HeaderDashboard from "@/components/HeaderDashboard.vue";
import FooterView from "@/components/FooterView.vue";
import axios from "axios";
export default {
  name: "DashboardProduk",
  components: {
    HeaderDashboard,
    FooterView,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProduk(data) {
      this.products = data;
    },
    hapusProduk(id) {
      axios
        .delete("http://localhost:3000/produk/" + id)
        .then(() => {
          this.$toast.success("Produk berhasil dihapus!", {
            type: "success",
            position: "top",
            duration: 3000,
            dismissible: true,
          });

          // update produk
          axios
            .get("http://localhost:3000/produk")
            .then((response) => this.setProduk(response.data))
            .catch((error) => console.log("Error", error));
        })
        .catch((error) => console.log("Error", error));
    },
    formatHarga(value) {
      let val = (value / 1).toFixed().replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    let isAdmin = JSON.parse(user).namaD;
    //jika tidak ada user maka balik ke login
    if (!user) {
      return this.$router.push({ path: "/login" });
    }
    //jika user bukan admin maka balik ke home
    if (isAdmin != "Admin") {
      return this.$router.push({ path: "/" });
    }
    axios
      .get("http://localhost:3000/produk")
      .then((response) => this.setProduk(response.data))
      .catch((error) => console.log("Error", error));
  },
};
</script>

<style scoped>
</style>