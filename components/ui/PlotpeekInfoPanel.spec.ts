import PlotpeekInfoPanel from './PlotpeekInfoPanel.vue';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';

const likeCounterSelector = '[data-testid=likeCounter]'

describe('PlotpeekInfoPanel', () => {
    it('renders like counter', () => {
        const wrapper = mount(PlotpeekInfoPanel, {
            props: {
                likes: 29
            }
        })

        expect(wrapper.get(likeCounterSelector).text()).toBe('29')
    })
})