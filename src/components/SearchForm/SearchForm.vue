<template>
  <v-form
    v-model="valid"
  >
    <v-container>
      <v-row>
        <v-col>
          <v-select
            v-model="option"
            :items="getSearchItems"
            item-text="text"
            item-value="value"
            label="What do you want search?"
            hint="Required"
            :persistent-hint="true"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="query"
            label="Enter keywords to search"
            hint="Required. Only alphabetic characters"
            :persistent-hint="true"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn
            :disabled="disableSubmit"
            color="primary"
            @click="executeSearch"
          >
            Search
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script src="./SearchForm.js"></script>
