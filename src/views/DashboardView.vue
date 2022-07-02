<template>
  <div class="dashboard">
    <!-- Header -->
    <header
      class="navbar navbar-light sticky-top bg-white flex-md-nowrap py-3"
      style="margin-top: -120px"
    >
      <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#"
        >Dokter Komputer</a
      >
      <button
        class="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <input
        class="form-control form-control-dark w-100"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <div class="navbar-nav">
        <div class="nav-item text-nowrap">
          <form>
            <button type="submit" class="nav-link px-3 border-0">
              Logout <span data-feather="log-out"></span>
            </button>
          </form>
        </div>
      </div>
    </header>
    <!-- Sidebar -->
    <nav
      id="sidebarMenu"
      class="col-md-3 col-lg-2 d-md-block bg-white sidebar collapse"
    >
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link" href="/dashboard">
              <i class="fa-solid fa-chart-line me-1"></i> Dashboard
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/dashboard/post"
              ><i class="fa-solid fa-cart-shopping"></i> Produk
            </a>
          </li>
        </ul>

        <h6
          class="
            sidebar-heading
            d-flex
            justify-content-between
            align-items-center
            px-3
            mt-4
            mb-1
            text-muted
          "
        ></h6>
      </div>
    </nav>

    <FooterView />
  </div>
</template>

<script>
import FooterView from "@/components/FooterView.vue";
export default {
  name: "DashboardView",
  components: {
    FooterView,
  },
};
</script>

<style scoped>
</style>