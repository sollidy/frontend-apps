<template>
  <h1>Posts with store</h1>
  <my-input
    :model-value="searchQuery"
    @update:model-value="setSearchQuery"
    placeholder="Find"
  />
  <div class="app__btns">
    <my-button @click="showDialog">Create new post</my-button>
    <my-select
      :model-value="selectedSort"
      @update:model-value="setSelectedSort"
      :options="sortOptions"
    />
  </div>

  <my-dialog v-model:show="dialogVisible">
    <post-form @create="createPost" />
  </my-dialog>
  <post-list
    @remove="removePost"
    :posts="sortedAndSearchedPosts"
    v-if="!isPostsLoading"
  />
  <div v-else>Loading...</div>
  <div v-intersection="loadMorePosts" class="observer"></div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyDialog from "@/components/UI/MyDialog.vue";
import MyButton from "@/components/UI/MyButton.vue";
import MyInput from "@/components/UI/MyInput.vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: {
    PostForm,
    PostList,
    MyDialog,
    MyButton,
    MyInput,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort"
    }),
    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: "post/fetchPosts",
    }),
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
  mounted() {
    this.setPage(1)
    this.fetchPosts();
  },
    unmounted() {
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.isPostsLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedAndSearchedPosts: "post/sortedAndSearchedPosts",
    }),
  },
};
</script>

<style>
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
}
.current-page {
  border: 2px solid green;
}
.observer {
  height: 30px;
  background: moccasin;
}
</style>
