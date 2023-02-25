import LoadingScreen from "./LoadingScreen.vue";
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';

const loadingScreenSelector = '[data-testid=loading]'

describe('LoadingScreen', async () => {
    it('is not visible with "loading" prop set to "false"', () => {
        const wrapper = mount(LoadingScreen, {
            props: {
                loading: false
            }
        })

        expect(wrapper.get(loadingScreenSelector).isVisible()).toBe(false);
    })
    it('is visible with "loading" prop set to "true"', () => {
        const wrapper = mount(LoadingScreen, {
            props: {
                loading: true
            }
        })

        expect(wrapper.get(loadingScreenSelector).isVisible()).toBe(true);
    })
})