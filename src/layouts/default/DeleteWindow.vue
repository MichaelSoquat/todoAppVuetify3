<template>
  <div>
    <v-card class="mx-auto">
      <v-card-title>Aufgabe</v-card-title>
      <v-card-subtitle>Id: {{ deleteTask.id }}</v-card-subtitle>
      <v-card-text>
        <div>Name: {{ deleteTask.title }}</div>
        <div>Beschreibung: {{ deleteTask.description }}</div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        Wollen Sie die Aufgabe wirklich in den Papierkorb verschieben?
        <v-btn color="error" @click="$emit('pushTaskToTrash', deleteTask.id)"
          >Ja</v-btn
        >
        <v-btn color="success" @click="closeDeleteWindow">Nein</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import router from "../../router/index.ts";
export default {
  props: {
    deleteTask: {},
  },
  methods: {
    closeDeleteWindow() {
      router.push("/");
    },
  },
};
</script>
