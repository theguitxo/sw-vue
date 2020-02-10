<template>
  <FileBase
    :title="getTitle"
  >
    <v-container>
      <FileField
        name="Model"
        :value="data.model"
      />
      <FileField
        name="Manufacturer"
        :value="data.manufacturer"
      />
      <FileField
        name="Cost in credits"
        :value="data.cost_in_credits"
      />
      <FileField
        name="Length"
        :value="data.length"
      />
      <FileField
        name="Max. atmosphering speed"
        :value="data.max_atmosphering_speed"
      />
      <FileField
        name="Crew"
        :value="data.crew"
      />
      <FileField
        name="Passengers"
        :value="data.passengers"
      />
      <FileField
        name="Cargo capacity"
        :value="data.cargo_capacity"
      />
      <FileField
        name="Consumables"
        :value="data.consumables"
      />
      <FileField
        name="Hyperdrive rating"
        :value="data.hyperdrive_rating"
      />
      <FileField
        name="MGLT"
        :value="data.MGLT"
      />
      <FileField
        name="Starship class"
        :value="data.starship_class"
      />
      <FileField
        name="Pilots"
        :value="getPilots"
      />
      <FileField
        name="Films"
        :value="getFilms"
      />
    </v-container>
  </FileBase>
</template>

<script src="./Starships.js"></script>
