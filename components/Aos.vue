<template>
  <div>
    <h1 class="testo">GALLERY</h1>

    <hr class="my-5" />

    <ul class="list-unstyled row">
      <li
        v-for="(item, index) in img"
        :key="index"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-once="true"
        class="align-items-center col-sm-6 d-flex flex-column justify-content-center mb-5"
      >
        <img :src="getImg(item)" class="img-fluid mr-3" />

        <div class="">
          <h2 class="h4">{{ item }}</h2>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: ["Animals", "Arch", "Nature", "People", "Tech"]
    };
  },
  methods: {
    getImg(name) {
      return "https://placeimg.com/400/225/" + name.toLowerCase();
    }
  }
};
</script>