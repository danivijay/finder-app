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
                  @click.stop="sharePop = true"
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
                  @click.stop="reportPop = true"
                  >Report now</v-btn>
              </v-flex>
            </v-layout>
          </v-container>

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
  },
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
