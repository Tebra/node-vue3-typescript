import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import UserCreateForm from '@/modules/user/components/UseCreateForm.vue';

describe('UserCreateForm.vue', () => {
  it('Should load create form', () => {
    const msg = 'User';
    const wrapper = shallowMount(UserCreateForm);
    expect(wrapper.text()).to.include(msg);
  });
});
