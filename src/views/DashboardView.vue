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
              <h4>Total Produk : {{ products.length }}</h4>
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
  name: "DashboardView",
  components: {
    HeaderDashboard,
    FooterView,
  },
  data() {
    return {
      users: "",
      products: [],
    };
  },
  methods: {
    setProduk(data) {
      this.products = data;
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