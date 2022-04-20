import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LogoIcon from "@/components/icons/LogoIcon.vue";

describe("LogoIcon.vue", () => {
    describe("Should set correct class based on boolean prop value", () => {
        it("With out prop", () => {
            const wrapper = mount(LogoIcon);
            expect(wrapper.find("[data-test=logo-icon]").classes()).not.toContain("fill-white");
        });

        it("With prop", () => {
            const wrapper = mount(LogoIcon, {
                props: {
                    isDarkMode: true
                }
            });

            expect(wrapper.find("[data-test=logo-icon]").classes()).toContain("fill-white");
        });
    });
});
