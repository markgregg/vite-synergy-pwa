import { AppRoute } from 'pwa-synergy-api';

const routes: AppRoute[] = [
  {
    index: true,
    component: 'greetingEntry',
  },
  {
    path: 'message',
    component: 'message',
  },
];

export default routes;
