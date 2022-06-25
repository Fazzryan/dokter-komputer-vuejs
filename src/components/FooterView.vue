<template>
  <footer>
    <div class="container mt-5 py-5">
      <div class="row justify-content-between justify-content-sm-start">
        <div class="col-md-6">
          <div class="d-block">
            <h2>DOKTER <span style="color: #fe696a">KOMPUTER</span></h2>
            <span>&copy; Copyright 2022. Dokter Komputer Team</span>
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex justify-content-between justify-content-md-around">
            <div class="mt-5 mt-md-0">
              <p class="fw-bold">Dokter Komputer</p>
              <router-link to="/produk" class="link-name">Produk</router-link
              ><br />
              <router-link to="/service" class="link-name">Service</router-link
              ><br />
              <router-link to="/konsul" class="link-name">Konsul</router-link
              ><br />
              <router-link to="/about" class="link-name"
                >Tentang Kami</router-link
              >
            </div>
            <div class="mt-5 mt-md-0">
              <p class="fw-bold">Sosial Media</p>
              <router-link to="youtube.com" class="link-name"
                >Youtube</router-link
              ><br />
              <router-link to="facebook.com" class="link-name"
                >Facebook</router-link
              ><br />
              <router-link to="instagram.com" class="link-name"
                >Instagram</router-link
              ><br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterView",
};
</script>

<style scoped>
footer {
  background: #373f50;
  color: white;
}
footer .link-name {
  text-decoration: none;
  color: #dde0e5;
}
</style>