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
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Produk</th>
                      <th>Kategori</th>
                      <th>Harga</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                </table>
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
export default {
  name: "DashboardProdukEdit",
  components: {
    HeaderDashboard,
    FooterView,
  },
};
</script>

<style scoped>
</style>