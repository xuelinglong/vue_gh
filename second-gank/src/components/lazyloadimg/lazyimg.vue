<template>
  <img v-lazy="imgObj" lazy="loading" class="img-box" />
</template>
<script>
  export default {
    name: 'v-img',
    props: ['imgUrl'],
    computed: {
      imgObj() {
        return `${this.imgUrl}?imageView2/0/w/200`;
      }
    }
  };</script>

<style>
  img[lazy=loading] {
    /*your style here*/
  }
  img[lazy=error] {
    /*your style here*/
  }
  img[lazy=loaded] {
    /*your style here*/
  }
  /*
  or background-image
  */
  .img-box[lazy=loading] {
    /*your style here*/
  }
  .img-box[lazy=error] {
    /*your style here*/
  }
  .img-box[lazy=loaded] {
    /*your style here*/
  }
</style>