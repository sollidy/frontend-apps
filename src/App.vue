<template>
  <div class='app'>
    <form>
        <h4>New Post</h4>
      <input class='input' type="text" placeholder="Title" />
      <input class='input' type="text" placeholder="Description" />
      <button class='btn' @click="createPost">Create</button>
    </form>
    <div class="post" v-for="post in posts" v-bind:key="post.id">
      <div><strong>Title:</strong>{{ post.title }}</div>
      <div><strong>Description:</strong>{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: "JS 1", body: "about this" },
        { id: 3, title: "JS 2", body: "about this" },
        { id: 4, title: "JS 3", body: "about this" },
      ],
    };
  },
  methods: {
      createPost() {
          
      }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
.input {
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 15px;
}
.app{
    padding: 20px 20px;
}
form {
    display: flex;
    flex-direction: column;
}
.btn {
    margin-top: 15px;
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal
}
</style>
