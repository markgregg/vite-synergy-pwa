import { WindowApi } from 'pwa-synergy-api'
import ApplicationCommands from '../types/ApplicationCommands'
import Greeting from '../types/Greeting'

const windowsCommands = (desktopApi: WindowApi): ApplicationCommands => {
  return {
    showMessage: (greeting: Greeting) => {
      desktopApi.openWindow(
        'message',
        {
          greeting
        },
        'Custom',
        {
          height: 240,
          width: 300
        }
      );
    },
    closeMessage: (instance: string) => desktopApi.closeComponent('message', instance)
  }
}

export default windowsCommands