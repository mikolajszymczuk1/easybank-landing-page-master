import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HamburgerIcon from "@/components/icons/HamburgerIcon.vue";

describe("HamburgerIcon.vue", () => {
    it("When click on component, should change active status from true to false or from false to true", async () => {
        const wrapper = mount(HamburgerIcon);
        expect(wrapper.vm.isActive).toBeFalsy();
        await wrapper.find("[data-test=hamburger-button]").trigger("click");
        expect(wrapper.vm.isActive).toBeTruthy();
        await wrapper.find("[data-test=hamburger-button]").trigger("click");
        expect(wrapper.vm.isActive).toBeFalsy();
    });

    it("Based on component active status, should show basic icon or close icon", async () => {
        const wrapper = mount(HamburgerIcon);
        
        expect(wrapper.find("[data-test=base-icon]").exists()).toBeTruthy();
        expect(wrapper.find("[data-test=close-icon]").exists()).toBeFalsy();
        await wrapper.find("[data-test=hamburger-button]").trigger("click");
        expect(wrapper.find("[data-test=base-icon]").exists()).toBeFalsy();
        expect(wrapper.find("[data-test=close-icon]").exists()).toBeTruthy();
    });

    it("After click, should emit custom event", async () => {
        const wrapper = mount(HamburgerIcon);
        
        expect(wrapper.emitted("active-menu")).toBeFalsy();
        await wrapper.find("[data-test=hamburger-button]").trigger("click");
        expect(wrapper.emitted("active-menu")[0]).toEqual([true]);
        await wrapper.find("[data-test=hamburger-button]").trigger("click");
        expect(wrapper.emitted("active-menu")[1]).toEqual([false]);
    });
});
