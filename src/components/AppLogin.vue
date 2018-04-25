<template>
  <v-container>
    <v-layout  row wrap>
      <v-flex xs12 sm8 offset-sm2>
        <form>
          <v-text-field
            label="E-mail"
            type="text"
            required
          ></v-text-field>
          <v-text-field
            label="Passoword"
            type="password"
            required
          ></v-text-field>
          <v-btn
            to="/admin"
            large
            color="primary"
            >Login</v-btn>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
