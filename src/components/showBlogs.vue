<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div v-for="blog in filteredBlogs" class="single-blog">
      <router-link v-bind:to="'/blog/' + blog.id"
        ><h2>{{ blog.title }}</h2></router-link
      >
      <!--custome directive -->

      <article>{{ blog.content }}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin";
export default {
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  methods: {},
  created() {
    this.$http
      .get(
        "https://blog-3fc12-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
      )
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        let blogsArray = [];
        for (let key in data) {
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        this.blogs = blogsArray;
      });
  },
  computed: {},
  mixins: [searchMixin]
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0px auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>

If you guys want to search the blog title and the blog content add: return
blog.title.match(userSearch) || blog.body.match(userSearch); If you also want to
make a case insensitive search put the user input search in lowercase to match
the raw array: this.search.toLowerCase();
