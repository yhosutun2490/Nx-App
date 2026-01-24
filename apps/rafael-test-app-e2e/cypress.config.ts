import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';
export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'npx nx run @rafael-apps/rafael-test-app:serve',
        production: 'npx nx run @rafael-apps/rafael-test-app:serve',
      },
      ciWebServerCommand: 'npx nx run @rafael-apps/rafael-test-app:serve',
      ciBaseUrl: 'http://localhost:4200',
    }),
    baseUrl: 'http://localhost:8081',
  },
});
