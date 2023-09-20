import ThirdPartyPasswordlessReact from 'supertokens-auth-react/recipe/thirdpartypasswordless';
import { ThirdPartyPasswordlessPreBuiltUI } from 'supertokens-auth-react/recipe/thirdpartypasswordless/prebuiltui';
import SessionReact from 'supertokens-auth-react/recipe/session';
import Router from 'next/router';

export const frontendConfig = () => {
  return {
    appInfo: {
      appName: 'https://supertokens-docker-postgresql-wlhmostm3q-ez.a.run.app',
      websiteDomain: 'http://localhost:3000',
      apiDomain: 'http://localhost:3030',
      apiBasePath: '/api/auth',
      websiteBasePath: '/auth',
    },
    // recipeList contains all the modules that you want to
    // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
    recipeList: [
      ThirdPartyPasswordlessReact.init({
        signInUpFeature: {
          providers: [
            ThirdPartyPasswordlessReact.Google.init(),
            ThirdPartyPasswordlessReact.Apple.init(),
          ],
        },
        contactMethod: 'EMAIL',
      }),
      SessionReact.init(),
    ],
    // this is so that the SDK uses the next router for navigation
    windowHandler: (oI) => {
      return {
        ...oI,
        location: {
          ...oI.location,
          setHref: (href) => {
            Router.push(href);
          },
        },
      };
    },
  };
};

export const recipeDetails = {
  docsLink: 'https://supertokens.com/docs/thirdpartypasswordless/introduction',
};

export const PreBuiltUIList = [ThirdPartyPasswordlessPreBuiltUI];
