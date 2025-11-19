# SvelteKit Material Portfolio Template

A modern, responsive portfolio template built with SvelteKit and Svelte Material UI (SMUI). This starter kit combines the performance of SvelteKit's static site generation with the polished design of Material Design components.

> **Note**: This is a template repository. To use it, click "Use this template" or [create a new repository](https://github.com/nightguarder/CyrilsCV/generate) from this template.

## 🎨 Features

- ⚡ Blazing fast static site generation (SSG)
- 🎨 Material Design components with Svelte Material UI (SMUI)
- 📱 Fully responsive layout for all devices
- 📝 Project showcase section with markdown support
- 📧 Contact form with form handling
- 🌓 Dark/light theme support
- 🔍 SEO optimized
- 🚀 GitHub Pages ready

## 🛠️ Tech Stack

- [SvelteKit](https://kit.svelte.dev/) - Next-gen web framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Svelte Material UI (SMUI)](https://sveltematerialui.com/) - Material Design components
- [mdsvex](https://mdsvex.com/) - Markdown support for Svelte
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [GitHub Actions](https://github.com/features/actions) - CI/CD pipeline

## 🚀 Quick Start

You can also start from scratch with `npx sv create my-app`
[read more](https://svelte.dev/docs/kit/creating-a-project)

1. **Create a new repository**
   - Click "Use this template" or [create a new repository](https://github.com/nightguarder/CyrilsCV/generate)
   - Clone your new repository:

   ```bash
     git clone https://github.com/your-username/your-repo.git
     cd your-repo
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start developing**

   ```bash
   pnpm dev --open #npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser

4. **Customize**
   - Update `src/app.html` - Site metadata and favicon
   - Edit `src/routes/+page.svelte` - Homepage content
   - Add your projects to `src/lib/data/projects.ts`
   - Update theme colors in `src/app.postcss`

   - Adjust the build command if you change the build directory

5. **Enable GitHub Pages**
   - Go to your repository Settings > Pages
   - Source > Select Github Actions

## 🚀 Deployment

### GitHub Pages (Recommended)

If having problems refer to [SvelteKit](https://svelte.dev/docs/kit/adapter-static#GitHub-Pages) config.

1. Push your changes to the `main` branch
2. **Enable GitHub Pages**
   - Go to your repository Settings > Pages
   - Source > Select Github Actions
3. GitHub Actions will automatically **build** and **deploy** to GitHub Pages
   - You should see:
   - > Your site was last deployed to the github-pages environment by the Deploy to GitHub Pages workflow.
     > [Learn more about deploying to GitHub Pages using custom workflows](https://docs.github.com/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow)
4. Your site will be available at:
   - `https://username.github.io` (for user/organization sites)
   - `https://username.github.io/repository-name` (for project sites)

Adjust the build command in `.github/workflows/deploy.yml` if having problems.

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Examples included

This template now includes small example pages to help you get started quickly:

- `/examples` — index for the example pages
- `/examples/smui` — small SMUI demo (buttons, text field, cards)
- `/examples/markdown` — mdsvex (Markdown + Svelte) example showing frontmatter and inline Svelte

Open the dev server (usually http://localhost:5173) and visit those routes to see the examples.

## 📄 License

MIT - Feel free to use this template for your own portfolio! If you like it, consider giving it a ⭐️ on GitHub.
