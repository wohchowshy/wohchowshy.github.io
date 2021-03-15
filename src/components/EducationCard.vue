<template>
    <div class="educationDiv">
        <div class="Words">
            Education
        </div>
        <div v-for="item in Info" :key="item" class="educationCard">
            <div class="firstRow">
                <div class="img"> <img :src="item.Img" alt="Oops!" /> </div>
                <div class="headerContent">
                    <div class="title">{{ item.Title }}</div>
                    <div class="duration"> {{ item.StartTime }} ~ {{ item.EndTime }} </div>
                    <div class="department"> {{item.Department}} </div>
                    <div class="status"> {{item.Degree}} </div>
                </div>
            </div>
            <div class="horizontalLine"/>
            <div class="secondRow">
                <span class="font-semibold">Related Courses:</span>
                <div class="mt-2">
                    <ul class="list-disc list-inside"> 
                        <li v-for="course in item.Courses" :key="course">{{ course }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Info from "@/assets/data/education.js"
export default {
    computed: {
        Info() {
            return Info;
        }
    }
}
</script>

<style scoped>
.Words {
    @apply text-5xl max-w-max mb-8 pb-4 m-auto font-light;
    @apply border-b border-gray-400;
}
.educationDiv {
    /* @apply flex flex-col justify-between m-auto; */
    @apply m-auto mb-40;
    /* @apply h-screen; */
    @apply max-w-max;
}
.educationCard {
    @apply py-4 px-4 md:px-8 mx-4 my-8;
    @apply bg-white;
    @apply text-xs md:text-sm;
    @apply rounded-md shadow-md;
}
.firstRow {
    @apply flex gap-4 items-center mb-4;
}
.img {
    @apply w-16 md:w-20;
}
.title {
    @apply text-sm md:text-lg font-semibold;
}
.duration {
    @apply italic text-gray-400;
}
.horizontalLine {
    @apply border-t border-gray-200 my-2;
}
.secondRow {
    @apply mt-4;
}
</style>