<template>
  <footer>
    <div class="container mt-5 py-5">
      <div class="row justify-content-between justify-content-sm-start">
        <div class="col-md-6">
          <div class="d-block">
            <h3>DOKTER <span style="color: #fe696a">KOMPUTER</span></h3>
            <span style="font-size:14px;">&copy; Copyright 2022. Dokter Komputer Team</span>
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex justify-content-between justify-content-md-around">
            <div class="mt-5 mt-md-0">
              <p class="fw-bold">Dokter Komputer</p>
              <router-link to="/produk" class="link">Produk</router-link><br />
              <router-link to="/service" class="link">Service</router-link
              ><br />
              <router-link to="/konsul" class="link">Konsul</router-link><br />
              <router-link to="/about" class="link">Tentang Kami</router-link>
            </div>
            <div class="mt-5 mt-md-0">
              <p class="fw-bold">Sosial Media</p>
              <a href="https://www.youtube.com" class="link">Youtube</a><br />
              <a href="https://www.facebook.com" class="link">Facebook</a><br />
              <a href="https://www.instagram.com" class="link">Instagram</a
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
footer .link {
  text-decoration: none;
  color: #dde0e5;
  font-size: 14px;
}
footer .link:hover {
  text-decoration: underline;
  color: #fe696a;
}
</style>