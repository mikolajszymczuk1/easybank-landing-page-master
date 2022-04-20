import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import FeatureBlock from "@/components/FeatureBlock.vue";

describe("FeatureBlock.vue", () => {
    it("Should has correct slots", () => {
        const wrapper = mount(FeatureBlock, {
            slots: {
                "icon": "<span data-test='icon'>test icon</span>",
                "block-heading": "test heading",
                "block-text": "test content"
            }
        });

        expect(wrapper.find("[data-test=icon]").text()).toBe("test icon");
        expect(wrapper.find("[data-test=block-heading]").text()).toBe("test heading");
        expect(wrapper.find("[data-test=block-text]").text()).toBe("test content");
    });
});
