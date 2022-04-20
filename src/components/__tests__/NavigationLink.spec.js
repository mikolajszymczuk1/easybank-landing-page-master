import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import NavigationLink from "@/components/NavigationLink.vue";

describe("NavigationLink.vue", () => {
    it("Should set correct href value", () => {
        const wrapper = mount(NavigationLink, {
            props: {
                linkAddress: "#test"
            }
        });

        expect(wrapper.find("[data-test=link]").attributes("href")).toBe("#test");
    });

    it("Should has correct slot content", () => {
        const wrapper = mount(NavigationLink, {
            props: {
                linkAddress: "#test"
            },
            slots: {
                default: "<span data-test='link-text'>default test slot content</span>"
            }
        });

        expect(wrapper.find("[data-test=link-text]").text()).toBe("default test slot content");
    });

    describe("Should correctly change classes based on boolean props", () => {
        it("Normal state", () => {
            const wrapper = mount(NavigationLink, {
                props: {
                    linkAddress: "#test"
                }
            });
            
            const classes = ["text-[0.9em]", "hover:text-lime-green", "text-dark-blue"];
            classes.forEach(el => expect(wrapper.find("[data-test=link]").classes()).toContain(el));
        });

        it("With props state", () => {
            const wrapper = mount(NavigationLink, {
                props: {
                    linkAddress: "#test",
                    isMenuLink: true,
                    isDarkMode: true
                }
            });
            
            const classesA = ["text-[0.9em]", "hover:text-lime-green", "text-dark-blue"];
            const classesB = ["text-[1.1em]", "before:hidden", "md:text-[0.9em]", "md:text-grayish-blue", "md:py-[30px]", "md:hover:text-dark-blue", "md:before:block", "before:absolute", "before:bottom-0", "before:w-[100%]", "before:h-[5px]", "before:bg-gradient-to-r", "before:from-lime-green", "before:to-bright-cyan", "before:translate-y-[100%]", "hover:before:translate-y-0", "text-white"];

            classesA.forEach(el => expect(wrapper.find("[data-test=link]").classes()).not.toContain(el));
            classesB.forEach(el => expect(wrapper.find("[data-test=link]").classes()).toContain(el));
        });
    });
});
