<template>
  <div class="service">
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
                  Service
                </li>
              </ol>
            </nav>
          </div>
          <div class="text-center text-lg-start order-lg-1">
            <h2 class="fw-bold text-light">
              Service <span style="color: #fe696a">Kami</span>
            </h2>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div
        class="container bg-white py-3"
        style="
          box-shadow: 0px 11px 28px -7px rgba(174, 215, 225, 1);
          border-radius: 10px;
          margin-top: -30px;
        "
      >
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-7 text-center">
            <h3 class="py-1">Service Kami</h3>
            <p>
              Butuh perbaikan komputer, laptop dan barang lainnya ? Silahkan
              hubungi customer service kami di +62 852-2342-xxxx atau bisa
              datang ke Planet Computer untuk mengkonsultasikannya secara
              langsung.
            </p>
          </div>
        </div>
        <div class="row text-center pb-4">
          <div class="col-md-4 mt-2">
            <div
              class="bg-light border border-2 py-3"
              style="border-radius: 10px"
            >
              <img
                width="200"
                height="200"
                src="../assets/img/komputer.svg"
                alt="Title"
              />
              <div class="card-body">
                <h4 class="card-title mb-3">Service Komputer</h4>
                <a href="" class="btn my-button-3"
                  >Selengkapnya <i class="fa-solid fa-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mt-2">
            <div
              class="bg-light border border-2 py-3"
              style="border-radius: 10px"
            >
              <img
                width="200"
                height="200"
                src="../assets/img/laptop.svg"
                alt="Title"
              />
              <div class="card-body">
                <h4 class="card-title mb-3">Service Laptop</h4>
                <a href="" class="btn my-button-3"
                  >Selengkapnya <i class="fa-solid fa-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mt-2">
            <div
              class="bg-light border border-2 py-3"
              style="border-radius: 10px"
            >
              <img
                width="200"
                height="200"
                src="../assets/img/printer.svg"
                alt="Title"
              />
              <div class="card-body">
                <h4 class="card-title mb-3">Service Printer</h4>
                <a href="" class="btn my-button-3"
                  >Selengkapnya <i class="fa-solid fa-arrow-right"></i
                ></a>
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
  name: "ServiceView",
  components: {
    NavbarView,
    FooterView,
  },
};
</script>

<style>
</style>