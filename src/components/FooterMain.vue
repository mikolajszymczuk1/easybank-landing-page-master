<template>
    <!-- Footer Main component -->
    <footer class="bg-dark-blue pt-[40px] pb-[40px] md:flex md:justify-between md:items-center md:py-[40px] md:px-[8%] lg:px-[11.5%] lg:pt-[50px] lg:pb-[45px] xl:py-[70px]">
        <div class="mb-[35px] sm:flex sm:justify-evenly md:justify-around md:mb-0 basis-[65%] lg:justify-start">
            <div class="text-center flex flex-col justify-center items-center mb-[35px] md:mb-0 lg:mr-[19%]">
                <LogoIcon class="mb-[35px] lg:mb-[55px]"
                    is-dark-mode
                />

                <div class="flex justify-center items-center">
                    <FacebookIcon class="mr-[15px] w-[25px] h-auto md:w-[20px] transition-colors fill-white hover:fill-lime-green cursor-pointer" />
                    <YoutubeIcon class="mr-[15px] w-[25px] h-auto md:w-[20px] transition-colors fill-white hover:fill-lime-green cursor-pointer" />
                    <TwitterIcon class="mr-[15px] w-[25px] h-auto md:w-[20px] transition-colors fill-white hover:fill-lime-green cursor-pointer" />
                    <PinterestIcon class="mr-[15px] w-[25px] h-auto md:w-[20px] transition-colors fill-white hover:fill-lime-green cursor-pointer" />
                    <InstagramIcon class="w-[25px] h-auto md:w-[20px] fill-white transition-colors hover:fill-lime-green cursor-pointer" />
                </div>
            </div>

            <div class="flex flex-col items-center mb-[12px] sm:items-start md:mb-0 lg:mr-[17%]">
                <NavigationLink class="mb-[12px]"
                    link-address="#AboutUs"
                    is-dark-mode
                >
                    About Us
                </NavigationLink>

                <NavigationLink class="mb-[12px]"
                    link-address="#Contact"
                    is-dark-mode
                >
                    Contact
                </NavigationLink>

                <NavigationLink link-address="#Blog"
                    is-dark-mode
                >
                    Blog
                </NavigationLink>
            </div>

            <div class="flex flex-col items-center sm:items-start">
                <NavigationLink class="mb-[15px]"
                    link-address="#Careers"
                    is-dark-mode
                >
                    Careers
                </NavigationLink>

                <NavigationLink class="mb-[15px]"
                    link-address="#Support"
                    is-dark-mode
                >
                    Support
                </NavigationLink>
                
                <NavigationLink link-address="#PrivacyPolicy"
                    is-dark-mode
                >
                    Privacy Policy
                </NavigationLink>
            </div>
        </div>

        <div class="text-center md:text-right basis-[35%]">
            <InviteButton class="mb-[20px] lg:mb-[30px]" />
            
            <p class="font-main text-[0.9em] text-grayish-blue/80">
                &copy; Easybank. All Rights Reserved
            </p>
        </div>
    </footer>
</template>

<script>
    import LogoIcon from "@/components/icons/LogoIcon.vue";
    import FacebookIcon from "@/components/icons/FacebookIcon.vue";
    import YoutubeIcon from "@/components/icons/YoutubeIcon.vue";
    import TwitterIcon from "@/components/icons/TwitterIcon.vue";
    import PinterestIcon from "@/components/icons/PinterestIcon.vue";
    import InstagramIcon from "@/components/icons/InstagramIcon.vue";
    import NavigationLink from "@/components/NavigationLink.vue";
    import InviteButton from "@/components/buttons/InviteButton.vue";

    export default {
        name: "FooterMain",
        components: {
            LogoIcon,
            FacebookIcon,
            YoutubeIcon,
            TwitterIcon,
            PinterestIcon,
            InstagramIcon,
            NavigationLink,
            InviteButton
        }
    }
</script>
