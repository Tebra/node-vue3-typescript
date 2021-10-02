<template>
  <h1>User management view</h1>
  <n-grid class="user-grid" :cols="8" :x-gap="1">
    <n-grid-item :offset="1">
      <user-create-form></user-create-form>
    </n-grid-item>
    <n-grid-item :offset="1" :span="4">
      <user-table></user-table>
    </n-grid-item>
  </n-grid>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NGrid, NGridItem } from "naive-ui";
import UserCreateForm from "@/modules/user/components/UseCreateForm.vue";
import UserTable from "@/modules/user/components/UserTable.vue";

export default defineComponent({
  name: "User",
  components: {
    UserCreateForm,
    UserTable,
    NGrid,
    NGridItem,
  },
});
</script>

<style></style>
