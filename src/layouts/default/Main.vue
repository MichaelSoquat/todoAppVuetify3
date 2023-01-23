<template>
  <div class="center">
    <div v-for="task in tasks" :key="task.id">
      <v-card
        @dblclick="$emit('changeStatus', task.id)"
        :class="[task.status ? 'border-open' : 'border-closed', 'card']"
        width="400"
      >
        <v-btn @click="$emit('openDeleteWindow', task.id)" class="delete-icon">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
        <template v-slot:title>
          {{ task.title }}
        </template>
        <template v-slot:text>
          {{ task.description }}
        </template>
      </v-card>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    tasks: Array,
  },
  emits: ["changeStatus", "openDeleteWindow"],
};
</script>

<style scoped>
.center {
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card {
  margin-bottom: 20px;
}

.border-closed {
  border-left: 5px solid red;
}

.border-open {
  border-left: 5px solid green;
}

.delete-icon {
  height: 20px;
  width: 20px;
  position: relative;
  bottom: 0;
  float: right;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
