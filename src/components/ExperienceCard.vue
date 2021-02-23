<template>
  <div class="card">
    <div class="imgDiv">
      <img :src="Info.Img" class="rounded-t-lg"/>
    </div>
    <div :class="['content', textColor]">
      <div class="title">{{ Info.Title }}</div>
      <div class="time">{{ Info.StartTime }} ~ {{ Info.EndTime }}</div>
      <div class="location">{{ Info.Location }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Info: {
      type: Object,
    },
  },
  computed: {
      textColor(){
          return this.$store.state.textColor
      }
  },
};
</script>

<style scoped>
.card {
    max-width: 300px;
    @apply bg-blue-300 bg-opacity-20 rounded-lg z-10;
}
.imgDiv {
    @apply mb-2;
}

.content {
    @apply p-2 text-xs md:text-sm
}
.title {
    @apply text-sm md:text-base font-semibold
}
.time {
    @apply italic;
}
</style>
