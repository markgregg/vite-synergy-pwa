import { Component } from 'pwa-synergy-api'
import ApplicationCommands from '../types/ApplicationCommands'
import GreetingEntry from '../components/GreetingEntry'
import Message, { MessageProps } from '../components/Message'

const components: Component<ApplicationCommands>[] = [
  {
    id: 'greetingEntry',
    title: 'Greeting',
    content: ({ commands }) => <GreetingEntry {...commands} />,
    group: 'dockableWindow'
  },
  {
    id: 'message',
    title: 'Message',
    content: ({ instanceId, props, commands }) => <Message instanceId={instanceId} {...props} close={commands.closeMessage} />,
    group: 'onlyWindow',
    closable: true
  }
];

export default components