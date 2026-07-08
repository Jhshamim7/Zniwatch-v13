import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.animestreaming.app',
  appName: 'Anime Streaming',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    allowNavigation: [
      '*'
    ]
  },
  plugins: {
    CapacitorHttp: {
      enabled: true
    }
  }
};

export default config;
