<template>
  <div class="about">
    <NavbarView />
    <div class="container">
      <p>ini hal about</p>
    </div>
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