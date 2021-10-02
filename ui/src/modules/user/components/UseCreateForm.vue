<template>
  <h2>Create a new user</h2>
  <n-form class="form" :model="user" :label-align="formOption.labelAlignment">
    <n-form-item label="Full Name" path="user.fullName">
      <n-input v-model:value="user.fullName" placeholder="Input Full Name" />
    </n-form-item>
    <n-form-item label="Username" path="user.username">
      <n-input v-model:value="user.username" placeholder="Input Name" />
    </n-form-item>
    <n-form-item label="Password" path="user.password">
      <n-input v-model:value="user.password" placeholder="Input Password" />
    </n-form-item>
    <n-form-item label="Email" path="user.email">
      <n-input v-model:value="user.email" placeholder="Input Email" />
    </n-form-item>
    <n-form-item label="Role" path="user.role">
      <n-select
        v-model:value="user.role"
        :options="roles"
        placeholder="Input Role"
      />
    </n-form-item>
    <n-form-item class="actions">
      <n-button @click="submitUserForm" color="#8eafbc">Save</n-button>
    </n-form-item>
  </n-form>
</template>

<script lang="ts">
import { NButton, NForm, NFormItem, NInput, NSelect } from "naive-ui";
import { ref } from "vue";
import { User } from "@/modules/user/user.type";
import { useUserStore } from "@/modules/user/user.store";

export default {
  components: {
    NButton,
    NForm,
    NFormItem,
    NInput,
    NSelect,
  },

  setup() {
    const user = ref<User>({
      key: "",
      fullName: "",
      username: "",
      password: "",
      email: "",
      role: 1,
    });

    const formOption = {
      labelPlacement: "left",
      labelAlignment: "left",
    };

    const roles = [
      { value: 1, label: "Admin" },
      { value: 2, label: "Moderator" },
      { value: 3, label: "User" },
    ];

    const store = useUserStore();

    function submitUserForm() {
      store.createUser(user.value);
    }

    return {
      user,
      roles,
      formOption,
      submitUserForm,
    };
  },
};
</script>

<style>
.form {
  width: 250px;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
