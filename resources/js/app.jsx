import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    //resolve: (name) => resolvePageComponent(`./pages/${name}.jsx`, import.meta.glob('./pages/**/*.jsx')),
    resolve: async (name) => {
        const pages = import.meta.glob('./pages/**/*.{jsx,tsx}');
        const page = pages[`./pages/${name}.tsx`] || pages[`./pages/${name}.jsx`];

        if (!page) {
            throw new Error(`Страница не найдена: ${name}`);
        }

        const module = await page();
        return module.default;
    },

    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
