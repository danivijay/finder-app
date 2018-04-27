<template>
  <v-container>
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
    <v-layout  row wrap>
      <v-flex xs12 class="mb-3">
        <v-btn
          to="/admin/add"
          large
          color="primary"
          >Add case</v-btn>
      </v-flex>
    </v-layout>
    <v-layout  row wrap>
      <v-flex xs12>

        <v-data-table
          :headers="headers"
          :items="items"
          hide-actions
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.Id }}</td>
            <td class="text-xs-right">{{ props.item.Name }}</td>
            <td class="text-xs-right">{{ props.item.Station }}</td>
            <td class="text-xs-right">{{ props.item.District }}</td>
            <td class="text-xs-right">{{ props.item.Status }}</td>
            <td class="justify-center layout px-0">
              <v-btn icon class="mx-0">
                <v-icon color="green">check</v-icon>
              </v-btn>
              <v-btn icon class="mx-0">
                <v-icon color="teal">edit</v-icon>
              </v-btn>
              <v-btn icon class="mx-0" @click="deleteItem(props.item)">
                <v-icon color="pink">delete</v-icon>
              </v-btn>
            </td>
          </template>
          <template slot="no-data">
            <v-btn color="primary" @click="initialize">Reset</v-btn>
          </template>
        </v-data-table>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        text: 'ID',
        align: 'left',
        value: 'Id'
      },
      { text: 'Name', align: 'right', value: 'Name' },
      { text: 'Station', align: 'right', value: 'Station' },
      { text: 'District', align: 'right', value: 'District' },
      { text: 'Status', align: 'right', value: 'Status' },
      { text: 'Actions', align: 'right', value: 'name', sortable: false }
    ],
    items: []
  }),

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.items = [
        {
          Id: '1214514',
          Name: 'John Doe',
          Station: 'Kochi',
          District: 'Ernakulam',
          Status: 'Missing'
        },
        {
          Id: '2456518',
          Name: 'Jane Doe',
          Station: 'Ponnani',
          District: 'Malappuram',
          Status: 'Found'
        }
      ]
    },

    editItem (item) {
      // TODO
    },

    deleteItem (item) {
      const index = this.items.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.items.splice(index, 1)
    }
  }
}
</script>

<style>

</style>
