module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData:
                    `@import "~@/styles/style.scss"; `
            }
        }
        // loaderOptions: {
        //     sass: {
        //         additionalData: `@import "@/src/styles/style.scss";`
        //     }
        // }
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    oneOf: [
                        {
                            resourceQuery: /^\?vue/,
                            use: ['pug-plain-loader']
                        },
                        {
                            use: ['raw-loader', 'pug-plain-loader']
                        }
                    ]
                }
            ]
        }
    }
}