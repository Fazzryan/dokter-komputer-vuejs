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
              Team <span style="color: #fe696a">Developer</span>
            </h2>
          </div>
        </div>
      </div>
    </section>

    <section class="my-2">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 mt-2">
            <div class="card" style="width: 18rem">
              <img src="../assets/img/profile1.jpg" class="rounded-3" alt="" />
              <div class="card-body text-center">
                <h5 class="fw-bold text-uppercase">Dinda Fazryan</h5>
                <span class="d-block">Fullstack Developer</span>
                <a href="http://fazryan.epizy.com" class="text-decoration-none"
                  >Lihat profile</a
                >
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mt-2">
            <div class="card" style="width: 18rem">
              <img src="" class="rounded-3" alt="Andika " />
              <div class="card-body text-center">
                <h5 class="fw-bold text-uppercase">Andika Adipradana Faisal</h5>
                <span class="d-block"></span>
                <a href="http://fazryan.epizy.com" class="text-decoration-none"
                  >Lihat profile</a
                >
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mt-2">
            <div class="card" style="width: 18rem">
              <img src="" class="rounded-3" alt="Fakhir " />
              <div class="card-body text-center">
                <h5 class="fw-bold text-uppercase">Fakhir Saeful Akmal</h5>
                <span class="d-block"></span>
                <a href="http://fazryan.epizy.com" class="text-decoration-none"
                  >Lihat profile</a
                >
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mt-2">
            <div class="card" style="width: 18rem">
              <img src="" class="rounded-3" alt="Faisal " />
              <div class="card-body text-center">
                <h5 class="fw-bold text-uppercase">Faisal Nurojab</h5>
                <span class="d-block"></span>
                <a href="http://fazryan.epizy.com" class="text-decoration-none"
                  >Lihat profile</a
                >
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mt-2">
            <div class="card" style="width: 18rem">
              <img src="" class="rounded-3" alt="Furkon " />
              <div class="card-body text-center">
                <h5 class="fw-bold text-uppercase">Furkon Maulana</h5>
                <span class="d-block"></span>
                <a href="http://fazryan.epizy.com" class="text-decoration-none"
                  >Lihat profile</a
                >
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mt-2">
            <div class="card" style="width: 18rem">
              <img src="" class="rounded-3" alt="Wildan " />
              <div class="card-body text-center">
                <h5 class="fw-bold text-uppercase">Wildan Nurjamil</h5>
                <span class="d-block"></span>
                <a href="http://fazryan.epizy.com" class="text-decoration-none"
                  >Lihat profile</a
                >
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

<style>
</style>
