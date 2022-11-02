import { GlTemplate } from 'gitlanding/GlTemplate';
import { Header } from './Header';
import { Footer } from './Footer';
import { useRoute } from '../router';
import { Home } from '../pages/Home';
// import { PageExample } from '../pages/PageExample';
import { FourOhFour } from '../pages/FourOFour';
import { ThemeProvider } from '../theme';
// import { css, cx } from '@emotion/css';
import { useIsDarkModeEnabled } from 'onyxia-ui/lib';

export function App() {
  const route = useRoute();
  const { isDarkModeEnabled } = useIsDarkModeEnabled();

  return (
    <div
      style={{
        backgroundColor: `${isDarkModeEnabled ? '#2C323F' : '#cfcfcf'}`,
      }}
    >
      <ThemeProvider>
        <GlTemplate
          header={<Header />}
          headerOptions={{
            position: 'sticky',
            isRetracted: 'smart',
          }}
          footer={<Footer />}
          body={(() => {
            switch (route.name) {
              case 'home':
                return <Home />;
              // case "pageExample": return <PageExample />;
              default:
                return <FourOhFour />;
            }
          })()}
        />
      </ThemeProvider>
    </div>
  );
}
