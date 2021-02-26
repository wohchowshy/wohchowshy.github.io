<template>
    <ProjectCardModal v-if="openModal" :project="project" @childCloseModal="changeModalStatus">
    </ProjectCardModal>

  <div :class="['projectCard', textColor, cardBgColor]">
    <img class="bgImg" :src="project.Imgs[0]" />
    <div class="contentSimple">
      <div class="relativeAlign">
        <div class="titleSimple">
          {{ project.Title }}
        </div>
        <div class="introSimple">
          {{ project.ForShort }}
        </div>
        <div class="showMore" @click="changeModalStatus">More</div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCardModal from "@/components/ProjectCardModal.vue";

export default {
  components: {
    ProjectCardModal,
  },
  props: {
    project: {
      type: Object,
    },
  },
  data() {
    return {
      openModal: false,
    };
  },
  methods: {
    changeModalStatus: function () {
      this.openModal = !this.openModal;
      //   console.log(this.openModal);
    },
  },
  computed: {
    isDark() {
      return this.$store.state.isDark;
    },
    textColor() {
      if (this.isDark) {
        return ["card-textColor-dark"];
      } else {
        return ["card-textColor-light"];
      }
    },
    cardBgColor() {
      return this.$store.state.cardBgColor;
    },
  },
};
</script>

<style scoped>
.projectCard {
  @apply relative rounded-lg shadow-2xl w-full h-full overflow-hidden;
  max-height: 400px;
}
@media (max-width: 767px) {
  .projectCard {
    height: 300px;
  }
  .bgImg {
    min-height: 300px;
  }
}
/* .projectCard (max-width:) */
.projectCard::before {
  @apply block absolute top-0 left-0 w-full h-full bg-gray-600 bg-opacity-60;
  content: "";
  z-index: 1;
}

.bgImg {
  /* @apply h-full w-full; */
  /* min-height: 400px; */
  width: auto;
  height: auto;
  filter: blur(3px);
  -webkit-filter: blur(3px);
  /* transition: all 0.5s ease; */
}
/* .projectCard:hover .bgImg {
  transform: scale(1.1);
} */

.contentSimple {
  @apply absolute text-center text-white m-auto p-4;
  @apply top-0 bottom-0 left-0 right-0;
  z-index: 2;
}
.relativeAlign {
  position: relative;
  /* bottom: 0px; */
  top: 50%;
  transform: translateY(-50%);
}
.titleSimple {
  @apply text-xl font-bold mb-6;
}
.introSimple {
  @apply text-base;
}
.showMore {
  @apply mt-10 m-auto cursor-pointer;
  @apply border-t border-b border-opacity-0;
  @apply font-bold bg-gray-100 text-black;
  max-width: 100px;
  transition: all 0.3s ease;
  -webkit-tap-highlight-color: transparent;
}
.showMore:hover {
  @apply font-light border-opacity-100 bg-transparent text-white;
}


</style>
