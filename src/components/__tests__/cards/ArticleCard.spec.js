import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ArticleCard from "@/components/cards/ArticleCard.vue";

describe("ArticleCard.vue", () => {
    it("Component should set correct background-image property", () => {
        const wrapper = mount(ArticleCard, {
            props: {
                articleImage: "testImage.png"
            }
        });

        expect(wrapper.find("[data-test=article-image]")
            .attributes("style"))
            .toBe("background-image: url(/articleImages/testImage.png);");
    });

    it("Should has correct props", () => {
        const wrapper = mount(ArticleCard, {
            props: {
                articleImage: "testImage.png"
            },
            slots: {
                "article-author": "test author",
                "article-title": "test title",
                "article-content": "test content"
            }
        });

        expect(wrapper.find("[data-test=article-author]").text()).toBe("test author");
        expect(wrapper.find("[data-test=article-title]").text()).toBe("test title");
        expect(wrapper.find("[data-test=article-content]").text()).toBe("test content");
    });
});
