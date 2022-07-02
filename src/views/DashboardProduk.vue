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
            <div class="my-3">
              <h3>Semua Produk</h3>
            </div>
            <div class="row">
              <div
                class="col-lg-4 col-md-6 mt-3"
                v-for="product in products"
                :key="product.id"
              >
                <div class="card">
                  <router-link
                    :to="'/detail-produk/' + product.id"
                    class="mx-auto mt-5"
                  >
                    <img
                      class=""
                      width="200"
                      height="200"
                      :src="'/img/' + product.img"
                      alt=""
                    />
                  </router-link>
                  <div class="card-body">
                    <small
                      class="badge my-2"
                      style="background-color: #f34770"
                      >{{ product.kategori }}</small
                    >
                    <h6>
                      <router-link
                        :to="'/detail-produk/' + product.id"
                        class="link-name"
                      >
                        {{ product.nama }}
                      </router-link>
                    </h6>
                    <p class="fw-bold mt-2" style="color: #4e54c8">
                      Rp. {{ formatHarga(product.harga) }}
                    </p>
                  </div>
                </div>
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
    formatHarga(value) {
      let val = (value / 1).toFixed().replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/produk")
      .then((response) => this.setProduk(response.data))
      .catch((error) => console.log("Error", error));
  },
};
</script>

<style scoped>
</style>