<template>
  <div v-if="posts.length > 0">
    <h3>Posts List:</h3>
    <transition-group name="list">
      <post-item
        @remove="$emit('remove', post)"
        :post="post"
        v-for="post in posts"
        :key="post.id"
      />
    </transition-group>
  </div>
  <h2 v-else>List is empty!</h2>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(150px);
}
.list-move {
  transition: transform 0.4s ease;
}
</style>