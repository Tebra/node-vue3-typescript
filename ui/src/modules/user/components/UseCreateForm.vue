<template>
  <div class="container">
    <n-form :label-width="80" :model="user">
      <n-form-item label="Name" path="user.username">
        <n-input v-model:value="user.username" placeholder="Input Name" />
      </n-form-item>
      <n-form-item label="Password" path="user.password">
        <n-input v-model:value="user.password" placeholder="Input Password" />
      </n-form-item>
      <n-form-item>
        <n-button @click="submitUserForm">Validate</n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script lang="ts">
import { NButton, NForm, NFormItem, NInput } from "naive-ui";
import { ref } from "vue";
import { User } from "@/modules/user/user.type";

export default {
  components: {
    NButton,
    NForm,
    NFormItem,
    NInput,
  },

  setup() {
    const user = ref<User>({
      id: "",
      username: "",
      fullName: "",
      email: "",
      role: 1,
      password: "",
    });

    function submitUserForm() {
      console.log("Current User Ref:", user);
      console.log("Current User value", user.value);
    }

    return {
      user,
      submitUserForm,
    };
  },
};
</script>

<style>
.container {
  padding: 100px;
}
</style>
