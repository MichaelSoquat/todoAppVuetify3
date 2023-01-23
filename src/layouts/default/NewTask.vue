<template>
  <v-form ref="form">
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            label="Name"
            v-model="name"
            :rules="nameRules"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-textarea
            label="Beschreibung"
            v-model="description"
            :rules="descriptionRules"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn color="primary" @click="submit">Submit</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import router from "../../router/index.ts";
export default {
  data() {
    return {
      name: "",
      description: "",
      nameRules: [(v) => !!v || "Name is required"],
      descriptionRules: [(v) => !!v || "Description is required"],
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate().then((valid) => {
        if (valid) {
          this.$emit("add-task", {
            id: "",
            title: this.name,
            description: this.description,
            status: false,
            created: new Date(),
            updated: new Date(),
          });
        }
        router.push("/");
      });
    },
  },
};
</script>
