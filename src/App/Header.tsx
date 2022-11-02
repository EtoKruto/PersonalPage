import { memo } from 'react';
import { GlHeader } from 'gitlanding/GlHeader';
import { routes } from 'router';
import { declareComponentKeys, useTranslation } from 'i18n'; //useLang
import { css } from '@emotion/css';
// import { createLanguageSelect } from 'onyxia-ui/LanguageSelect';
// import type { Language } from 'i18n';
import { useIsDarkModeEnabled } from 'onyxia-ui/lib';
import logo_black from 'assets/img/logo_black.png';
import logo_white from 'assets/img/logo_white.png';
import SvgWave from 'assets/svg/SvgWave';

// const { LanguageSelect } = createLanguageSelect<Language>({
//   languagesPrettyPrint: {
//     en: 'English',
//     fr: 'French',
//   },
// });

export const Header = memo(() => {
  const { isDarkModeEnabled } = useIsDarkModeEnabled();

  const { t } = useTranslation({ Header });
  // const { lang, setLang } = useLang();
  return (
    <>
      <div
        style={{
          position: 'relative',
          backgroundColor: `${isDarkModeEnabled ? '#2C323F' : '#cfcfcf'}`,
        }}
      >
        <SvgWave darkMode={isDarkModeEnabled} />

        <GlHeader
          classes={{
            link: css({
              fontWeight: 'bold',
              fontSize: '1rem',
            }),
          }}
          title={
            <a
              className={css`
                text-decoration: none;
                &:hover {
                  text-decoration: none;
                }
                &:focus {
                  text-decoration: none;
                }
                &:active {
                  text-decoration: none;
                }
                &:visited {
                  color: inherit;
                }
              `}
              {...routes.home().link}
            >
              {' '}
              <h1
                className={css`
                  // padding: 32px;
                  font-size: 2rem;
                  line-height: 1.2em;
                  // color: #0000;
                  text-shadow: 0 0 #000, 0 1.2em #1095c1;
                  overflow: hidden;
                  transition: 0.3s;
                  &:hover {
                    text-shadow: 0 -1.2em #000, 0 0 #1095c1;
                    text-decoration: none;
                    // text-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
                  }
                  &:active {
                    transform: scale(0.98);
                    text-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
                  }
                  &:visited {
                    text-decoration: none;
                  }
                `}
              >
                <img
                  src={isDarkModeEnabled ? logo_white : logo_black}
                  alt='logo'
                  className={css`
                    // -webkit-filter: drop-shadow(5px 5px 5px #222);
                    filter: drop-shadow(
                      6px 5px 3px ${isDarkModeEnabled ? '#FFFFFF' : '#000000'}
                    );
                  `}
                  style={{
                    width: '8vw',
                    minWidth: '40px',
                    maxWidth: '80px',
                    padding: '10px',
                  }}
                ></img>
                {/* {t('headerTitle')} */}
              </h1>
            </a>
          }
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
          enableDarkModeSwitch={true}
          // githubRepoUrl='https://github.com/EtoKruto'
          // githubButtonSize='large'
          // customItemEnd={{
          //   item: (
          //     <LanguageSelect
          //       language={lang}
          //       onLanguageChange={setLang}
          //       variant='big'
          //     />
          //   ),
          // }}
        />
      </div>
    </>
  );
});

export const { i18n } = declareComponentKeys<
  'headerTitle' | 'link1label' | 'link2label'
>()({ Header });
