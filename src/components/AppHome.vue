<template>
  <v-container elevation-1 class="mt-2">
    <v-layout  row wrap class="mb-3">
      <v-flex xs8 md10>
            <v-text-field
              label="Search person"
            ></v-text-field>
      </v-flex>
      <v-flex xs4 md2>
            <v-btn
            block
            large
            color="primary"
            >
            <v-icon left>search</v-icon>
            Search</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4>
        <v-card>

          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex xs7>
                  <div>
                    <h3 class="headline mb-0">John Doe</h3>
                    <h4>ID: 1247854</h4>
                    <div>Missing from 20-10-2017</div>
                  </div>
              </v-flex>
              <v-flex xs5>
                <v-card-media
                    src="https://firebasestorage.googleapis.com/v0/b/finder-app-ed8f0.appspot.com/o/2.png?alt=media&token=ceb12c81-cf94-4f7d-b5ca-3cd410907ecf"
                    height="125px"
                    contain
                  ></v-card-media>
              </v-flex>
            </v-layout>
          </v-container>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat dark left color="success">Share</v-btn>
            <v-btn flat dark center color="error">Report</v-btn>
            <v-btn flat dark right color="info" to="/case/1">Details</v-btn>
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
