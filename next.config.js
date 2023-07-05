const path = require('path')



const nexCondig = {
    reactStrictMode:true,
    env:{
        BACKEND_URL:'https://6figure-earner.world/LarReApi/public'
    }
}

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
    optimizeFonts: false,
    i18n: {
        locales: ['en', 'ar'],
        defaultLocale: 'en',
    },
}

