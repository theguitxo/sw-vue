import CardBase from '@/components/Card/Sections/CardBase/CardBase.vue';

export default {
  name: 'MixinCard',

  props: {
    data: Object,
  },

  components: {
    CardBase,
  },
};
