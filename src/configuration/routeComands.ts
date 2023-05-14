import { RouteApi } from 'pwa-synergy-api';
import ApplicationCommands from '../types/ApplicationCommands';
import Greeting from '../types/Greeting';

const routeCommands = (routeApi: RouteApi): ApplicationCommands => {
  return {
    showMessage: (greeting: Greeting) => {
      routeApi.navigate('message', {
        greeting,
      });
    },
    closeMessage: () => routeApi.back(),
  };
};

export default routeCommands;
