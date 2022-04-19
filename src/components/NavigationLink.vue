<template>
    <!-- Navigation link component -->
    <a class="font-main inline-block relative overflow-hidden"
        :href="linkAddress"
        :class="getClasses"
    >
        <slot></slot>
    </a>
</template>

<script>
    export default {
        name: "NavigationLink",
        props: {
            linkAddress: {
                type: String,
                required: true
            },
            isMenuLink: {
                type: Boolean
            },
            isDarkMode: {
                type: Boolean
            }
        },
        computed: {
            getClasses() {
                let classes = "";
                classes += this.isMenuLink ? 'text-[1.1em] before:hidden md:text-[0.9em] md:text-grayish-blue md:py-[30px] md:hover:text-dark-blue md:before:block before:absolute before:bottom-0 before:w-[100%] before:h-[5px] before:bg-gradient-to-r before:from-lime-green before:to-bright-cyan before:translate-y-[100%] hover:before:translate-y-0 ' : 'text-[0.9em] ';
                classes += this.isDarkMode ? 'text-white' : 'text-dark-blue';
                return classes;
            }
        }
    }
</script>
