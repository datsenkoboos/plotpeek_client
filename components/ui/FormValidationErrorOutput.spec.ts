import { describe, expect, it } from 'vitest';
import FormValidationErrorOutput from './FormValidationErrorOutput.vue';
import { mount } from '@vue/test-utils';
import { Validation } from '@vuelidate/core';

const errorListSelector = '[data-testid=errorList]'

describe('FormValidationErrorOutput', async () => {
    it('renders invisible without error list', () => {
        const wrapper = mount(FormValidationErrorOutput, {
            props: {
                v$: {
                    $errors: []
                } as Validation
            }
        })

        expect(wrapper.get(errorListSelector).isVisible()).toBe(false)
    })
    it('renders visible with error list', () => {
        const wrapper = mount(FormValidationErrorOutput, {
            props: {
                v$: {
                    $errors: [
                        {
                            $message: 'error'
                        }
                    ]
                } as Validation
            }

        })

        expect(wrapper.get(errorListSelector).isVisible()).toBe(true)
    })
    it('renders first error message', () => {
        const wrapper = mount(FormValidationErrorOutput, {
            props: {
                v$: {
                    $errors: [
                        {
                            $message: 'first'
                        },
                        {
                            $message: 'second'
                        },
                    ]
                } as Validation
            }
        })

        expect(wrapper.get(errorListSelector).text()).toBe('first')
    })
})