import { memo } from 'react';
import { GlFooter } from 'gitlanding/GlFooter';
// import { routes } from 'router';
import { declareComponentKeys, useTranslation } from 'i18n';

export const Footer = memo(() => {
  const { t } = useTranslation({ Footer });
  return (

    <GlFooter
      // bottomDivContent={t('license')}
      email='AlexanderAKrut@gmail.com'
      // phoneNumber='719-930-7152'
      links={[
        {
          label: t('link1label'),
          href: 'https://bit.ly/Krut_Resume',

          // ...routes.pageExample().link,
        },
        {
          label: t('link2label'),
          href: 'https://www.linkedin.com/in/alexanderkrut/',
        },
        // {
        //   label: t('link3label'),
        //   href: 'https://example.com',
        // },
      ]}
    />
  );
});

export const { i18n } = declareComponentKeys<
   'link1label' | 'link2label'
  // | "link3label"
>()({ Footer });
