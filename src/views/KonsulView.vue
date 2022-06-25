<template>
  <div class="konsul">
    <NavbarView />
    <div class="container">
      <div class="border bg-light rounded-3 w-50 mx-auto">
        <h5
          class="card-header d-flex align-items-center justify-content-between"
        >
          <div class="m-1">
            <img
              class="me-2"
              width="30"
              height="30"
              src="../assets/logo.png"
              alt=""
            />
            <span>Furqon Maulana</span>
          </div>
          <div class="d-flex">
            <span class="btn btn-dark mx-2"
              ><i class="fa-solid fa-phone"></i
            ></span>
            <span class="btn btn-dark mx-2"
              ><i class="fa-solid fa-video"></i
            ></span>
            <span class="btn btn-dark mx-2"
              ><i class="fa-solid fa-xmark"></i
            ></span>
          </div>
        </h5>
        <div class="card-body d-flex mt-2">
          <img
            class="me-3"
            width="30"
            height="30"
            src="../assets/logo.png"
            alt=""
          />
          <p class="bg-warning rounded-3 px-3 py-2">
            Isuk jam 10an we dikampusawdawdaw
          </p>
        </div>
        <div class="card-body d-flex justify-content-end">
          <p class="bg-warning rounded-3 px-3 py-2">Heeh kumaha sia we</p>
          <img
            class="ms-3"
            width="30"
            height="30"
            src="../assets/logo.png"
            alt=""
          />
        </div>
        <div class="card-body d-flex">
          <img
            class="me-3"
            width="30"
            height="30"
            src="../assets/logo.png"
            alt=""
          />
          <p class="bg-warning rounded-3 px-3 py-2">Kehed teh</p>
        </div>
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Ketik pesan"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Kirim
          </button>
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
  name: "KonsulView",
  components: {
    NavbarView,
    FooterView,
  },
};
</script>

<style>
</style>