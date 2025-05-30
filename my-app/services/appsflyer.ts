import appsFlyer from 'react-native-appsflyer';

export const initAppsflyerSDK = () => {
  appsFlyer.initSdk(
    {
      devKey: 'FAKE_DEV_KEY',
      isDebug: true,
      appId: 'FAKE_IOS_APP_ID', // тільки для iOS
    },
    (result) => console.log('AppsFlyer initialized:', result),
    (error) => console.error('AppsFlyer init error:', error)
  );
};
