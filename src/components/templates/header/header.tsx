import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';

// import BlogLogo from '@icons/blog-logo.svg';
// import { LanguageSelector } from '@src/components/features/language-selector';
import { Container } from '@src/components/shared/container';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="py-5">
      <nav>
        <Container className="flex items-center justify-between">
          <Link href="/" title={t('common.homepage')}>
            <Image src="/assets/svg/logo.svg" alt="Ashley's blog" width="180" height="100" />
          </Link>
          <Container className="ml-0 mr-0 flex items-center justify-end gap-x-8">
            <Link href="/" title={t('common.WCAG simplified')} className="text-lg">
              WCAG simplified
            </Link>
            <Link href="/" title={t('common.accessibility')} className="text-lg">
              Accessibility
            </Link>
            <Link href="/" title={t('common.stem-for-special-needs-children')} className="text-lg">
              STEM for speical needs children
            </Link>
          </Container>
        </Container>
      </nav>
    </header>
  );
};
