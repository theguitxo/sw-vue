<template>
  <FileBase
    :title="getTitle"
  >
    <v-container>
      <FileField
        name="Classification"
        :value="data.classification"
      />
      <FileField
        name="Designation"
        :value="data.designation"
      />
      <FileField
        name="Average height"
        :value="data.average_height"
      />
      <FileField
        name="Skin colors"
        :value="data.skin_colors"
      />
      <FileField
        name="Hair colors"
        :value="data.hair_colors"
      />
      <FileField
        name="Eye colors"
        :value="data.eye_colors"
      />
      <FileField
        name="Average lifespan"
        :value="data.average_lifespan"
      />
      <FileField
        name="Homeworld"
        :value="getHomeworld"
      />
      <FileField
        name="Language"
        :value="data.language"
      />
      <FileField
        name="Films"
        :value="getFilms"
      />
      <FileField
        name="People"
        :value="getPeople"
      />
    </v-container>
  </FileBase>
</template>

<script src="./Species.js"></script>
