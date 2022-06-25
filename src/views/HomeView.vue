<template>
  <div class="home">
    <NavbarView />
    <HeroView />
    <section class="mt-3 mt-md-4">
      <div class="container py-5">
        <div class="text-start">
          <h3>Rekomendasi Produk</h3>
          <hr />
        </div>
        <div class="row mt-4">
          <div
            class="col-lg-3 col-md-4 mt-3 mt-md-3"
            v-for="product in products"
            :key="product.id"
            :id="product.id"
          >
            <div class="card">
              <div class="position-absolute me-4 mt-2 top-0 end-0">
                <button class="btn btn-outline-danger">
                  <i class="fa-solid fa-heart"></i>
                </button>
              </div>
              <router-link
                :to="'/detail-produk/' + product.id"
                class="mx-auto mt-5"
              >
                <img
                  class=""
                  width="200"
                  height="200"
                  :src="'/img/' + product.img"
                  alt="produk"
                />
              </router-link>
              <div class="card-body">
                <small class="badge my-2" style="background-color: #f34770">{{
                  product.kategori
                }}</small>
                <h6>
                  <router-link
                    :to="'/detail-produk/' + product.id"
                    class="link-name"
                  >
                    {{ product.nama }}
                  </router-link>
                </h6>
                <p class="fw-bold mt-2" style="color: #4e54c8">
                  Rp. {{ product.harga }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pb-4 text-center">
        <router-link to="/produk" class="btn my-button-2"
          >Lihat semua produk <i class="fa-solid fa-right-long"></i>
        </router-link>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,160L48,160C96,160,192,160,288,181.3C384,203,480,245,576,229.3C672,213,768,139,864,128C960,117,1056,171,1152,181.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>

    <section class="pt-1 pb-3 brand" style="background-color: #fff">
      <div class="container mt-2 text-center text-md-start">
        <div class="row">
          <div class="col-md-4 col-lg-3 mt-2">
            <div class="border">
              <img
                src="https://myclub.co.id/cni-content/uploads/modules/brand/thumbs/small/20200602024705.jpg"
                class="img-fluid"
                alt="Asus Brand"
              />
            </div>
          </div>
          <div class="col-md-4 col-lg-3 mt-2">
            <div class="border">
              <img
                src="https://myclub.co.id/cni-content/uploads/modules/brand/thumbs/small/20200602024619.jpg"
                class="img-fluid"
                alt="Gigabyte Brand"
              />
            </div>
          </div>
          <div class="col-md-4 col-lg-3 mt-2">
            <div class="border">
              <img
                src="https://myclub.co.id/cni-content/uploads/modules/brand/thumbs/small/20200602024911.jpg"
                class="img-fluid"
                alt="AMD Brand"
              />
            </div>
          </div>
          <div class="col-md-4 col-lg-3 mt-2">
            <div class="border">
              <img
                src="https://myclub.co.id/cni-content/uploads/modules/brand/thumbs/small/20200602024520.jpg"
                class="img-fluid"
                alt="Kingstone Brand"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style="background-color: #fff">
      <div class="container pt-5">
        <h3 class="mb-5 text-center text-lg-start">Aksesoris</h3>
        <div class="row">
          <!-- headset -->
          <div class="col-md-6 col-lg-4">
            <div class="text-center">
              <p class="fw-bold mb-md-5 mb-3">HEADSET</p>
            </div>
            <div class="d-flex">
              <div class="flex-shrink-0 w-25">
                <router-link to="/detail-produk/8">
                  <img
                    src="/img/headset-predator-galea-350.png"
                    class="w-100"
                    alt="..."
                  />
                </router-link>
              </div>
              <div class="flex-grow-1 ms-3">
                <router-link
                  to="/detail-produk/8"
                  class="text-decoration-none link-name fw-normal"
                >
                  Headset Predator Galea
                  <br />
                  <span class="fw-bold" style="color: #4e54c8">Rp.850000</span>
                </router-link>
              </div>
            </div>
            <div class="d-flex">
              <div class="flex-shrink-0 w-25">
                <router-link to="/detail-produk/9">
                  <img
                    src="/img/headset-logitech-gaming-g335-white.png"
                    class="w-100"
                    alt="..."
                  />
                </router-link>
              </div>
              <div class="flex-grow-1 ms-3">
                <router-link
                  to="/detail-produk/9"
                  class="text-decoration-none link-name fw-normal"
                >
                  Logitech Gamming G335 White<br />
                  <span class="fw-bold" style="color: #4e54c8">Rp.809000</span>
                </router-link>
              </div>
            </div>
            <div class="d-flex">
              <div class="flex-shrink-0 w-25">
                <router-link to="/detail-produk/12">
                  <img
                    src="/img/headset-razer-barracudaxwielles-mercury-white.png"
                    class="w-100"
                    alt="..."
                /></router-link>
              </div>
              <div class="flex-grow-1 ms-3">
                <router-link
                  to="/detail-produk/12"
                  class="text-decoration-none link-name fw-normal"
                >
                  Headset Razer Barracuda X Wirelles Mercury White<br />
                  <span class="fw-bold" style="color: #4e54c8">Rp.1500000</span>
                </router-link>
              </div>
            </div>
          </div>
          <!-- speaker -->
          <div class="col-md-6 col-lg-4">
            <div class="text-center">
              <p class="fw-bold mb-md-5 mb-3 mt-md-0 mt-3">SPEAKER</p>
            </div>

            <div class="d-flex">
              <div class="flex-shrink-0 w-25">
                <router-link to="/detail-produk/17">
                  <img
                    src="/img/speaker-simbadda-cst-2100n.png"
                    class="w-100"
                    alt="..."
                  />
                </router-link>
              </div>
              <div class="flex-grow-1 ms-3">
                <router-link
                  to="/detail-produk/17"
                  class="text-decoration-none link-name fw-normal"
                >
                  Speaker Simbadda Cst-2100N<br />
                  <span class="fw-bold" style="color: #4e54c8">Rp.385000</span>
                </router-link>
              </div>
            </div>
            <div class="d-flex">
              <div class="flex-shrink-0 w-25">
                <router-link to="/detail-produk/18">
                  <img
                    src="/img/speaker-simbadda-cst-7100n+.png"
                    class="w-100"
                    alt="..."
                  />
                </router-link>
              </div>
              <div class="flex-grow-1 ms-3">
                <router-link
                  to="/detail-produk/18"
                  class="text-decoration-none link-name fw-normal"
                >
                  Speaker Simbadda Cst-7000N+<br />
                  <span class="fw-bold" style="color: #4e54c8">Rp.700000</span>
                </router-link>
              </div>
            </div>
            <div class="d-flex">
              <div class="flex-shrink-0 w-25">
                <router-link to="/detail-produk/19">
                  <img
                    src="/img/speaker-simbadda-cst-3000n+.png"
                    class="w-100"
                    alt="..."
                  />
                </router-link>
              </div>
              <div class="flex-grow-1 ms-3">
                <router-link
                  to="/detail-produk/19"
                  class="text-decoration-none link-name fw-normal"
                >
                  Speaker Simbadda Cst-3000N+<br />
                  <span class="fw-bold" style="color: #4e54c8">Rp.330000</span>
                </router-link>
              </div>
            </div>
          </div>
          <!-- flashdisk -->
          <div class="col-md-6 col-lg-4 mt-md-4 mt-lg-0">
            <div class="text-center">
              <p class="fw-bold mb-md-5 mb-3 mt-lg-0 mt-3">FLASHDISK</p>
            </div>

            <div class="d-flex">
              <div class="flex-shrink-0 w-25">
                <router-link to="/detail-produk/20">
                  <img src="/img/netac16gb.png" class="w-100" alt="..." />
                </router-link>
              </div>
              <div class="flex-grow-1 ms-3">
                <router-link
                  to="/detail-produk/20"
                  class="text-decoration-none link-name fw-normal"
                >
                  Flashdisk Netac 16 GB<br />
                  <span class="fw-bold" style="color: #4e54c8">Rp.45000</span>
                </router-link>
              </div>
            </div>
            <div class="d-flex">
              <div class="flex-shrink-0 w-25">
                <router-link to="/detail-produk/21">
                  <img src="/img/sandisk32gbotg.png" class="w-100" alt="..." />
                </router-link>
              </div>
              <div class="flex-grow-1 ms-3">
                <router-link
                  to="/detail-produk/21"
                  class="text-decoration-none link-name fw-normal"
                >
                  Flashdisk Sandisk 32 GB OTG<br />
                  <span class="fw-bold" style="color: #4e54c8">Rp.100000</span>
                </router-link>
              </div>
            </div>
            <div class="d-flex">
              <div class="flex-shrink-0 w-25">
                <router-link to="/detail-produk/22">
                  <img src="/img/kingstone32gb.png" class="w-100" alt="..." />
                </router-link>
              </div>
              <div class="flex-grow-1 ms-3">
                <router-link
                  to="/detail-produk/22"
                  class="text-decoration-none link-name fw-normal"
                >
                  Flashdisk Kingstone 32 GB<br />
                  <span class="fw-bold" style="color: #4e54c8">Rp.63000</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e5f3ff"
          fill-opacity="1"
          d="M0,64L1440,224L1440,320L0,320Z"
        ></path>
      </svg>
    </section>

    <section class="mb-3">
      <div class="container">
        <div class="row">
          <h3 class="mb-5 text-center text-lg-start">
            Manfaat belanja di Dokter Komputer
          </h3>
          <div class="col-lg-4 mt-2 mt-lg-2">
            <div
              class="px-3 py-4 text-center bg-white"
              style="border-radius: 10px; background: #ecf1f9"
            >
              <i class="fa-solid fa-truck fs-1 my-3 text-primary"></i>
              <h6 class="fw-bold">PENGIRIMAN AMAN DAN CEPAT</h6>
              <span class="text-muted">
                Kami menjamin barang samapi dengan cepat dan tepat waktu
              </span>
            </div>
          </div>
          <div class="col-lg-4 mt-2 mt-lg-2">
            <div
              class="px-3 py-4 text-center bg-white"
              style="border-radius: 10px; background: #ecf1f9"
            >
              <i class="fa-solid fa-headset fs-1 my-3 text-primary"></i>
              <h6 class="fw-bold">CUSTOMER SERVICE</h6>
              <span class="text-muted">
                Hubungi tim profesional kami untuk info mengenai barang dan
                pemesanan
              </span>
            </div>
          </div>
          <div class="col-lg-4 mt-2 mt-lg-2">
            <div
              class="px-3 py-4 text-center bg-white"
              style="border-radius: 10px; background: #ecf1f9"
            >
              <i class="fa-solid fa-recycle my-3 fs-1 text-primary"></i>
              <h6 class="fw-bold">7 HARI PENGEMBALIAN</h6>
              <span class="text-muted">
                Barang akan kami tukar dengan yang baru apabila terdapat cacat
                dan malfungsi
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FooterView />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarView from "@/components/NavbarView.vue";
import HeroView from "@/components/HeroView.vue";
import FooterView from "@/components/FooterView.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    NavbarView,
    HeroView,
    FooterView,
  },
  data() {
    return {
      products: [],
      produkAksesoris: [],
    };
  },
  methods: {
    setProduk(data) {
      this.products = data;
    },
    setProdukAksesoris(data) {
      this.produkAksesoris = data;
    },
  },
  mounted() {
    // let user = localStorage.getItem("user-info");
    // this.nama = JSON.parse(user).nama;

    axios
      .get(
        "http://localhost:3000/produk?id=1&id=2&id=5&id=6&id=10&id=9&id=20&id=17"
      )
      .then((response) => this.setProduk(response.data))
      .catch((error) => console.log("Gagal", error));
    // axios
    //   .get("http://localhost:3000/produk-aksesoris")
    //   .then((response) => this.setProdukAksesoris(response.data))
    //   .catch((error) => console.log("Gagal", error));
  },
};
</script>

<style scoped>
.btn {
  font-size: 16px;
}
.brand .border {
  transition: 0.2s;
}
.brand .border:hover {
  background: red;
}
span,
p {
  font-size: 14px;
}
@media (max-width: 768px) {
  .btn {
    font-size: 14px;
  }
}
</style>