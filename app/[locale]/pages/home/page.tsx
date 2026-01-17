import { HomeContent } from '../../../pages/home/home.component';
import { generateStaticParams, getLang, type Locale } from '../../../i18n/config';

export { generateStaticParams };

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const lang = getLang(locale);
  return <HomeContent lang={lang} />;
}
