import Greeting from './Greeting';

export default interface ApplicationCommands {
  showMessage: (greeting: Greeting) => void;
  closeMessage: (instance: string) => void;
}
