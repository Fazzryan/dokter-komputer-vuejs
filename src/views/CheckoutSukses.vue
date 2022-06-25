<template>
  <div class="checkout-sukses">
    <NavbarView />

    <div class="container p-5 text-center">
      <div class="row">
        <div class="col-12">
          <img
            src="../assets/img/order-sukses.png"
            alt="gambar"
            class="gambar shadow"
          />
          <h5 class="fw-bold mt-4">Terima kasih atas pesanannya!</h5>
          <p>
            Pesanan anda sudah kami terima dan akan diproses secepat mungkin.
          </p>
          <router-link to="/produk" class="btn my-button"
            ><i class="fa-solid fa-arrow-left"></i> Kembali belanja</router-link
          >
        </div>
      </div>
    </div>

    <FooterView />
  </div>
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import FooterView from "@/components/FooterView.vue";
export default {
  name: "CheckoutSukses",
  components: {
    NavbarView,
    FooterView,
  },
};
</script>

<style scoped>
.container {
  margin-top: -45px;
}
.gambar {
  width: 40%;
  border-radius: 20px;
}
@media (max-width: 576px) {
  .gambar {
    width: 100%;
  }
}
</style>