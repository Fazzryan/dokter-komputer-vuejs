<template>
  <div class="service">
    <NavbarView />
    <div class="container">
      <p>ini hal service</p>
    </div>
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