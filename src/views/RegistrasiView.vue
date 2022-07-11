<template>
  <div class="registrasi">
    <NavbarView />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-5">
          <div
            class="bg-white px-md-4 px-lg-5 py-3 px-4 mx-3 mx-md-0"
            style="
              border-radius: 20px;
              box-shadow: 0px 11px 28px -7px rgba(174, 215, 225, 1);
            "
          >
            <h2 class="fw-bold mb-3 text-center">Registrasi</h2>
            <small
              >Dapatkan akses ke <b>fitur eksklusif</b> di aplikasi dengan
              membuat akun.</small
            >
            <div class="form-floating mb-3 mt-3">
              <input
                v-model="namaD"
                type="text"
                class="form-control"
                placeholder="Nama Lengkap"
              />
              <label for="floatingInput">Nama Depan</label>
            </div>
            <div class="form-floating mb-3 mt-3">
              <input
                v-model="namaB"
                type="text"
                class="form-control"
                placeholder="Nama Lengkap"
              />
              <label for="floatingInput">Nama Belakang</label>
            </div>
            <div class="form-floating mb-3 mt-3">
              <input
                v-model="telepon"
                type="text"
                class="form-control"
                placeholder="No Telp"
              />
              <label for="floatingInput">Nomor Telpon</label>
            </div>
            <div class="form-floating mb-3 mt-3">
              <input
                v-model="email"
                type="email"
                class="form-control"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating">
              <input
                v-model="password"
                type="password"
                class="form-control"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <button
              @click="buatAkun"
              class="btn my-button-3 mt-4 w-100 fw-bold"
            >
              Buat Akun
            </button>

            <p class="text-center mt-4">
              Sudah punya akun? Login <a href="/login" class="">disini</a>
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
  name: "RegistrasiView",
  components: {
    NavbarView,
    FooterView,
  },
  data() {
    return {
      namaD: "",
      namaB: "",
      telepon: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async buatAkun() {
      let result = await axios.post("http://localhost:3000/user", {
        namaD: this.namaD,
        namaB: this.namaB,
        telepon: this.telepon,
        email: this.email,
        password: this.password,
      });
      console.warn(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ path: "/login" });
        this.$toast.success("Akun Berhasil Dibuat!", {
          type: "success",
          position: "top",
          duration: 3000,
          dismissible: true,
        });
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
input::active {
  outline-color: red !important;
}
@media (max-width: 575.98px) {
  .col-md-6:nth-child(2) {
    border: 1px solid black;
  }
}
</style>