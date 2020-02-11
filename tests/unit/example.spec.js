import { shallowMount } from '@vue/test-utils'
import FormList from '@/components/FormList.vue'

describe('FormList.vue', () => {
  it('renders props.todo when passed', () => {
    const todo = objectHash
    const wrapper = shallowMount(FormList, {
      propsData: { todo }
    })
    expect(wrapper.text()).toMatch(todo)
  })
})
