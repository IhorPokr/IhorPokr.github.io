# Terminal Portfolio

A stylish, interactive terminal-themed portfolio website built with Next.js, styled to look like the Apple Terminal application.

![Terminal Portfolio Screenshot](public/portfolio-screenshot.png)

## Features

- Interactive terminal interface
- Command-based navigation
- Clean, Apple-inspired design
- Responsive layout
- Easy to customize

## Setting Up Locally

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/terminal-portfolio.git
cd terminal-portfolio
```

2. Install dependencies:

```bash
npm install --legacy-peer-deps
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## Deploying to GitHub Pages

Follow these steps to host your terminal portfolio on GitHub Pages:

### 1. Create a GitHub Repository

If you haven't already:

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right, then "New repository"
3. There are two types of GitHub Pages sites:
   - **User/Organization site**: Repository must be named `yourusername.github.io`
   - **Project site**: Repository can have any name (e.g., `terminal-portfolio`)
4. Make it public
5. Click "Create repository" WITHOUT initializing with README or other files

### 2. Configure for GitHub Pages

1. **IMPORTANT**: Edit the `github-pages-config.js` file to match your setup:

```js
const config = {
  // Set to true if your repository is named yourusername.github.io
  // Set to false if your repository has any other name
  isUserPage: false,
  
  // Your GitHub username
  username: 'YOUR-USERNAME',
  
  // For project pages, the repository name (if isUserPage is false)
  repositoryName: 'terminal-portfolio'
};
```

2. Install the `gh-pages` package:

```bash
npm install --save-dev gh-pages --legacy-peer-deps
# or
yarn add --dev gh-pages
```

3. The scripts in `package.json` should already be configured:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "deploy": "npm run build && touch out/.nojekyll && gh-pages -d out --dotfiles"
}
```

### 3. Link to Your GitHub Repository

```bash
# Remove existing origin if needed
git remote remove origin

# Add your GitHub repository
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Verify remote is set correctly
git remote -v
```

Replace:
- `YOUR-USERNAME` with your actual GitHub username
- `YOUR-REPO-NAME` with either `yourusername.github.io` or your project name (e.g., `terminal-portfolio`)

### 4. Deploy to GitHub Pages

There are two deployment options:

#### Option A: Automatic Deployment (Recommended)

1. The GitHub Actions workflow is already configured
2. Just push your code to GitHub:

```bash
git add .
git commit -m "Initial commit"
git push -u origin main
```

3. Go to the "Actions" tab in your GitHub repository to monitor the deployment

#### Option B: Manual Deployment

If you prefer to deploy manually:

```bash
npm run deploy
```

### 5. Check Your Live Site

Your site will be published at:
- User site: `https://yourusername.github.io`
- Project site: `https://yourusername.github.io/repo-name`

## Customizing Your Portfolio

### Personal Information

Edit the following files to update your information:

- `components/about.tsx` - About you section
- `components/skills.tsx` - Your skills
- `components/projects.tsx` - Your projects
- `components/contact.tsx` - Contact information

### Colors and Styling

The color scheme is defined in `app/globals.css` using CSS variables:

```css
:root {
  --apple-background: #1A1A1A;
  --apple-foreground: #EBEBEB;
  /* other color variables */
}
```

## Troubleshooting

- **File not found errors**: Make sure your `github-pages-config.js` settings match your actual GitHub repository
- **Node.js version**: Make sure you're using Node.js v18 or newer
- **Dependency conflicts**: Use `--legacy-peer-deps` flag when installing packages
- **Images not loading**: Make sure the paths are relative and prefixed correctly
- **Routing issues**: Check your `next.config.mjs` and `github-pages-config.js` settings
- **Git remote errors**: Ensure you've set up the correct remote URL for your GitHub repository

## License

MIT

## Acknowledgments

- Apple Terminal design inspiration
- Next.js documentation
- GitHub Pages deployment guides
# IhorPokr.github.io
# IhorPokr.github.io
