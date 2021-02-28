<template>
    <ProjectCardModal v-if="openModal" :project="project" @childCloseModal="changeModalStatus">
    </ProjectCardModal>

  <div :class="['projectCard', textColor, cardBgColor]">
    <img class="bgImg" :src="project.Thumbnail" />
    <div class="contentSimple">
      <div class="contentButtonDivSimple">
        <div class="contentDivSimple">
          <div class="titleSimple">
            {{ project.Title }}
          </div>
          <div class="hashtagSimple">
            <Hashtags :hashtags="project.Hashtags"/>
          </div>
          <div class="introSimple">
            {{ project.ForShort }}
          </div>
        </div>
        <div class="showMore" @click="changeModalStatus">More</div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCardModal from "@/components/ProjectCardModal.vue";
import Hashtags from "@/components/Hashtags.vue"

export default {
  components: {
    ProjectCardModal,
    Hashtags,
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
  height: 400px;
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
  @apply block absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-60;
  content: "";
  z-index: 1;
}

.bgImg {
  @apply object-cover w-full h-full;
  filter: blur(2px);
  -webkit-filter: blur(2px);
  /* transition: all 0.5s ease; */
}
/* .projectCard:hover .bgImg {
  transform: scale(1.1);
} */

.contentSimple {
  @apply absolute text-center text-white p-4;
  @apply top-0 bottom-0 left-0 right-0;
  z-index: 2;
}
/* Control content and button */
.contentButtonDivSimple {
  @apply flex flex-col h-full;
}
.contentDivSimple {
  @apply flex-grow flex flex-col justify-center;
}
.titleSimple {
  @apply text-2xl font-semibold mb-6;
}
/* .hashtagSimple {
  @apply mx-auto;
} */
.introSimple {
  @apply text-xs md:text-sm leading-relaxed tracking-wide my-4;
}
.showMore {
  @apply cursor-pointer bg-white text-black;
  @apply border border-white rounded-md;
  @apply text-sm md:text-base font-semibold;
  @apply py-2;
  transition: all 0.3s ease;
  -webkit-tap-highlight-color: transparent;
}
.showMore:hover {
  @apply border-opacity-100 bg-transparent text-white border border-white;
}


</style>
