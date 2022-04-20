<template>
    <!-- Feature Block component -->
    <div class="text-center font-main md:text-left">
        <slot name="icon"></slot>
        
        <h3 class="text-dark-blue text-[1.2em] font-light mb-[15px] mt-[25px] lg:text-[1.45em] lg:mt-[35px] lg:mb-[24px]"
            data-test="block-heading"
        >
            <slot name="block-heading"></slot>
        </h3>

        <p class="text-grayish-blue text-[0.9em] leading-[25px] lg:text-[0.98em] lg:leading-[26px]"
            data-test="block-text"
        >
            <slot name="block-text"></slot>
        </p>
    </div>
</template>
