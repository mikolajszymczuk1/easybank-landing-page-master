<template>
    <!-- Article Card component -->
    <div class="bg-white rounded-[5px] overflow-hidden font-main">
        <div class="bg-no-repeat bg-cover bg-center h-[200px]"
            :style="`background-image: url('/articleImages/${ this.articleImage }')`"
            data-test="article-image"
        ></div>
        
        <div class="px-[27px] pt-[27px] pb-[40px] lg:pb-[10px] xl:pb-[35px]">
            <!-- Author -->
            <p class="text-grayish-blue text-[0.6em] font-light mb-[8px]"
                data-test="article-author"
            >
                <slot name="article-author"></slot>
            </p>

            <!-- Article title -->
            <h3 class="text-dark-blue font-light text-[1em] leading-[20px] mb-[10px] cursor-pointer hover:text-lime-green"
                data-test="article-title"
            >
                <slot name="article-title"></slot>
            </h3>

            <!-- Article content -->
            <p class="text-grayish-blue text-[0.8em] leading-[18px]"
                data-test="article-content"
            >
                <slot name="article-content"></slot>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleCard",
        props: {
            articleImage: {
                type: String,
                required: true
            }
        }
    }
</script>
