<template>
  <div class="about">
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
                  Tentang Kami
                </li>
              </ol>
            </nav>
          </div>
          <div class="text-center text-lg-start order-lg-1">
            <h2 class="fw-bold text-light">
              Tenatang <span style="color: #fe696a">Kami</span>
            </h2>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div
        class="container py-2 rounded-3 bg-white"
        style="
          box-shadow: 0px 11px 28px -7px rgba(174, 215, 225, 1);
          border-radius: 10px;
          margin-top: -30px;
        "
      >
        <div class="row py-3">
          <div class="col-md-6">
            <img src="../assets/img/banner1.png" class="w-100" alt="" />
          </div>
          <div class="col-md-6 mt-3 mt-md-0">
            <div class="ms-3">
              <h5>Tentang Kami</h5>
              <p class="mt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quidem, aperiam! Impedit ab placeat voluptates facere accusamus
                quae autem laboriosam quisquam voluptatem? Accusamus ipsa libero
                quam ex aperiam nemo quos ut sunt ipsam natus magnam, minima,
                quidem quo asperiores soluta distinctio corrupti quibusdam
                reiciendis esse nulla aspernatur, qui error? Dolor, accusamus.
              </p>
              <p class="mt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quidem, aperiam! Impedit ab placeat voluptates facere accusamus
                quae autem laboriosam quisquam voluptatem? Accusamus ipsa libero
                quam ex aperiam nemo quos ut sunt ipsam natus magnam, minima,
                quidem quo asperiores soluta distinctio corrupti quibusdam
                reiciendis esse nulla aspernatur, qui error? Dolor, accusamus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container my-4">
      <div class="row justify-content-center">
        <div
          class="col-lg-4 col-md-5 text-center bg-white py-3"
          style="
            box-shadow: 0px 11px 28px -7px rgba(174, 215, 225, 1);
            border-radius: 10px;
          "
        >
          <h3 class="fw-bold">Team Kelompok 5</h3>
        </div>
      </div>
    </div>

    <section class="my-2">
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-3 col-md-6 mt-2">
            <div class="my-1 py-3 bg-white rounded-3 shadow">
              <img
                src="../assets/img/profile1.jpg"
                class="w-50 p-2 border"
                style="border-radius: 150px 150px 150px 150px"
              />
              <div class="px-3 text-center">
                <h6 class="fw-bold mt-3">Dinda Fazryan</h6>
                <p class="d-block text-muted">
                  Fullstack Developer - STMIK Tasikmalaya
                </p>
                <ul class="list-unstyled">
                  <li>
                    <i class="fa-solid fa-phone me-2"></i> +62 877-3113-7537
                  </li>
                  <li>
                    <i class="fa-solid fa-envelope me-2"></i>
                    dinda5657@gmail.com
                  </li>
                </ul>
                <a class="me-2 mb-2 btn btn-outline-dark" href="#">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a class="me-2 mb-2 btn btn-outline-dark" href="#">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a class="me-2 mb-2 btn btn-outline-dark" href="#">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a class="me-2 mb-2 btn btn-outline-dark" href="#">
                  <i class="fa-brands fa-youtube"></i>
                </a>
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
import NavbarView from "@/components/NavbarView.vue";
import FooterView from "@/components/FooterView.vue";

export default {
  name: "AboutView",
  components: {
    NavbarView,
    FooterView,
  },
};
</script>

<style scoped>
p,
ul {
  font-size: 14px;
}
h6 {
  font-size: 17px;
}
</style>
