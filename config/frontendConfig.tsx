import ThirdPartyPasswordlessReact from 'supertokens-auth-react/recipe/thirdpartypasswordless';
import { ThirdPartyPasswordlessPreBuiltUI } from 'supertokens-auth-react/recipe/thirdpartypasswordless/prebuiltui';
import SessionReact from 'supertokens-auth-react/recipe/session';
import Router from 'next/router';

export const frontendConfig = () => {
  return {
    appInfo: {
      appName: process.env.SUPERTOKENS_APP_NAME,
      websiteDomain: process.env.SUPERTOKENS_WEBSITE_DOMAIN,
      apiDomain: process.env.SUPERTOKENS_API_DOMAIN,
      apiBasePath: process.env.SUPERTOKENS_API_BASE_PATH,
      websiteBasePath: process.env.SUPERTOKENS_WEBSITE_BASE_PATH,
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
