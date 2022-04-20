import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import NavigationBar from "@/components/NavigationBar.vue";
import HamburgerIcon from "@/components/icons/HamburgerIcon.vue";

describe("NavigationBar.vue", () => {
    it("When hamburger icon component is clicked, should correctly change menu active status", async () => {
        const wrapper = mount(NavigationBar);
        
        expect(wrapper.vm.isMenuActive).toBeFalsy();
        wrapper.findComponent(HamburgerIcon).vm.$emit("active-menu", true);
        expect(wrapper.vm.isMenuActive).toBeTruthy();
        wrapper.findComponent(HamburgerIcon).vm.$emit("active-menu", false);
        expect(wrapper.vm.isMenuActive).toBeFalsy();
    });

    it("Based on active status, should set correct class", async () => {
        const wrapper = mount(NavigationBar);

        expect(wrapper.find("[data-test=navigation-bar]").classes()).toContain("before:hidden");
        expect(wrapper.find("[data-test=links-container]").classes()).toContain("hidden");
        
        await wrapper.findComponent(HamburgerIcon).find("[data-test=hamburger-button]").trigger("click");

        expect(wrapper.find("[data-test=navigation-bar]").classes()).not.toContain("before:hidden");
        expect(wrapper.find("[data-test=links-container]").classes()).not.toContain("hidden");
        expect(wrapper.find("[data-test=links-container]").classes()).toContain("flex");
    });
});
