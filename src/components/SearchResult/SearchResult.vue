<template>
  <v-container>
    <v-layout
      column      
    >
      <v-flex
        xs12
      >
        <v-data-table
          :items="getTableData"
          hide-actions
        >

          <template 
            v-slot:items="props"
          >
            <td>{{ props.item.field1 }}</td>
            <td class="text-xs-right">{{ props.item.field2 }}</td>
            <td class="text-xs-right">{{ props.item.field3 }}</td>
            <td class="text-xs-right">{{ props.item.field4 }}</td>
          </template>

          <!-- People -->
          <!-- <template 
            v-if="isPeople"
            v-slot:items="props"
          >
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.birth_year }}</td>
            <td class="text-xs-right">{{ props.item.eye_color }}</td>
            <td class="text-xs-right">{{ props.item.gender }}</td>
          </template> -->

          <!-- Films -->
          <!-- <template
            v-if="isFilms"
            v-slot:items="films"
          >
            <td>{{ films.item.episode_id }}</td>
            <td class="text-xs-right">{{ films.item.title }}</td>
            <td class="text-xs-right">{{ films.item.director }}</td>
            <td class="text-xs-right">{{ films.item.producer }}</td>
          </template> -->

          <!-- Starships -->
          <!-- <template
            v-if="isStarships"
            v-slot:items="props"
          >
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.model }}</td>
            <td class="text-xs-right">{{ props.item.starship_class }}</td>
            <td class="text-xs-right">{{ props.item.manufacturer }}</td>
          </template> -->

          <!-- Planets -->
          <!-- <template
            v-if="isPlanets"
            v-slot:items="props"
          >
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.diameter }}</td>
            <td class="text-xs-right">{{ props.item.population }}</td>
          </template> -->
          
          <!-- Species -->
          <!-- <template
            v-if="isSpecies"
            v-slot:items="props"
          >
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.classification }}</td>
            <td class="text-xs-right">{{ props.item.designation }}</td>
          </template> -->

          <!-- Vehicles -->
          <!-- <template
            v-if="isVehicles"
            v-slot:items="props"
          >
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.model }}</td>
            <td class="text-xs-right">{{ props.item.vehicle_class }}</td>
            <td class="text-xs-right">{{ props.item.manufacturer }}</td>
          </template> -->

          <template v-slot:no-data>
            <v-alert :value="true" color="error" icon="warning">
              Sorry, nothing to display here :(
            </v-alert>
          </template>

        </v-data-table>
        
        <div class="text-xs-center pt-2">
          <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
        </div>

      </v-flex>
    </v-layout>    
  </v-container>
</template>

<script src="./SearchResult.js"></script>
