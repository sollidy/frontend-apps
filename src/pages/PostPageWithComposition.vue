<template>
  <h1>Posts with composition</h1>
  <my-input v-model="searchQuery" placeholder="Find" />
  <div class="app__btns">
    <my-button>Create new post</my-button>
    <my-select v-model="selectedSort" :options="sortOptions" />
  </div>

  <my-dialog v-model:show="dialogVisible">
    <post-form />
  </my-dialog>
  <post-list
    :posts="sortedAndSearchedPosts"
    v-if="!isPostsLoading"
  />
  <div v-else>Loading...</div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyDialog from "@/components/UI/MyDialog.vue";
import MyButton from "@/components/UI/MyButton.vue";
import MyInput from "@/components/UI/MyInput.vue";
import {usePosts} from "@/hooks/usePosts"
import {useSortedPosts} from "@/hooks/useSortedPosts"
import {useSortedAndSearchedPosts} from "@/hooks/useSortedAndSearchedPosts"

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
      sortOptions: [
        { value: "title", name: "By title" },
        { value: "body", name: "By description" },
      ],
    };
  },
  setup(props) {
    const { posts, totalPages, isPostsLoading } = usePosts(100);
    const { sortedPosts, selectedSort } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } =
      useSortedAndSearchedPosts(sortedPosts);
    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
    };
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
