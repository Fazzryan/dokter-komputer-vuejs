<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top nav bg-white">
    <div class="container py-2">
      <router-link class="navbar-brand fw-bold" to="/"
        >DOKTER
        <span class="text-white p-2 rounded-3" style="background-color: #fe696a"
          >KOMPUTER</span
        ></router-link
      >
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item mx-2">
            <router-link to="/produk" class="nav-link text-dark"
              >Produk</router-link
            >
          </li>
          <li class="nav-item mx-2">
            <router-link to="/service" class="nav-link text-dark"
              >Service</router-link
            >
          </li>
          <li class="nav-item mx-2">
            <router-link to="/konsul" class="nav-link text-dark"
              >Konsul</router-link
            >
          </li>
          <li class="nav-item mx-2">
            <router-link to="/about" class="nav-link text-dark"
              >Tentang Kami</router-link
            >
          </li>
        </ul>

        <ul class="navbar-nav">
          <li class="nav-item me-3 mb-2">
            <a href="/keranjang" class="btn position-relative my-button">
              <i class="fa-solid fa-cart-shopping"></i>
              <span
                class="
                  position-absolute
                  top-0
                  start-100
                  translate-middle
                  badge
                  rounded-pill
                "
                style="background-color: #fe696a"
              >
                {{
                  updateKeranjang ? updateKeranjang.length : JumlahItem.length
                }}
                <span class="visually-hidden">unread messages</span>
              </span>
            </a>
          </li>
          <li class="nav-item">
            <a href="/login" class="btn my-button rounded" v-if="namaD == ''">
              <i class="fa-solid fa-user me-1"></i>
              Login
            </a>
            <div class="dropdown" v-if="namaD">
              <a
                class="btn my-button dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa-solid fa-user me-1"></i>
                {{ namaD }}
              </a>

              <ul
                class="dropdown-menu animate slideIn"
                aria-labelledby="dropdownMenuLink"
              >
                <li>
                  <router-link class="dropdown-item" to="/akun"
                    ><i class="fa-regular fa-circle-user me-1"></i>
                    Akun</router-link
                  >
                </li>
                <li>
                  <button @click="logout" class="dropdown-item">
                    <i class="fa-solid fa-arrow-right-from-bracket me-1"></i>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav");
  if (window.pageYOffset > 0) {
    nav.classList.add("add-shadow");
  } else {
    nav.classList.remove("add-shadow");
  }
});

import axios from "axios";
export default {
  name: "NavbarView",
  props: ["updateKeranjang"],
  data() {
    return {
      userId: "",
      namaD: "",
      JumlahItem: [],
    };
  },
  methods: {
    setJumlahItem(data) {
      this.JumlahItem = data;
    },
    logout() {
      localStorage.clear();
      this.$router.push({ path: "/login" });
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    this.namaD = JSON.parse(user).namaD;
    this.user = JSON.parse(user).id;
    axios
      .get("http://localhost:3000/keranjang?userId=" + this.user)
      .then((response) => this.setJumlahItem(response.data))
      .catch((error) => console.log("ERROR", error));
  },
};
</script>

<style scoped>
.router-link-exact-active {
  font-weight: 700;
  color: #fe696a !important;
}
nav {
  transition: 0.4s;
}
.nav-link {
  transition: 0.2s;
}

.nav-link:hover {
  color: #fe696a !important;
  transform: scale(1.06);
}
.add-shadow {
  background-color: transparent !important;
  box-shadow: 0 18px 18px -16px rgb(184, 228, 255);
  backdrop-filter: blur(12px);
}

@media (max-width: 576px) {
  .navbar-brand {
    font-size: 16px;
  }
}
</style>