import FileTitle from '@/components/File/Sections/FileTitle/FileTitle.vue';

export default {
  name: 'FileBase',

  props: {
    title: String,
  },

  components: {
    FileTitle,
  },
};
