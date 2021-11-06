import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import UserCreateForm from '@/modules/user/components/UseCreateForm.vue';
import { useUserStore } from '@/modules/user/user.store';

describe('UserCreateForm.vue', () => {
  it('Should load create form', () => {
    const msg = 'User';
    const wrapper = mount(UserCreateForm, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    const userStore = useUserStore();

    expect(wrapper.text()).to.include(msg);
  });
});
