<template>
  <div class="login">
    <NavbarView />
    <div class="container mb-5">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-5">
          <div
            class="bg-white px-md-4 px-lg-5 py-3 px-4 mx-3 mx-md-0"
            style="
              border-radius: 20px;
              box-shadow: 0px 11px 28px -7px rgba(174, 215, 225, 1);
            "
          >
            <h2 class="fw-bold mb-3 text-center">Login</h2>
            <small
              >Selamat datang di <b> Dokter Komputer</b>. Silahkan masukan akun
              anda untuk mulai menggunakan aplikasi.</small
            >
            <div class="form-floating mb-3 mt-3">
              <input v-model="email" type="email" class="form-control" />
              <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating">
              <input v-model="password" type="password" class="form-control" />
              <label for="floatingPassword">Password</label>
            </div>

            <button @click="login" class="btn my-button-3 mt-3 w-100 fw-bold">
              Login
            </button>
            <p class="text-center mt-4">
              Belum punya akun? Resgistrasi
              <a href="/registrasi" class="">disini</a>
            </p>
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
  name: "LoginView",
  components: {
    NavbarView,
    FooterView,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/user?email=${this.email}&password=${this.password}`
      );
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$toast.success("Login Berhasil!", {
          type: "success",
          position: "top",
          duration: 3000,
          dismissible: true,
        });
        this.$router.push({ path: "/" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ path: "/" });
    }
  },
};
</script>

<style scoped>
@media (max-width: 575.98px) {
  .col-md-6:nth-child(2) {
    border: 1px solid black;
  }
}
</style>