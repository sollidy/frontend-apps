<template>
  <div>
      <div>
          <button @click="addLike">Add Like</button> 
          <button @click="addDislike">Add dislikes</button> 
      </div>
    <div>
      likes <strong>{{ likes }}</strong>
    </div>
    <div>
      dislikes <strong>{{ dislikes }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likes: 0,
      dislikes: 0,
    };
  },
  methods: {
    addLike() {
      this.likes += 1;
    },
    addDislike() {
      this.dislikes += 1;
    },
  },
};
</script>

<style>
</style>
