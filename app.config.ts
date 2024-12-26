// WARNING THIS ISN'T VERSIONED
import { ExpoConfig, ConfigContext } from 'expo/config';

export const ENV = {
  APP_ENV: 'development',
  EXPO_PUBLIC_APP_DISPLAY_NAME: '(Dev) RouterWind',
  EXPO_PUBLIC_PACKAGE: 'com.rally2.routerwind.dev',
  EXPO_PUBLIC_ADAPTIVE_BACKGROUND: '#99FFBE',
  EXPO_PUBLIC_SCHEME: 'routerwinddev',
  EXPO_PUBLIC_BUNDLE_ID: 'com.rally2.routerwind.dev',
  EXPO_PUBLIC_ICON_PATH: './assets/dev/icon.dev.png',

  // Versioing
  EXPO_PUBLIC_APP_VERSION: '1.0',
  EXPO_PUBLIC_BUILD_NUMBER: '1',
  EXPO_PUBLIC_OTA: '0',
  EXPO_PUBLIC_ANDROID_VERSION_CODE: 10000000
};

if (process.env.APP_ENV === 'production') {
  setupProductionEnvironment();
} else if (process.env.APP_ENV === 'staging') {
  setupStagingEnvironment();
} else {
  // Development environemnt is configured based on the .env file
}

// See https://docs.expo.dev/versions/latest/config/app/
export default ({ config }: ConfigContext): ExpoConfig => ({
  // Spreads static configuration from app.json if we want to seperate out and be more
  // explicit about what should / and should not change
  ...config,
  name: ENV.EXPO_PUBLIC_APP_DISPLAY_NAME || '(Dev) RouterWind',
  owner: 'rally2',
  slug: 'routerwind',
  description:
    'Expo Router & Nativewind Template to quick project spin up.  Configured environments, EAS profiles & more!',
  platforms: ['android', 'ios', 'web'],
  scheme: ENV.EXPO_PUBLIC_SCHEME,
  version: ENV.EXPO_PUBLIC_APP_VERSION,
  orientation: 'portrait',
  icon: ENV.EXPO_PUBLIC_ICON_PATH,
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#1F2937'
  },
  updates: {
    fallbackToCacheTimeout: 3000,
    url: 'https://u.expo.dev/343b7455-38e2-4f2d-b28e-cedbcbde87bd'
  },
  runtimeVersion: {
    policy: 'appVersion'
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    privacyManifests: {},
    bundleIdentifier: ENV.EXPO_PUBLIC_BUNDLE_ID,
    buildNumber: ENV.EXPO_PUBLIC_BUILD_NUMBER,
    supportsTablet: true
  },
  android: {
    package: ENV.EXPO_PUBLIC_PACKAGE,
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#1F2937'
    },
    versionCode: ENV.EXPO_PUBLIC_ANDROID_VERSION_CODE
  },
  web: {
    bundler: 'metro',
    output: 'static',
    favicon: './assets/images/favicon.png'
  },
  extra: {
    ...ENV,
    eas: {
      projectId: '343b7455-38e2-4f2d-b28e-cedbcbde87bd'
    }
  },
  experiments: {
    typedRoutes: true,
    tsconfigPaths: true
  },
  plugins: ['expo-router', 'expo-font'],
});

function setupProductionEnvironment() {
  ENV.APP_ENV = 'production';
  ENV.EXPO_PUBLIC_APP_DISPLAY_NAME = 'RouterWind';
  ENV.EXPO_PUBLIC_PACKAGE = 'com.rally2.routerwind';
  ENV.EXPO_PUBLIC_ADAPTIVE_BACKGROUND = '#1F2937';
  ENV.EXPO_PUBLIC_SCHEME = 'routerwind';
  ENV.EXPO_PUBLIC_BUNDLE_ID = 'com.rally2.routerwind';
  ENV.EXPO_PUBLIC_ICON_PATH = './assets/icon.png';

  // Versioing
  ENV.EXPO_PUBLIC_APP_VERSION = '1.0';
  ENV.EXPO_PUBLIC_BUILD_NUMBER = '1';
  ENV.EXPO_PUBLIC_OTA = '0';
  ENV.EXPO_PUBLIC_ANDROID_VERSION_CODE = 10000000;
}

function setupStagingEnvironment() {
  ENV.APP_ENV = 'staging';
  ENV.EXPO_PUBLIC_APP_DISPLAY_NAME = '(UAT) RouterWind';
  ENV.EXPO_PUBLIC_PACKAGE = 'com.rally2.routerwind.staging';
  ENV.EXPO_PUBLIC_ADAPTIVE_BACKGROUND = '#fde047';
  ENV.EXPO_PUBLIC_SCHEME = 'routerwindstaging';
  ENV.EXPO_PUBLIC_BUNDLE_ID = 'com.rally2.routerwind.staging';
  ENV.EXPO_PUBLIC_ICON_PATH = './assets/staging/icon.staging.png';

  // Versioing
  ENV.EXPO_PUBLIC_APP_VERSION = '1.0';
  ENV.EXPO_PUBLIC_BUILD_NUMBER = '1';
  ENV.EXPO_PUBLIC_OTA = '0';
  ENV.EXPO_PUBLIC_ANDROID_VERSION_CODE = 10000000;
}
