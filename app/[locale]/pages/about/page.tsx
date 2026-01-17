import { AboutContent } from '../../../pages/about/about.component';
import { generateStaticParams, getLang, type Locale } from '../../../i18n/config';

export { generateStaticParams };

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const lang = getLang(locale);
  return <AboutContent lang={lang} />;
}
