require('dotenv').config()
module.exports = (phase, { defaultConfig }) => {
    return {
        env: {
            BASE_URL: process.env.BASE_URL,
            mock: process.env.mock === 'true' ? true : false,
            branch: process.env.NOW_GITHUB_COMMIT_REF == 'master' ? 'this is master' : 'this is staging',
        }
        /* config options for all phases except development here */
    }
}
