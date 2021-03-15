<template>
  <ProjectCardModal v-if="openModal" :project="project" @childCloseModal="changeModalStatus"></ProjectCardModal>

  <div class="projectCard">
    <img class="bgImg" :src="project.Thumbnail" />
    <div class="contentSimple">
      <div class="contentButtonDivSimple">
        <div class="contentDivSimple">
          <div class="titleSimple">
            {{ project.Title }}
          </div>
          <div>
            <Hashtags class="justify-center" :hashtags="project.SimpleHashtags"/>
          </div>
          <div class="introSimple"> 
            {{ project.ForShort }}
          </div>
        </div>
        <div class="showMore" @click="changeModalStatus">
          <i class="fas fa-external-link-alt"></i> More
        </div>
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
    },
  },
};
</script>

<style scoped>
.projectCard {
  @apply relative rounded-md shadow-md w-full h-full overflow-hidden;
  @apply h-72 md:h-96;
}
.projectCard::before {
  @apply block absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-60;
  content: "";
  z-index: 1;
}

.bgImg {
  @apply object-cover w-full h-full;
  filter: blur(2px);
  -webkit-filter: blur(2px);
  transition: all 0.5s ease;
}
.projectCard:hover .bgImg {
  transform: scale(1.1);
}

.contentSimple {
  @apply absolute text-center text-white;
  @apply p-4;
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
.introSimple {
  @apply text-xs md:text-sm leading-relaxed tracking-wide my-4;
}
.showMore {
  @apply cursor-pointer;
  @apply transition duration-500 transform border border-white rounded-md shadow;
  @apply text-sm md:text-base font-semibold;
  @apply py-2;
  -webkit-tap-highlight-color: transparent;
}
.showMore:hover {
  @apply transition duration-100 transform shadow-xl scale-95;
}


</style>
