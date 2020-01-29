import CardTitle from '@/components/Card/Sections/CardTitle/CardTitle.vue';
import CardActions from '@/components/Card/Sections/CardActions/CardActions.vue';

export default {
  name: 'CardBase',

  props: {
    data: Object,
    title: String,
  },

  components: {
    CardTitle,
    CardActions,
  },
};
