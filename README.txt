================================================================================
NovaAdmin - Professional Admin Dashboard Template
================================================================================

Thank you for purchasing NovaAdmin!

--------------------------------------------------------------------------------
1. INTRODUCTION
--------------------------------------------------------------------------------

NovaAdmin is a professional, frontend-only admin dashboard template built with modern web technologies. It is designed to be a clean, flexible, and powerful starting point for any web application, SaaS, or backend interface.

This template is built on top of Next.js and Tailwind CSS, providing a highly efficient development experience.

--------------------------------------------------------------------------------
2. GETTING STARTED
--------------------------------------------------------------------------------

This is a Next.js project. To get started:

1.  Make sure you have Node.js and npm installed on your machine.
2.  Open your terminal or command prompt.
3.  Navigate to the project directory: `cd novaadmin-dashboard`
4.  Install the required dependencies: `npm install`
5.  Start the development server: `npm run dev`
6.  Open your browser and go to `http://localhost:9002` (or the port specified in your terminal).

You should now see the NovaAdmin dashboard.

--------------------------------------------------------------------------------
3. FOLDER STRUCTURE
--------------------------------------------------------------------------------

The project follows the standard Next.js App Router structure.

- `src/app/(dashboard)/`: Contains all the main dashboard pages (e.g., dashboard, users, settings). The layout with the sidebar and header is in `layout.tsx`.
- `src/app/(auth)/`: Contains authentication-related pages (Login, Register).
- `src/app/documentation/`: The documentation page.
- `src/components/`: Contains all reusable React components (UI elements, layout parts, charts).
- `src/lib/`: Contains utility functions and mock data.
- `src/app/globals.css`: The main CSS file for global styles and theme variables.
- `tailwind.config.ts`: Tailwind CSS configuration file.

--------------------------------------------------------------------------------
4. CUSTOMIZATION
--------------------------------------------------------------------------------

**Changing the Logo:**

1.  Open `src/components/layout/Logo.tsx`.
2.  You can replace the SVG icon from `lucide-react` with your own SVG or an `<img>` tag.
3.  Change the text "NovaAdmin" to your product name.

**Changing Colors:**

1.  Open `src/app/globals.css`.
2.  Find the `:root` selector. All theme colors are defined here as HSL CSS variables.
3.  For example, to change the primary color, modify the `--primary` variable:
    `--primary: 243 75% 59%;`
4.  You can use an online tool to convert your HEX/RGB colors to HSL values.
5.  Update the `.dark` selector variables for dark mode accordingly.

**Adding a New Page:**

1.  Create a new folder inside `src/app/(dashboard)/`. For example: `src/app/(dashboard)/mynewpage/`.
2.  Inside this new folder, create a `page.tsx` file.
3.  Add your page content as a React component:
    ```jsx
    export default function MyNewPage() {
      return (
        <div>
          <h1>My New Page</h1>
          {/* Your content here */}
        </div>
      );
    }
    ```
4.  Open `src/components/layout/SidebarNav.tsx` and add a new `SidebarMenuButton` link to your new page.

--------------------------------------------------------------------------------
5. JAVASCRIPT & DATA
--------------------------------------------------------------------------------

-   `src/components/`: All interactive logic is encapsulated within React components.
-   `src/components/charts/`: Chart components using `recharts` are located here.
-   `src/lib/data.ts`: Mock data for charts and tables is stored here. You can replace it with data from your API.
-   `src/components/theme-provider.tsx`: Handles the light/dark theme toggling logic.

--------------------------------------------------------------------------------
6. CREDITS
--------------------------------------------------------------------------------

-   Next.js (https://nextjs.org/)
-   React (https://react.dev/)
-   Tailwind CSS (https://tailwindcss.com/)
-   Shadcn/ui (https://ui.shadcn.com/)
-   Lucide React (https://lucide.dev/guide/packages/lucide-react)
-   Recharts (https://recharts.org/)
-   Inter Font (https://fonts.google.com/specimen/Inter)

Thank you for using NovaAdmin!
