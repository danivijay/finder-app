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
            <v-btn flat dark left color="success" @click.stop="sharePop = true">Share</v-btn>
            <v-btn flat dark center color="error" @click.stop="reportPop = true">Report</v-btn>
            <v-btn flat dark right color="info" to="/case/1">Details</v-btn>
          </v-card-actions>
        </v-card>

      </v-flex>
    </v-layout>

    <v-dialog
        v-model="sharePop"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
        <v-card tile>
          <v-toolbar card dark color="success">
            <v-btn icon @click.native="sharePop = false" dark>
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Share to</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <p>*Missing Person Alert*</p>
            <p>കൊച്ചി വിപിനടുത്തുവച്ചു ജോൺ ഡോ എന്നയാളെ കാണാതായിട്ടുണ്ട്. ബ്ലൂ ജീൻസും റെഡ് ഷർട്ട് ഉം ആണ് വേഷം. ഇയാളെ കാണുകയാണെങ്കിൽ ഉടനെ പോലീസ് സ്റ്റേഷനിൽ ബന്ധപ്പെടുക.</p>
            <p>കേസ് ഐ ഡി: 1247854</p>
            <p>വിശദവിവരങ്ങൾ: https://missingpersonverifier.gov.in/1247854</p>
            <p>മുകളിൽ കൊടുത്ത വെബ്പേജ്  സന്ദർശിച് വിവരങ്ങൾ യാഥാർഥ്യവും ഇപ്പോഴും നിലവിലുള്ളതാണോ എന്നും ഉറപ്പുവരുത്തുക.</p>
            <p>Please visit the webpage mentioned above to ensure the credibility and validity of details."</p>
            <v-btn
              large
              color="success"
              >WhatsApp</v-btn>
            <v-btn
              large
              color="primary"
              >Facebook</v-btn>
            <v-btn
              large
              color="default"
              >Copy message</v-btn>
          </v-card-text>
          <div style="flex: 1 1 auto;"></div>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="reportPop"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
        <v-card tile>
          <v-toolbar card dark color="error">
            <v-btn icon @click.native="reportPop = false" dark>
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Report now</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-alert type="warning" :value="true">
              We may contact you for detailed information.
            </v-alert>
            <v-text-field
              label="Message"
              multi-line
              type="text"
              ></v-text-field>
            <v-text-field
              type="file"
              ></v-text-field>
            <v-text-field
              label="Your contact number"
              type="text"
              ></v-text-field>
            <v-btn
              large
              color="primary"
              >Submit</v-btn>
          </v-card-text>
          <div style="flex: 1 1 auto;"></div>
        </v-card>
      </v-dialog>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      sharePop: false,
      reportPop: false
    }
  }
}
</script>


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
