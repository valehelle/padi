require('dotenv').config()
module.exports = (phase, { defaultConfig }) => {
    return {
        env: {
            BASE_URL: process.env.BASE_URL,
            mock: process.env.mock
        }
        /* config options for all phases except development here */
    }
}
