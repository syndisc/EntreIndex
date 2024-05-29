import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        LOGIN_API : process.env.LOGIN_API,
        REGISTER_API : process.env.REGISTER_API,
        SUBMIT_FORM_API : process.env.SUBMIT_FORM_API,
        GET_PROVINCE_API : process.env.GET_PROVINCE_API,
        GET_TOWN_API : process.env.GET_TOWN_API,
        POST_ANSWER_API : process.env.POST_ANSWER_API,
        DECODE_TOKEN_API : process.env.DECODE_TOKEN_API,
        GET_USER_ANSWER_API : process.env.GET_USER_ANSWER_API,
        GET_CITY_API : process.env.GET_CITY_API,
        GET_MIN_MAX_TOTAL_API : process.env.GET_MIN_MAX_TOTAL_API,
        GET_ANSWER_BY_CITY_API : process.env.GET_ANSWER_BY_CITY_API,
        GET_HIGHEST_AVG_PROVICE : process.env.GET_HIGHEST_AVG_PROVICE,
        GET_HIGHEST_AVG_CITY : process.env.GET_HIGHEST_AVG_CITY,
        UPDATE_USER_ID : process.env.UPDATE_USER_ID,
        GET_CITY_PERCENTAGE : process.env.GET_CITY_PERCENTAGE,
        GET_AVERAGE_PROVINCE_DIMENSION : process.env.GET_AVERAGE_PROVINCE_DIMENSION,
        GET_AVERAGE_CITY_DIMENSION: process.env.GET_AVERAGE_CITY_DIMENSION,
        GET_AVERAGE_USER_PROVINCE_DIMENSION: process.env.GET_AVERAGE_USER_PROVINCE_DIMENSION,
        GET_AVERAGE_USER_CITY_DIMENSION: process.env.GET_AVERAGE_USER_CITY_DIMENSION,
        GET_LAST_USER_ANSWER: process.env.GET_LAST_USER_ANSWER
    }
};

export default withNextIntl(nextConfig);