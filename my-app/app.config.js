import 'dotenv/config';

export default {
  expo: {
    name: "my-app",
    slug: "my-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      bundleIdentifier: "com.kirill25460.myapp",
      infoPlist: {
        UIBackgroundModes: ["remote-notification"]
      },
      entitlements: {
        "aps-environment": "development",
        "com.apple.security.application-groups": [
          "group.com.kirill25460.myapp.onesignal"
        ]
      }
    },
    android: {
      package: "com.kirill25460.myapp",
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      edgeToEdgeEnabled: true
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png"
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff"
        }
      ],
      [
        "onesignal-expo-plugin",
        {
          mode: "development"
        }
      ],
      [
        "react-native-appsflyer",
        {
          devKey: process.env.APPSFLYER_DEV_KEY,
          appId: process.env.APPSFLYER_IOS_APP_ID
        }
      ]
    ],
    experiments: {
      typedRoutes: true
    }
  }
};
