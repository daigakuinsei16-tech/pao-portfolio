# Deploy this portfolio to Vercel

This is a static site. The repository root contains the Vercel configuration, and `dist/` contains the files served to visitors. No package installation, build command, or environment variables are required.

## 1. Review what will be public

- Everything under `dist/` is deployed at the site root. For example, `dist/index.html` becomes `/` and `dist/assets/favicon.svg` becomes `/assets/favicon.svg`.
- The original `dist/assets/paola-limin-cv.pdf` remains on your computer, but `.gitignore` and `.vercelignore` exclude it from GitHub and Vercel. The page no longer links to it. If you intentionally want to publish it, remove both ignore entries after reviewing its contents.
- The email address and work details in `dist/index.html` are public page content. Check them before publishing.
- `.openai/` is local metadata for the original Sites project and is ignored by Git. Do not change Vercel's **Root Directory** to `dist`; the root `vercel.json` needs to be read from the repository root.
- `README.md` and `EXPORT_MANIFEST.json` describe the original local export, which still includes the CV and Sites metadata. The GitHub checkout will omit those ignored files.

## 2. Push to GitHub

This folder is already a Git repository with an `origin` remote. Run these commands here when you make changes:

```powershell
git add .
git status --short
git diff --cached --stat
git commit -m "Prepare portfolio for Vercel"
git push origin main
```

Check the staged file list before committing, especially any files you do not want available on GitHub. Keep `dist/` tracked: it is the deployable site, even though that directory name is often ignored in projects with a build step. If you start from a fresh ZIP without `.git`, initialize a repository and add your own GitHub remote before running these commands.

## 3. Import the repository in Vercel

1. In the [Vercel dashboard](https://vercel.com/new), select **New Project** and import the GitHub repository.
2. Set **Root Directory** to the repository root (`./`).
3. Select **Other** for **Framework Preset**. Leave **Build Command** empty.
4. Confirm **Output Directory** is `dist`. The root `vercel.json` also sets this value.
5. No environment variables are needed. Select **Deploy**.

Vercel will serve only the contents of `dist/`. There is no SPA rewrite because this site has one HTML page and uses `#` links for sections.

## 4. Check the deployment

Open the URL Vercel provides. Confirm the home page loads, the cover images and portrait appear, the work tabs and project dialogs open, and the contact email works. Check `/style.css`, `/app.js`, and `/assets/favicon.svg` on that same domain if the page appears unstyled or interactions do not work.

Future pushes to the production branch trigger production deployments; other branches can receive preview deployments. You can add a custom domain later in the project's **Settings → Domains**.

## References

- [Vercel Git deployments](https://vercel.com/docs/git)
- [Vercel static project build settings](https://vercel.com/docs/builds/configure-a-build)
- [Vercel `vercel.json` configuration](https://vercel.com/docs/project-configuration/vercel-json)
