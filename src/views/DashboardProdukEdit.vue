<template>
  <div>
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
              <h3>Edit Produk</h3>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="" class="form-label">Nama Produk</label>
                  <input type="text" class="form-control" v-model="nama" />
                </div>
                <div class="mb-3">
                  <label for="" class="form-label">Harga</label>
                  <input class="form-control" v-model.number="harga" />
                </div>
                <div class="mb-3">
                  <label for="" class="form-label">Kategori</label>
                  <select class="form-select" v-model="kategori">
                    <option value="Komputer">Komputer</option>
                    <option value="Laptop">Laptop</option>
                    <option value="KomponenPc">KomponenPc</option>
                    <option value="MouseKeyboard">MouseKeyboard</option>
                    <option value="Aksesoris">Aksesoris</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="" class="form-label">Deskripsi</label>
                  <textarea class="form-control" v-model="deskripsi"></textarea>
                </div>
              </div>

              <div class="col-md-6">
                <div class="mb-3">
                  <label for="" class="form-label">Gambar</label>
                  <input type="file" class="form-control" />
                </div>
                <!-- <img :src="imgSrc" v-if="imgSrc" /> -->
              </div>
              <div class="col-md-6">
                <div class="d-flex justify-content-between">
                  <router-link to="/dashboard/produk" class="btn my-button-3">
                    <i class="fa-solid fa-arrow-left"></i> Kembali
                  </router-link>
                  <button @click="editData()" class="btn my-button">
                    Edit Data
                  </button>
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
  name: "DashboardProdukEdit",
  components: {
    HeaderDashboard,
    FooterView,
  },
  data() {
    return {
      nama: "",
      harga: "",
      kategori: "",
      deskripsi: "",
      gambar: "",
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
    editData() {
      axios
        .put("http://localhost:3000/produk/" + this.$route.params.id, {
          nama: this.nama,
          harga: this.harga,
          kategori: this.kategori,
          deskripsi: this.deskripsi,
          gambar: this.gambar,
        })
        .then(() => {
          this.$toast.success("Edti data berhasil!", {
            type: "success",
            position: "top",
            duration: 3000,
            dismissible: true,
          });
          this.$router.push({ path: "/dashboard/produk" });
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/produk/" + this.$route.params.id)
      .then((response) => {
        this.nama = response.data.nama;
        this.harga = response.data.harga;
        this.kategori = response.data.kategori;
        this.deskripsi = response.data.deskripsi;
        this.gambar = response.data.gambar;
      })
      .catch((error) => console.log("ERROR", error));
  },
};
</script>

<style scoped>
</style>