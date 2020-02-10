import { mapGetters } from 'vuex';
import fileConstants from '@/constants/file';
import searchOptionMixin from '@/mixins/searchOption';

const {
  GET_DATA,
} = fileConstants.GETTERS;

export default {
  name: 'File',

  mixins: [
    searchOptionMixin,
  ],

  components: {
    FilmsFile: () => import('@/components/File/Types/Films/Films.vue'),
    PeopleFile: () => import('@/components/File/Types/People/People.vue'),
    PlanetsFile: () => import('@/components/File/Types/Planets/Planets.vue'),
    SpeciesFile: () => import('@/components/File/Types/Species/Species.vue'),
    StarshipsFile: () => import('@/components/File/Types/Starships/Starships.vue'),
    VehiclesFile: () => import('@/components/File/Types/Vehicles/Vehicles.vue'),
  },

  computed: {
    ...mapGetters({
      getData: `${fileConstants.STORE_NAME}/${GET_DATA}`,
    }),
  },

  created() {
    this.goHomeNoSearchOption();
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
