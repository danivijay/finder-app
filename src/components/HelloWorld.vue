<template>
  <v-container fluid>
    <v-layout  row wrap>
      <v-flex xs12 class="mb-3">
        <v-card>
          <v-card-text>
            <v-text-field
              label="Search person"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
            >Search</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs6 sm4 md3 lg2 class="pl-2">
        <v-card>
          <v-card-media src="https://lh4.googleusercontent.com/-M6gI9NNnr0k/AAAAAAAAAAI/AAAAAAAAAB8/8quus1Eouio/photo.jpg" height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Ramesh</h3>
              <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs6 sm4 md3 lg2 class="pl-2">
        <v-card>
          <v-card-media src="https://lh4.googleusercontent.com/-M6gI9NNnr0k/AAAAAAAAAAI/AAAAAAAAAB8/8quus1Eouio/photo.jpg" height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Suresh</h3>
              <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs6 sm4 md3 lg2 class="pl-2">
        <v-card>
          <v-card-media src="https://lh4.googleusercontent.com/-M6gI9NNnr0k/AAAAAAAAAAI/AAAAAAAAAB8/8quus1Eouio/photo.jpg" height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Sateesh</h3>
              <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Details</v-btn>
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
