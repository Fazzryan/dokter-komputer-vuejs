<template>
  <div class="hero">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-md-6">
          <div
            id="carouselExampleInterval"
            class="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner rounded-3">
              <div class="carousel-item active">
                <img
                  src="../assets/img/banner1.png"
                  class="d-block w-100 h-50"
                  alt="hero image"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/img/banner2.jpg"
                  class="d-block w-100 h-50"
                  alt="hero image"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/img/banner3.png"
                  class="d-block w-100 h-50"
                  alt="hero image"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div
          class="
            col-md-6
            align-self-center
            px-3
            py-2
            px-md-2 px-lg-4
            py-md-0
            mt-3 mt-md-0
          "
        >
          <h3 class="mb-3">
            Temukan barang yang kamu inginkan di
            <strong>DOKTER KOMPUTER</strong>
          </h3>
          <p>
            Dokter Komputer adalah e-commerce yang dapat memberikan pengalaman
            terbaik untuk jual beli personal komputer & Aksesoris bagi pengguna.
          </p>
          <router-link to="/produk" class="btn my-button"
            >Eksplore produk <i class="fa-solid fa-right-long"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroView",
};
</script>

<style scoped>
.hero {
  margin-top: -15px;
}
h3 {
  font-size: 38px;
}

@media (max-width: 768px) {
  h3 {
    font-size: 24px;
  }
  p {
    font-size: 14px;
  }
  .btn {
    font-size: 14px;
  }
}
</style>