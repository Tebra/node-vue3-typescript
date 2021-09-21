<template>
  <div class="container">
    <n-form :label-width="80" ref="user">
      <n-form-item label="Name" path="user.name">
        <n-input v-model:value="user.fullName" placeholder="Input Name" />
      </n-form-item>
      <n-form-item label="Age" path="user.username">
        <n-input placeholder="Input Age" v-model:value="user.age" />
      </n-form-item>
      <n-form-item>
        <n-button @click="submitUserForm">Validate</n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script>
import { NButton, NForm, NFormItem, NInput } from "naive-ui";
import { ref } from "vue";
import User from "@/modules/user/user.type";

export default {
  components: {
    NButton,
    NForm,
    NFormItem,
    NInput,
  },

  setup() {
    //prettier-ignore
    const user = ref<User>({
      username: "Test"
    });
    console.log("The user now", user);
    debugger;

    function submitUserForm() {
      debugger;
      console.log("Current User", user);
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
