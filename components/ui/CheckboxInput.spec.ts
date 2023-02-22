import { describe, expect, it } from 'vitest'
import CheckboxInput from './CheckboxInput.vue'
import { mount } from '@vue/test-utils'

const checkboxSelector = '[data-testid=checkbox]'
const checkboxIndicatorSelector = '[data-testid=chekboxIndicator]'

describe('CheckboxInput', async () => {
    it('renders properly with name prop only', () => {
        const wrapper = mount(CheckboxInput, {
            props: {
                name: 'test'
            }
        })

        expect(wrapper.get(checkboxIndicatorSelector).classes()).toContain('bg-pink-500')
        expect(wrapper.get(checkboxIndicatorSelector).isVisible()).toBe(false)

    })
})