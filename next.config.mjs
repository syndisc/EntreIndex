/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        LOGIN_API : process.env.LOGIN_API,
        REGISTER_API : process.env.REGISTER_API,
        SUBMIT_FORM_API : process.env.SUBMIT_FORM_API,
        GET_PROVINCE_API : process.env.GET_PROVINCE_API,
        GET_TOWN_API : process.env.GET_TOWN_API,
        POST_ANSWER_API : process.env.POST_ANSWER_API
    }
};

export default nextConfig;
