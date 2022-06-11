const path = require("path");

module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `
                    @import "@/assets/scss/helpers/_variables.scss";
                    @import "@/assets/scss/styles.scss";                    
                `,
            },
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                layouts: path.resolve(__dirname, "src/layouts/"),
                components: path.resolve(__dirname, "src/components/"),
                views: path.resolve(__dirname, "src/views/"),
                plugins: path.resolve(__dirname, "src/plugins/"),
                helpers: path.resolve(__dirname, "src/helpers/"),
                assets: path.resolve(__dirname, "src/assets/"),
                api: path.resolve(__dirname, "src/api/"),
                router: path.resolve(__dirname, "src/router/"),
                store: path.resolve(__dirname, "src/store/"),
            },
        },
    },
};
