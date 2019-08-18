export default {
  name: 'ToolBar',
  data: () => ({
    items: [
      {
        title: 'Home',
        route: '/',
      },
      {
        title: 'Search',
        route: '/search',
      },
      {
        title: 'About...',
        route: '/about',
      },
    ],
  }),

  mounted() {
    this.$router.push(['/']);
  },
  components: {
  },
  methods: {
  },
};
