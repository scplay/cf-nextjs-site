import { CVContent } from '../../../pages/cv/cv.component';
import { generateStaticParams, getLang, type Locale } from '../../../i18n/config';

export { generateStaticParams };

export default async function CVPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const lang = getLang(locale);
  return <CVContent lang={lang} />;
}
