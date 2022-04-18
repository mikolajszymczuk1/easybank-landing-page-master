<template>
    <!-- Navigation bar component -->
    <nav class="flex justify-between items-center py-[23px] px-[27px] relative bg-white before:fixed before:top-[0] before:left-[0] before:w-[100%] before:h-[100%] before:bg-dark-blue/25 before:-z-[1] z-1">
        <LogoIcon />
        
        <!-- Links container -->
        <div class="absolute flex-col justify-center items-center bg-white rounded-[5px] py-[30px] w-[87%] left-[50%] top-[93px] translate-x-[-50%]"
            :class="isMenuActive ? 'flex' : 'hidden'"
        >
            <NavigationLink class="mb-[18px]" link-address="#Home" is-menu-link>Home</NavigationLink>
            <NavigationLink class="mb-[18px]" link-address="#About" is-menu-link>About</NavigationLink>
            <NavigationLink class="mb-[18px]" link-address="#Contact" is-menu-link>Contact</NavigationLink>
            <NavigationLink class="mb-[18px]" link-address="#Blog" is-menu-link>Blog</NavigationLink>
            <NavigationLink link-address="#Careers" is-menu-link>Careers</NavigationLink>
        </div>
        
        <HamburgerIcon @active-menu="toggleMenu" />
    </nav>
</template>

<script>
    import LogoIcon from "@/components/icons/LogoIcon.vue";
    import HamburgerIcon from "@/components/icons/HamburgerIcon.vue";
    import NavigationLink from "@/components/NavigationLink.vue";

    export default {
        name: "NavigationBar",
        components: {
            LogoIcon,
            HamburgerIcon,
            NavigationLink
        },
        data() {
            return {
                isMenuActive: false
            }
        },
        methods: {
            toggleMenu(status) {
                this.isMenuActive = status;
            }
        }
    }
</script>
