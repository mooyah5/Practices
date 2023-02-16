<template>
  <div class="home">
    <div class="home_image_box">
      <img class="work_out_1" src="../assets/images/work_out_1.jpg" />
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"

export default {
  name: "HomeView",
  components: {
    HelloWorld
  }
}
</script>
