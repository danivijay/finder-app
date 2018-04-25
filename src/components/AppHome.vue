<template>
  <v-container>
    <v-layout  row wrap class="mb-3">
      <v-flex xs9>
            <v-text-field
              label="Search person"
            ></v-text-field>
      </v-flex>
      <v-flex xs3>
            <v-btn
            block
            large
            color="primary"
            >Search</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 class="pl-2">
        <v-card>
          <v-card-media src="https://lh4.googleusercontent.com/-M6gI9NNnr0k/AAAAAAAAAAI/AAAAAAAAAB8/8quus1Eouio/photo.jpg" height="400px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">John Doe</h3>
              <h4>ID: 1247854</h4>
              <div>Missing from Vytila, Kochi from 20-10-2017</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark color="success">Share</v-btn>
            <v-btn dark color="error">Report</v-btn>
            <v-btn dark color="info">Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
