import { describe, expect, it } from 'vitest';
import FormRequestErrorOutput from './FormRequestErrorOutput.vue';
import { mount } from '@vue/test-utils';

const errorPopupSelector = '[data-testid=errorPopup]';
const errorTitleSelector = '[data-testid=errorTitle]';
const closeButtonSelector = '[data-testid=closeButton]';

describe('FormRequestErrorOutput', async () => {
    it('is not visible with "open" prop set to "false"', () => {
        const wrapper = mount(FormRequestErrorOutput, {
            props: {
                open: false
            }
        })

        expect(wrapper.get(errorPopupSelector).isVisible()).toBe(false);
    })
    it('is visible with "open" prop set to "true"', () => {
        const wrapper = mount(FormRequestErrorOutput, {
            props: {
                open: false
            }
        })

        expect(wrapper.get(errorPopupSelector).isVisible()).toBe(false);
    })
    it('renders unexpected error output without "status" prop provided', () => {
        const wrapper = mount(FormRequestErrorOutput, {
            props: {
                open: false
            }
        })

        expect(wrapper.get(errorTitleSelector).text()).toBe('Unexpected error occured');
    })
    it('renders wrong login credentials error output with "status" prop = "401"', () => {
        const wrapper = mount(FormRequestErrorOutput, {
            props: {
                open: false,
                status: 401
            }
        })

        expect(wrapper.get(errorTitleSelector).text()).toBe('Wrong login credentials');
    })
    it('renders confirm email error output with "status" prop = "403"', () => {
        const wrapper = mount(FormRequestErrorOutput, {
            props: {
                open: false,
                status: 403
            }
        })

        expect(wrapper.get(errorTitleSelector).text()).toBe('Confirm email adress');
    })
    it('emits "close" event on close button click', async () => {
        const wrapper = mount(FormRequestErrorOutput, {
          props: {
            open: false,
          },
        });
    
        await wrapper.get(closeButtonSelector).trigger('click');
        expect(wrapper.emitted()).toHaveProperty('close');
        expect(wrapper.emitted('close')).toHaveLength(1);
    });
})