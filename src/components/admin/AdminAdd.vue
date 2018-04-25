<template>
  <v-container>
    <v-layout  row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2 elevation-1 class="white pl-2 pr-2 pt-2 pb-2">
        <v-text-field
          label="Name"
          type="text"
          ></v-text-field>

          <!-- Date picker 1 -->
          <v-menu
          ref="menu"
          lazy
          :close-on-content-click="false"
          v-model="menu"
          transition="scale-transition"
          offset-y
          full-width
          :nudge-right="40"
          min-width="290px"
          :return-value.sync="date"
        >
          <v-text-field
            slot="activator"
            label="Date of birth"
            v-model="date"
            prepend-icon="event"
            readonly
          ></v-text-field>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
          </v-date-picker>
        </v-menu>

        <v-text-field
          type="file"
          ></v-text-field>
        <v-text-field
          label="Last seen location"
          type="text"
          ></v-text-field>

        <!-- Date picker 2 -->
          <v-menu
          ref="menu2"
          lazy
          :close-on-content-click="false"
          v-model="menu2"
          transition="scale-transition"
          offset-y
          full-width
          :nudge-right="40"
          min-width="290px"
          :return-value.sync="date"
        >
          <v-text-field
            slot="activator"
            label="Last seen date"
            v-model="date"
            prepend-icon="event"
            readonly
          ></v-text-field>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
          </v-date-picker>
        </v-menu>

        <v-text-field
          label="Police station"
          type="text"
          ></v-text-field>
        <v-text-field
          label="Other details"
          multi-line
          type="text"
          ></v-text-field>
        <v-text-field
          label="Custom message"
          multi-line
          type="text"
          ></v-text-field>
        <v-btn
          large
          color="primary"
          >Submit</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    date: null,
    menu: false,
    menu2: false
  })
}
</script>

<style>

</style>
