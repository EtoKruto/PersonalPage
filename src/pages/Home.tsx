import { memo } from 'react';
import { GlHero } from 'gitlanding/GlHero/GlHero';
import { GlArticle } from 'gitlanding/GlArticle';
import { GlCards } from 'gitlanding/GlCards';
// import { GlLogoCard } from 'gitlanding/GlCards/GlLogoCard';
import { declareComponentKeys, useTranslation } from 'i18n';
import personal from 'assets/img/personal2.png';
import { css } from '@emotion/css';

// import articlePng from 'assets/img/home-article.png';
import code_clip from 'assets/video/code_clip.gif';
import atelier_clip from 'assets/video/atelier_clip.gif';
import eleetcode_clip from 'assets/video/eleetcode_clip.gif';
import yourpick_clip from 'assets/video/yourpick_clip.gif';
// import balloonIcon from 'assets/icons/balloon.png';
// import drawioIcon from 'assets/icons/drawio.png';
// import githubIcon from 'assets/icons/github.png';
// import plusIcon from 'assets/icons/plus.png';
// import rocketIcon from 'assets/icons/rocket-chat.png';
// import tchapIcon from 'assets/icons/tchap.png';
import { GlProjectCard } from 'gitlanding/GlCards/GlProjectCard';

export const Home = memo(() => {
  const { t } = useTranslation({ Home });
  return (
    <>
      <GlHero
        title={t('heroTitle')}
        subTitle={t('heroSubtitle')}
        illustration={{
          type: 'image',
          src: personal,
          hasShadow: false,
        }}
        hasLinkToSectionBellow={true}
      />

      <GlArticle
        title={t('articleTitle')}
        body={t('articleBody')}
        buttonLabel={t('articleButtonLabel')}
        buttonLink={{
          href: 'https://example.com',
        }}
        illustration={{
          type: 'image',
          src: code_clip,
          hasShadow: true,
        }}
        hasAnimation={true}
        illustrationPosition='left'
      />
      <h1
        style={{
          fontSize: 'clamp(1rem, 1vw + 1rem, 5rem)',
          textAlign: 'center',
          paddingRight: '2rem',
          paddingLeft: '2rem',
        }}
      >
        Here are some of my projects
      </h1>
      <GlCards
        className={css`
          margin-top: 0;
        `}
      >
        <GlProjectCard
          badgeLabel={'Click this card to visit the Github Page'}
          title={t('card1Title')}
          subtitle={t('card1Paragraph')}
          projectImageUrl={eleetcode_clip}
          link={{ href: 'https://bit.ly/KrutLeetTracker' }}
        />
        <GlProjectCard
          badgeLabel={'Click this card to visit the Github Page'}
          title={t('card2Title')}
          subtitle={t('card2Paragraph')}
          projectImageUrl={atelier_clip}
          link={{ href: 'https://bit.ly/KrutAtelier' }}
        />
        <GlProjectCard
          badgeLabel={'Click this card to visit the Github Page'}
          title={t('card3Title')}
          subtitle={t('card3Paragraph')}
          projectImageUrl={yourpick_clip}
          link={{ href: 'https://bit.ly/KrutYourPick' }}
        />
      </GlCards>
    </>
  );
});

export const { i18n } = declareComponentKeys<
  | 'heroTitle'
  | 'heroSubtitle'
  | 'articleTitle'
  | 'articleBody'
  | 'articleButtonLabel'
  | 'card1Title'
  | 'card2Title'
  | 'card3Title'
  | 'card1Paragraph'
  | 'card2Paragraph'
  | 'card3Paragraph'
>()({ Home });
