<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-alert type="success" :value="true">
          The person is still missing on {{dateAndTime}}
        </v-alert>
      </v-flex>
      <v-flex xs12>
        <v-card>

          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex xs12 sm5>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/finder-app-ed8f0.appspot.com/o/2.png?alt=media&token=ceb12c81-cf94-4f7d-b5ca-3cd410907ecf"
                    style="width:100%"
                    contain
                  />
                <v-btn
                  large
                  color="success"
                  block
                  >Share</v-btn>
              </v-flex>
              <v-flex xs12 sm7>
                <div>
                  <h3 class="headline mb-0">John Doe</h3>
                  <h4>ID: 1247854</h4>
                  <br>
                  <div>
                    <p>Missing from <b>20-10-2017</b>. Last seen on <b>Vytila, Kochi</b>.</p>

                    <p>He was wearing <b>blue jeans</b> and <b>black t-shirt</b> on the time of missing</p>
                  </div>
                  <h4>Age: 24</h4>
                  <h4>Gender: Male</h4>
                </div>
                <v-btn
                  flat
                  small
                  color="error"
                  >Report now</v-btn>
              </v-flex>
            </v-layout>
          </v-container>

        </v-card>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    dateAndTime () {
      let d = new Date()
      return d.toString()
    }
  }

}
</script>

<style>

</style>
