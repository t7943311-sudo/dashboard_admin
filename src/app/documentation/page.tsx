import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, ExternalLink } from "lucide-react";

const Section: React.FC<{ title: string; children: React.ReactNode; id: string }> = ({ title, children, id }) => (
  <Card id={id}>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent className="prose prose-lg max-w-none prose-headings:font-headline prose-a:text-primary dark:prose-invert">
      {children}
    </CardContent>
  </Card>
);

export default function DocumentationPage() {
  return (
    <div className="flex gap-8">
      <div className="w-full space-y-8">
        <Card className="bg-primary text-primary-foreground">
            <CardHeader>
                <CardTitle className="text-3xl">NovaAdmin Documentation</CardTitle>
                <CardDescription className="text-primary-foreground/80">Welcome! This guide provides everything you need to get started with the NovaAdmin template.</CardDescription>
            </CardHeader>
        </Card>

        <Section title="1. Introduction" id="introduction">
          <p>
            NovaAdmin is a professional, frontend-only admin dashboard template built with modern web technologies. It is designed to be a clean, flexible, and powerful starting point for any web application, SaaS, or backend interface.
          </p>
          <p>This template is built on top of Next.js, React, and Tailwind CSS, providing a highly efficient and modern development experience.</p>
        </Section>

        <Section title="2. Getting Started" id="getting-started">
          <p>To run the project locally, you need to have Node.js and npm installed.</p>
          <ol>
            <li>Open your terminal and navigate to the project directory.</li>
            <li>Install dependencies: <pre><code>npm install</code></pre></li>
            <li>Start the development server: <pre><code>npm run dev</code></pre></li>
            <li>Open <a href="http://localhost:9002">http://localhost:9002</a> in your browser.</li>
          </ol>
        </Section>

        <Section title="3. Folder Structure" id="folder-structure">
          <p>The project uses the Next.js App Router for file-based routing and organization.</p>
          <ul>
            <li><code>src/app/(dashboard)/</code>: Contains all the main dashboard pages. The shared layout (sidebar, header) is in <code>layout.tsx</code>.</li>
            <li><code>src/app/(auth)/</code>: Contains authentication-related pages (Login, Register).</li>
            <li><code>src/components/</code>: Contains all reusable React components.</li>
            <li><code>src/lib/</code>: Contains utility functions and mock data (<code>data.ts</code>).</li>
            <li><code>src/app/globals.css</code>: The main CSS file for global styles and theme variables.</li>
            <li><code>tailwind.config.ts</code>: The configuration file for Tailwind CSS.</li>
          </ul>
        </Section>

        <Section title="4. Customization" id="customization">
          <h4>Changing the Logo</h4>
          <p>The logo is defined in <code>src/components/layout/Logo.tsx</code>. You can replace the default SVG icon or text with your own branding.</p>

          <h4>Changing Colors</h4>
          <p>All theme colors are defined as CSS variables in <code>src/app/globals.css</code> under the <code>:root</code> (for light mode) and <code>.dark</code> (for dark mode) selectors. You can modify these HSL values to match your brand's color palette.</p>
          <pre><code>
{`:root {
  --primary: 243 75% 59%; /* Indigo */
  --background: 210 17% 98%; /* Light Gray */
  /* ... more colors */
}`}
          </code></pre>
          
          <h4>Adding a New Page</h4>
          <ol>
            <li>Create a new folder inside <code>src/app/(dashboard)/</code> (e.g., <code>mynewpage</code>).</li>
            <li>Inside it, create a file named <code>page.tsx</code>.</li>
            <li>Add your page content as a React component.</li>
            <li>To add it to the sidebar, open <code>src/components/layout/SidebarNav.tsx</code> and add a new link to the <code>menuItems</code> array.</li>
          </ol>
        </Section>

        <Section title="5. Credits" id="credits">
            <p>This template is built using a collection of fantastic open-source libraries.</p>
            <ul>
                <li><Link href="https://nextjs.org/" target="_blank">Next.js <ExternalLink className="inline-block h-4 w-4" /></Link></li>
                <li><Link href="https://react.dev/" target="_blank">React <ExternalLink className="inline-block h-4 w-4" /></Link></li>
                <li><Link href="https://tailwindcss.com/" target="_blank">Tailwind CSS <ExternalLink className="inline-block h-4 w-4" /></Link></li>
                <li><Link href="https://ui.shadcn.com/" target="_blank">Shadcn/ui <ExternalLink className="inline-block h-4 w-4" /></Link></li>
                <li><Link href="https://lucide.dev/" target="_blank">Lucide Icons <ExternalLink className="inline-block h-4 w-4" /></Link></li>
                <li><Link href="https://recharts.org/" target="_blank">Recharts <ExternalLink className="inline-block h-4 w-4" /></Link></li>
            </ul>
        </Section>
      </div>
    </div>
  );
}
