<template>
  <teleport to="body">
      <div class="modal-mask" @click.self="closeModal">
        <div class="closeBtn">
          <i class="fas fa-times closeIcon" @click.stop="closeModal"></i>
        </div>
        <div class="container">
          <div class="content">
            <div class="title">{{ project.Title }}</div>
            <div class="img"></div>
            <div class="detail">
              <Marked :content="project.Detail" />
            </div>
          </div>
        </div>
      </div>
  </teleport>
</template>

<script>
import Marked from "@/components/Marked.vue";
export default {
  components: {
    Marked,
  },
  emits: ["childCloseModal"],
  props: {
    project: {
      type: Object,
    },
  },
  methods: {
    closeModal() {
      this.$emit("childCloseModal");
    },
  },
};
</script>

<style scoped>
.modal-mask {
  z-index: 9998;
  background-color: rgba(0, 0, 0, 0.8);
  @apply fixed top-0 left-0 bottom-0 right-0 w-full h-screen;
  @apply flex justify-center items-stretch;
  transition: opacity .5s ease;
}

.closeBtn {
  @apply absolute right-4 top-4;
}
.closeIcon {
  @apply cursor-pointer text-white;
  font-size: 200%;
}

/* Below are CSSs of modal Component */
.container {
  @apply flex-grow relative;
  @apply mx-5 md:mx-40 my-20;
  @apply px-4 md:px-8 py-8;
  @apply max-w-sm sm:max-w-screen-sm md:max-w-screen-md;
  @apply bg-white;
  transition: all .5s ease;
}

.title {
  @apply text-xl md:text-2xl font-bold;
  @apply border-b-2 border-gray-800;
}

</style>
