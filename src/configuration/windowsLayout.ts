import { AppLayout } from 'pwa-synergy-api';

const windowsLayout: AppLayout = {
  panels: {
    orientation: 'Vertical',
    children: [
      {
        id: 'main',
        size: 600,
        components: ['greetingEntry'],
      },
    ],
  },
  componentGroups: [
    {
      id: 'floatingWindow',
      floatable: 'singleTab',
      newWindow: true,
      preferredFloatHeight: [275, 275],
      preferredFloatWidth: [352, 352],
    },
    {
      id: 'dockableWindow',
      floatable: true,
      newWindow: true,
      maximizable: true,
    },
  ],
};

export default windowsLayout;
