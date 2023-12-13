import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.PushNotifications.app',
  appName: 'PushNotificationsApp',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
  // plugins: {
  //   PushNotifications: {
  //     presentationOptions: ["badge", "sound", "alert"]
  //   },
  // },
  plugins: {
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
  },
};




export default config;
