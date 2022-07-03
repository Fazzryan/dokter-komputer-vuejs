<template>
  <div style="margin-top: -120px">
    <nav>
      <div class="logo-name border-bottom pb-3">
         <router-link to="/" class="logo_name text-decoration-none">Dokter Komputer</router-link>
      </div>
      <div class="menu-items">
        <ul class="nav-links">
          <li>
            <a href="/dashboard">
              <i class="fa-solid fa-chart-line"></i>
              <span class="link-name">Dahsboard</span>
            </a>
          </li>
          <li>
            <a href="/dashboard/produk">
              <i class="fa-solid fa-cart-shopping"></i>
              <span class="link-name">Products</span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <button class="btn my-button" @click="logout()">
              <i class="fa-solid fa-arrow-right-from-bracket me-2"></i>
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
    <section class="dashboard">
      <div class="top">
        <div>
          <!-- <i class="fa-regular fa-user fs-4"></i> -->
          <span class="fw-bold ms-2 fs-5">Selamat Datang {{ namaD }} !</span>
        </div>

        <div class="search-box">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div class="dash-content">
        <div class="overview">
          <div class="title">
            <i class="fa-solid fa-chart-line"></i>
            <span class="text">Dashboard</span>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="bg-white rounded-3 shadow p-4 text-center">
                  <h4>Total Produk</h4>
                  <p class="fw-bold fs-4">{{ products.length }}</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="bg-white rounded-3 shadow p-4 text-center">
                  <h4>Total Produk</h4>
                  <p class="fw-bold fs-4">{{ products.length }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DashboardView",

  data() {
    return {
      namaD: "",
      products: [],
    };
  },
  methods: {
    setProduk(data) {
      this.products = data;
    },
    logout() {
      localStorage.clear();
      this.$router.push({ path: "/login" });
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    let isAdmin = JSON.parse(user).namaD;
    this.namaD = isAdmin;
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
nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  padding: 10px 14px;
  background-color: #373f50;
  border-right: 1px solid #c2c2c2;
  transition: 0.3s;
}

nav .logo-name {
  display: flex;
  align-items: center;
}

nav .logo-name .logo_name {
  font-size: 22px;
  font-weight: 600;
  color: #fff;
  margin-left: 14px;
  transition: 0.3s;
}

nav .menu-items {
  margin-top: 40px;
  height: calc(100% - 90px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.menu-items li {
  list-style: none;
}

.menu-items li a {
  display: flex;
  align-items: center;
  height: 50px;
  text-decoration: none;
  position: relative;
}

.nav-links li a:hover:before {
  content: "";
  position: absolute;
  left: -7px;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  background-color: #fe696a;
}

.menu-items li a i {
  font-size: 24px;
  min-width: 45px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.menu-items li a .link-name {
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  transition: 0.3;
}

nav.close li a .link-name {
  opacity: 0;
  pointer-events: none;
}

.nav-links li a:hover i,
.nav-links li a:hover .link-name {
  color: #fe696a;
}

.dashboard {
  position: relative;
  left: 250px;
  min-height: 100vh;
  width: calc(100% - 250px);
  padding: 10px 14px;
  transition: 0.3s;
}
.dashboard .top {
  position: fixed;
  top: 0;
  left: 250px;
  display: flex;
  width: calc(100% - 250px);
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  background-color: #fff;
  transition: 0.3s;
  z-index: 10;
}
.dashboard .top .search-box {
  position: relative;
  height: 45px;
  max-width: 600px;
  width: 100%;
  margin: 0 30px;
}
.top .search-box input {
  position: absolute;
  border: 1px solid #e6e5e5;
  background-color: #fff;
  padding: 0 25px 0 50px;
  border-radius: 5px;
  height: 100%;
  width: 100%;
  color: #000;
  font-size: 15px;
  font-weight: 400;
  outline: none;
}

.top .search-box i {
  position: absolute;
  left: 15px;
  font-size: 22px;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  color: #707070;
}
.dashboard .dash-content {
  margin-top: 95px;
}

.dash-content .title {
  display: flex;
  align-items: center;
  margin: 60px 0 30px 0;
}

.dash-content .title i {
  position: relative;
  height: 35px;
  width: 35px;
  background-color: #0e4bf1;
  border-radius: 6px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
.dash-content .title .text {
  font-size: 24px;
  font-weight: 500;
  color: #000;
  margin-left: 10px;
}
</style>