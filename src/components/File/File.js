import FileBase from '@/components/File/Sections/FileBase/FileBase.vue';
import FileField from '@/components/File/Sections/FileField/FileField.vue';

export default {
  name: 'MixinFile',

  props: {
    data: Object,
  },

  computed: {
    getTitle() {
      const title = this.data.title !== undefined ? this.data.title : this.data.name;
      return title;
    },
    getCharacters() {
      return this.getListData('characters.data');
    },
    getPlanets() {
      return this.getListData('planets.data');
    },
    getStarships() {
      return this.getListData('starships.data');
    },
    getVehicles() {
      return this.getListData('vehicles.data');
    },
    getSpecies() {
      return this.getListData('species.data');
    },
    getFilms() {
      return this.getListData('films.data');
    },
    getResidents() {
      return this.getListData('residents.data');
    },
    getPeople() {
      return this.getListData('people.data');
    },
    getPilots() {
      return this.getListData('pilots.data');
    },
    getHomeworld() {
      return this.getListData('homeworld.data');
    },
  },

  components: {
    FileBase,
    FileField,
  },

  methods: {
    getListData(name) {
      const elements = this.data[name].map((element) => {
        const result = element.title !== undefined ? element.title : element.name;
        return result;
      });

      return elements.length > 0 ? elements : 'n/a';
    },
  },
};
