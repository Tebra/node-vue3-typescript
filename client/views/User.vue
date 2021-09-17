<template>
  <h1>Hi I am the User View</h1>
  <user-create-form></user-create-form>
</template>

<script>
import { defineComponent } from "vue";
import UserCreateForm from "@/modules/user/components/UseCreateForm.vue";

export default defineComponent({
  name: "User",
  components: {
    UserCreateForm,
  },
});
</script>

<style></style>
