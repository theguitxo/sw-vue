export default {
  name: 'FileField',

  props: {
    name: String,
    value: [String, Array],
  },

  computed: {
    isList() {
      return Array.isArray(this.value);
    },
  },
};
