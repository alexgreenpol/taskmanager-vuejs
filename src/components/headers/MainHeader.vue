<template>
    <header class="main-header">
        <div class="main-header__logo">
            <router-link to="/assignments">
                Task manager:
                <span v-if="isAuthenticated">{{ user.email }}</span>
                <span v-else>guest</span>
            </router-link>
        </div>
        <template v-if="!isAuthenticated">
            <nav class="navigation">
                <router-link class="navigation__link" to="/login">
                    Login
                </router-link>
                <router-link class="navigation__link" to="/register">
                    Register
                </router-link>
            </nav>
        </template>
        <template v-if="isAuthenticated">
            <nav class="navigation">
                <a
                    class="navigation__link"
                    href="#"
                    @click.prevent="logoutHandler"
                >
                    Logout
                </a>
            </nav>
        </template>
    </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "MainHeader",
    computed: {
        ...mapGetters(["isAuthenticated", "isSending", "user"]),
    },
    beforeMount() {
        const user = JSON.parse(localStorage.getItem("user"));

        if (user) {
            this.setUser(user);
        }
    },
    methods: {
        setUser(user) {
            this.$store.dispatch("setUser", user);
        },
        logoutHandler() {
            this.$store.dispatch("logout");
        },
    },
};
</script>

<style lang="scss" scoped>
.main-header {
    padding: 10px 20px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__logo > a {
        text-decoration: none;
        color: $brandGreen;
        font-size: 20px;
    }
}

.navigation {
    &__link {
        margin: 0 0 0 10px;
        text-decoration: none;
        color: $brandGray;
    }

    & .router-link-active {
        color: $brandGreen;
    }
}
</style>