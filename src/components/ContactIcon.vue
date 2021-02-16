<template>
  <div class="contactIcon">
    <!-- github -->
    <a href="https://github.com/wohchowshy" target="_blank">
      <i class="fab fa-github pbm-start common"></i>
    </a>
    <!-- LinkedIn -->
    <a href="https://www.linkedin.com/in/yizzy/" target="_blank">
        <i class="fab fa-linkedin pbm-inner common"></i>
    </a>
    <!-- facebook -->
    <a href="https://www.facebook.com/profile.php?id=100009646023619" target="_blank">
        <i class="fab fa-facebook-square pbm-inner common"></i>
    </a>
    <!-- email -->
    <a href="mailto:chsh110768@gmail.com" target="_blank">
        <i class="fas fa-envelope pbm-end common"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: "ContactIcon",
};
</script>

<style scoped>
.contactIcon {
  @apply flex justify-center items-center text-xl mt-5 md:mt-8;
  -webkit-tap-highlight-color: transparent;
}
.pbm-inner {
  @apply mx-2;
}
.pbm-start {
  @apply mr-2;
}
.pbm-end {
  @apply ml-2;
}
.common {
  @apply cursor-pointer;
}
</style>
