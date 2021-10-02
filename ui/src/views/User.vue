<template>
  <h1>Hi I am the User View</h1>
  <div class="user-example">
    <user-create-form></user-create-form>
    <user-table></user-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserCreateForm from "@/modules/user/components/UseCreateForm.vue";
import UserTable from "@/modules/user/components/UserTable.vue";

export default defineComponent({
  name: "User",
  components: {
    UserCreateForm,
    UserTable,
  },
});
</script>

<style>
.user-example {
  display: flex;
  padding: 10px;
  justify-content: space-around;
}
</style>
