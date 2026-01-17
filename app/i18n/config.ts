export type Locale = 'en' | 'zh-CN';
export type Lang = 'en' | 'zh';

export const locales: Locale[] = ['en', 'zh-CN'];
export const defaultLocale: Locale = 'en';

export const localeMap: Record<Locale, Lang> = {
  'en': 'en',
  'zh-CN': 'zh',
};

export function getLang(locale: Locale): Lang {
  return localeMap[locale] || 'en';
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
