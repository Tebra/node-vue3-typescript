<template>
  <n-data-table :columns="columns" :data="data"></n-data-table>
</template>

<script lang="ts">
import { h, onMounted } from "vue";
import { NDataTable, NButton } from "naive-ui";
import { useUserStore } from "@/modules/user/user.store";
import { storeToRefs } from "pinia";
import { User } from "@/modules/user/user.type";

const setupColumns = ({
  removeUser,
}: {
  removeUser: (userKey: string) => void;
}) => {
  return [
    {
      title: "Name",
      key: "fullName",
    },
    {
      title: "Email",
      key: "email",
    },
    {
      title: "Role",
      key: "role",
    },
    {
      title: "Actions",
      key: "actions",
      render(row: User) {
        return h(
          NButton,
          {
            size: "small",
            onClick: () => removeUser(row.key),
          },
          {
            default: () => "Delete",
          }
        );
      },
    },
  ];
};

export default {
  components: {
    NDataTable,
  },

  setup() {
    const store = useUserStore();
    const { users } = storeToRefs(store);

    onMounted(() => {
      store.loadAllUsers();
    });

    return {
      data: users,
      columns: setupColumns({
        removeUser(userKey: string) {
          store.deleteUser(userKey);
        },
      }),
    };
  },
};
</script>

<style></style>
