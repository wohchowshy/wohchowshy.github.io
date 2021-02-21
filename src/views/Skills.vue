<template>
    <div class="h-full w-full">
        <div class="pt-40 text-gray-500 text-center text-3xl">
            To Be Published ! {{ skill }}
        </div>
    </div>
</template>

<script>

export default {
  components: {
  },
  computed: {
      skill(){
          return this.$route.params.skill;
      }
  },
}
</script>