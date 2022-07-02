<template>
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

    </div>
  </nav>
</template>

<script>
export default {
  name: "SidebarDashboard",
};
</script>

<style>
</style>