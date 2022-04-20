<template>
    <!-- Hamburger icon component -->
    <button class="md:hidden" @click="toggleIcon()"
        data-test="hamburger-button"
    >
        <svg v-if="!isActive" xmlns="http://www.w3.org/2000/svg" width="24" height="11"
            data-test="base-icon"
        >
            <g fill="#2D314D" fill-rule="evenodd">
                <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z" />
            </g>
        </svg>

        <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="19"
            data-test="close-icon"
        >
            <g fill="#2D314D" fill-rule="evenodd">
                <path d="M.868.661l16.97 16.97-.706.708L.162 1.369z" />
                <path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z" />
            </g>
        </svg>
    </button>
</template>

<script>
export default {
    name: "HamburgerIcon",
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        toggleIcon() {
            this.isActive = !this.isActive;
            this.$emit("active-menu", this.isActive);
        }
    }
}
</script>
