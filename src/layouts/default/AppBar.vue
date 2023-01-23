<template>
  <v-row>
    <v-col cols="12" sm="6" offset-sm="3">
      <v-card height="48px">
        <v-card-title class="bg-blue">
          <v-spacer></v-spacer>

          <v-menu>
            <template v-slot:activator="{ props }">
              <div class="menu">
                <span class="text-h5">Aufgabenliste</span>
                <v-icon icon="mdi-dots-vertical" v-bind="props"></v-icon>
              </div>
            </template>

            <v-list>
              <v-list-item
                class="list-item"
                v-for="(item, i) in items"
                :key="i"
                :to="{ path: item.routeName }"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>

              </v-list-item>
            </v-list>
          </v-menu>
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
export default {
  data() {
    return {
      items: [
        { title: "Alle Aufgaben", routeName: "/" },
        { title: "Neue Aufgabe hinzufügen", routeName: "/neue-aufgabe" },
        { title: "Gelöschte Aufgaben", routeName: "/geloeschte-aufgaben" },
      ],
    };
  },
};
</script>

<style>
@media (min-width: 600px) {
  .v-col-sm-6 {
    max-width: 100% !important;
    flex: 0 0 100% !important;
  }
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .list-item {
    cursor: pointer;
  }
  .list-item:hover {
    background-color: #e0e0e0;
  }
}
</style>
