import React from 'react';
import UniversalApp from 'pwa-synergy-api';
import ApplicationCommands from './types/ApplicationCommands';
import TitleBar from './components/TitleBar';
import { components, routeCommands, windowsCommands, windowsLayout, routes } from './configuration';
import './styles/app.scss';

const App = () => {
  return (
    <div className="App">
      <UniversalApp<ApplicationCommands>
        appName="Universal Trader Desktop"
        components={components}
        titleBar={() => <TitleBar />}
        desktopApp={{
          type: 'Window',
          commands: windowsCommands,
          layout: windowsLayout,
        }}
        mobileApp={{
          type: 'Route',
          commands: routeCommands,
          routes,
        }}
      />
    </div>
  );
};

export default App;
