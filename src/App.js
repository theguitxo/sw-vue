import ToolBar from '@/components/ToolBar/ToolBar.vue';
import SnackBar from '@/components/SnackBar/SnackBar.vue';

export default {
  name: 'App',

  created() {
    this.$router.push(['/']);
  },

  components: {
    ToolBar,
    SnackBar,
  },
};
