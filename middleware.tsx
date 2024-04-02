import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['id', 'en'],

  defaultLocale: 'id'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(id|en)/:path*']
};