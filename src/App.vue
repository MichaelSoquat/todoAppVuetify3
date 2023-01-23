<template>
  <div>
    <AppBar />
    <router-view
      @add-task="addTask"
      @changeStatus="changeStatus"
      @openDeleteWindow="openDeleteWindow"
      @pushTaskToTrash="pushTaskToTrash"
      @deleteFromTrash="deleteFromTrash"
      :trash="trash"
      :tasks="tasks"
      :deleteTask="deleteTask"
    ></router-view>
  </div>
</template>

<script lang="ts" >
import AppBar from "./layouts/default/AppBar.vue";
import router from "./router/index";

export default {
  components: {
    AppBar,
  },
  data() {
    return {
      trash: [],
      deleteTask: {},
      tasks: [],
    };
  },
  async created() {
    this.tasks = [
      {
        id: 1,
        title: "Einkaufen gehen",
        description: "Bitte Butter und Milch kaufen",
        status: true,
        created: "2021-01-01",
        updated: "2021-01-01",
      },
      {
        id: 2,
        title: "Haushalt machen",
        description: "Bitte Fenster putzen, Staub saugen und Boden wischen",
        status: false,
        created: "2021-01-01",
        updated: "2021-01-01",
      },
      {
        id: 3,
        title: "Rasen mähen",
        description: "Bitte Rasen mähen und Schnittgut entsorgen",
        status: true,
        created: "2021-01-01",
        updated: "2021-01-01",
      },
    ];
  },
  methods: {
    changeStatus(id: number) {
      console.log(id);
      console.log(this.tasks);
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        task.status = task.status === true ? false : true;
      }
    },
    addTask(newTask: any) {
      newTask.id = this.tasks.length + 1;
      this.tasks.push(newTask);
    },
    openDeleteWindow(id: number) {
      this.deleteTask = this.tasks.find((task) => task.id === id);
      router.push("/aufgabe-loeschen/" + id);
    },
    pushTaskToTrash(id: number) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        this.trash.push(task);
        this.tasks = this.tasks.filter((task) => task.id !== id);
      }
      router.push("/");
    },
    deleteFromTrash(id: number) {
      this.trash = this.trash.filter((task) => task.id !== id);
    },
  },
};
</script>
