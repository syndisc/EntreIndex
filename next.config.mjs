/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        LOGIN_API : process.env.LOGIN_API,
        REGISTER_API : process.env.REGISTER_API,
        SUBMIT_FORM_API : process.env.SUBMIT_FORM_API,
    }
};

export default nextConfig;
