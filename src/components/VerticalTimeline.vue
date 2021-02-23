<template>
  <div class="timeline">
    <div class="dotContainer">
      <div class="dot">
        <slot name="card"></slot>
      </div>
      <slot name="time"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.timeline {
  border-color: inherit;
}

.timeline::after {
  content: "";
  border-color: inherit;
  @apply left-0 top-0;
  @apply absolute h-full w-0 border-2;
}

.dotContainer {
  border-color: inherit;
  @apply relative w-full h-auto;
}

.dot {
  border-color: inherit;
  @apply my-10
}

.dot::before,
.dot::after {
  content: "";
  border-color: inherit;
  width: 24px;
  height: 24px;
  left: -10px; /* -24 / 2 + 2*/
  @apply absolute z-50 rounded-full border-4 bg-white;
}

.dot::before {
  top: -12px;
  animation-name: blink;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
.dot::after {
  bottom: -12px;
}

@keyframes blink {
  0% {
    transform: scale(1)
  }
  5% {
    transform: scale(1.1)
  }
  10% {
    transform: scale(1)
  }
  15% {
    transform: scale(1.1)
  }
  20% {
    transform: scale(1)
  }
  25% {
    transform: scale(1.1)
  }
  100% {
    transform: scale(1)
  }
}

</style>
