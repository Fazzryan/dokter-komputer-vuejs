<template>
  <div class="produk">
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
                  Produk
                </li>
              </ol>
            </nav>
          </div>
          <div class="text-center text-lg-start order-lg-1">
            <h2 class="fw-bold text-light">
              Eksplore <span style="color: #fe696a">Produk</span>
            </h2>
          </div>
        </div>
      </div>
    </section>

    <section class="category mt-lg-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-12 mb-4">
            <div class="card bg-white" style="border-radius: 10px">
              <div class="py-3">
                <div class="text-start px-3 mx-2 mx-md-3">
                  <h3 class="fw-bold">Kategori</h3>
                  <hr />
                </div>
                <div
                  class="kategori px-3 py-1 my-2 mx-2 mx-md-3"
                  @click="allProduk()"
                >
                  Semua Produk
                </div>
                <div
                  class="kategori px-3 py-1 my-2 mx-2 mx-md-3"
                  @click="cariKomputer('Komputer')"
                >
                  Komputer
                </div>
                <div
                  class="kategori px-3 py-1 my-2 mx-2 mx-md-3"
                  @click="cariKomponenPc('KomponenPc')"
                >
                  KomponenPC
                </div>
                <!-- <div
                  class="kategori px-3 py-1 my-2 mx-2 mx-md-3"
                  @click="cariMouseKeyboard('MouseKeyboard')"
                >
                  Mouse/Keyboard
                </div> -->
                <div
                  class="kategori px-3 py-1 my-2 mx-2 mx-md-3"
                  @click="cariAksesoris('Aksesoris')"
                >
                  Aksesoris
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-9 col-md-12 mt-3">
            <div class="row justify-content-between">
              <div class="col-md-4 order-1 order-md-0">
                <h3 class="fw-bold mt-3 mt-md-0" v-if="kategori === ''">
                  Semua Produk
                </h3>
                <h3 class="fw-bold mt-3 mt-md-0" v-if="kategori">
                  {{ kategori }}
                </h3>
                <hr />
              </div>
              <div class="col-md-5 order-0">
                <div class="input-group mb-3 my-shadow">
                  <input
                    v-model="search"
                    type="text"
                    class="form-control"
                    placeholder="Cari semua produk di dokter komputer"
                    @keyup="searchProduct"
                  />
                  <button type="submit" class="btn btn-danger">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="row">
              <div
                class="col-lg-4 col-md-6 mt-3"
                v-for="product in products"
                :key="product.id"
                :id="product.id"
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
                    <!-- <p class="fw-bold mt-2" style="color: #4e54c8">
                      Rp. {{ product.harga }}
                    </p> -->
                    <p class="fw-bold mt-2" style="color: #4e54c8">
                      Rp. {{ formatHarga(product.harga) }}
                    </p>
                  </div>
                </div>
                <!-- <CardProduk :product="product" /> -->
              </div>
            </div>
            <div class="text-center mt-5 text-muted">
              <p>semua produk telah ditampilkan</p>
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
  name: "ProdukView",
  components: {
    NavbarView,
    FooterView,
  },
  data() {
    return {
      kategori: "",
      products: [],
      search: "",
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
    allProduk() {
      this.kategori = "Semua Produk";
      axios
        .get("http://localhost:3000/produk")
        .then((response) => this.setProduct(response.data))
        .catch((error) => console.log("ERROR", error));
    },
    cariKomputer(komputer) {
      this.kategori = komputer;
      axios
        .get("http://localhost:3000/produk?kategori=" + komputer)
        .then((response) => this.setProduct(response.data))
        .catch((error) => console.log("ERROR", error));
    },
    cariKomponenPc(komponenPc) {
      this.kategori = komponenPc;
      axios
        .get("http://localhost:3000/produk?kategori=" + komponenPc)
        .then((response) => this.setProduct(response.data))
        .catch((error) => console.log("ERROR", error));
    },
    cariAksesoris(aksesoris) {
      this.kategori = aksesoris;
      axios
        .get("http://localhost:3000/produk?kategori=" + aksesoris)
        .then((response) => this.setProduct(response.data))
        .catch((error) => console.log("ERROR", error));
    },
    searchProduct() {
      axios
        .get("http://localhost:3000/produk?q=" + this.search)
        .then((response) => this.setProduct(response.data))
        .catch((error) => console.log("ERROR", error));
    },
    formatHarga(value) {
      let val = (value / 1).toFixed().replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/produk")
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log("ERROR", error));
  },
};
</script>

<style scoped>
::placeholder {
  font-size: 14px;
  color: rgb(116, 116, 116);
}

p {
  font-size: 14px;
}
.aktif {
  color: white;
  background: #fe696a;
  border-radius: 20px;
  box-shadow: 0px 5px 28px -7px #fe696a;
}
.kategori {
  border-radius: 20px;
  transition: 0.3s;
}
.kategori:hover {
  box-shadow: 0px 5px 28px -7px #fe696a;
  color: white;
  background: #fe696a;
  border-radius: 20px;
  cursor: pointer;
}

@media (max-width: 575.98px) {
  .kategori {
    font-size: 14px;
  }
  .d-flex {
    overflow: scroll;
  }
  .breadcrumb-item {
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .category {
    margin-top: -30px;
  }
}
</style>
