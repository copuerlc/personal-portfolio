# Personal Portfolio Website

A modern, dark navy-blue personal portfolio built with **React + Vite + JavaScript + CSS**.

The website is designed to be easy to customize. Almost all personal content lives in one file:

```text
src/data/profile.js
```

---

## Features

- Premium dark navy / gray design
- Responsive desktop, tablet and mobile layout
- Smooth scrolling
- Scroll reveal animations
- Scroll progress indicator
- Active navigation links
- Mobile navigation menu
- Back-to-top button
- Animated cards and buttons
- Projects section
- Skills section
- Currently section
- Configurable social links
- No complicated backend required
- Easy central customization

---

# Requirements

Install **Node.js 20+**.

Check that Node.js is installed:

```bash
node -v
npm -v
```

---

# Installation

## 1. Open the project folder

Extract the ZIP file somewhere on your computer.

Example:

```text
C:\Users\YourName\Desktop\personal-portfolio
```

## 2. Open a terminal in the folder

In VS Code:

1. Open the project folder.
2. Click **Terminal**.
3. Click **New Terminal**.

## 3. Install dependencies

Run:

```bash
npm install
```

## 4. Start the development server

Run:

```bash
npm run dev
```

Vite will show a local URL similar to:

```text
http://localhost:5173
```

Open it in your browser.

---

# The Most Important File

## `src/data/profile.js`

This is where you customize almost everything.

You do **not** need to search through lots of components to change your information.

---

# Changing Your Name

Open:

```text
src/data/profile.js
```

Find:

```js
name: "Your Name",
```

Change it:

```js
name: "John Smith",
```

---

# Changing Your Username

Find:

```js
username: "@yourusername",
```

Example:

```js
username: "@john",
```

---

# Changing Your Role

Find:

```js
role: "Developer, Creator & Community Builder",
```

Example:

```js
role: "Developer & Designer",
```

---

# Changing Your Introduction

Find:

```js
intro: "I build digital projects...",
```

Replace it with your own introduction.

---

# Changing About Me

Find:

```js
about: `Your text here`
```

You can write multiple sentences.

Example:

```js
about: `I'm a developer from Estonia who enjoys building websites,
Discord bots and creative projects.`
```

---

# Changing Your Goals

Find:

```js
goals: "Keep learning..."
```

Change it to whatever you want.

---

# Changing What You Do

Find:

```js
whatIDo: [
```

Each item looks like this:

```js
{
  icon: "Code2",
  title: "Development",
  description: "Building modern apps."
}
```

You can:

- Edit an existing item
- Remove an item
- Add another item

Example:

```js
{
  icon: "Rocket",
  title: "Startup Projects",
  description: "Building ideas into real products."
}
```

Icons come from Lucide Icons. You can find icon names on the Lucide website.

---

# Changing Interests and Hobbies

Find:

```js
interests: [
```

Example item:

```js
{
  icon: "Gamepad2",
  title: "Gaming",
  description: "Exploring games."
}
```

Add, remove or edit items the same way as `whatIDo`.

---

# Changing Skills

Find:

```js
skills: [
```

Example:

```js
skills: [
  "JavaScript",
  "React",
  "Node.js"
]
```

Add your own:

```js
skills: [
  "JavaScript",
  "React",
  "Python",
  "C#"
]
```

---

# Adding a Project

Find:

```js
projects: [
```

Copy this structure:

```js
{
  name: "My Project",
  description: "A short project description.",
  technologies: ["React", "JavaScript"],
  image: "",
  link: "https://example.com",
  github: "https://github.com/username/project"
}
```

If you do not have a project image yet, leave:

```js
image: ""
```

The website will automatically show a styled project placeholder.

---

# Adding Project Images

Put your image inside:

```text
public/
```

Example:

```text
public/my-project.png
```

Then use:

```js
image: "/my-project.png"
```

---

# Changing Your Profile Image

Put your image inside:

```text
public/
```

For example:

```text
public/profile.jpg
```

Then open:

```text
src/data/profile.js
```

Change:

```js
profileImage: "",
```

To:

```js
profileImage: "/profile.jpg",
```

If you leave it empty, the website automatically displays your initials.

---

# Changing Social Links

Find:

```js
socials: {
```

Example:

```js
socials: {
  github: "https://github.com/yourname",
  discord: "",
  youtube: "",
  instagram: ""
}
```

Only links that contain a URL are displayed.

To hide a social platform:

```js
instagram: "",
```

To show it:

```js
instagram: "https://instagram.com/yourname",
```

---

# Changing Contact Information

Find:

```js
email: "you@example.com",
discord: "yourusername",
location: "Estonia",
```

Change them to your own information.

---

# Changing the Currently Section

Find:

```js
currently: [
```

Example:

```js
{
  icon: "Search",
  label: "Working on",
  value: "My new project"
}
```

You can change:

- Working on
- Learning
- Playing
- Building
- Location

Or create completely different items.

---

# Changing Colors

The main colors are located in:

```text
src/styles.css
```

At the top you will find:

```css
:root {
  --bg: #07111f;
  --bg2: #0a1728;
  --panel: rgba(16,31,50,.72);
  --text: #f2f6fb;
  --muted: #94a6ba;
  --blue: #77b9ff;
  --blue2: #3c78c5;
}
```

Important colors:

- `--bg` = Main background
- `--bg2` = Secondary background
- `--panel` = Card backgrounds
- `--text` = Main text
- `--muted` = Secondary text
- `--blue` = Main accent
- `--blue2` = Darker accent

You can experiment with these values to create your own theme.

---

# Changing the Website Title

Open:

```text
index.html
```

Find:

```html
<title>My Portfolio</title>
```

Change it:

```html
<title>John Smith — Portfolio</title>
```

The React app also updates the browser title using your name from `profile.js`.

---

# Changing the Favicon

Put your favicon inside:

```text
public/
```

Example:

```text
public/favicon.png
```

Then add this inside the `<head>` in `index.html`:

```html
<link rel="icon" type="image/png" href="/favicon.png" />
```

---

# Project Structure

```text
personal-portfolio/
│
├── public/
│
├── src/
│   ├── components/
│   │   └── Icon.jsx
│   │
│   ├── data/
│   │   └── profile.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

# Building for Production

When your website is ready:

```bash
npm run build
```

This creates:

```text
dist/
```

That folder contains your production website.

You can preview it with:

```bash
npm run preview
```

---

# Deploying to Vercel

1. Create a GitHub repository.
2. Upload this project.
3. Go to Vercel.
4. Sign in with GitHub.
5. Click **Add New Project**.
6. Select your repository.
7. Vercel should automatically detect Vite.
8. Click **Deploy**.

Your website will be live.

---

# Deploying to Netlify

1. Run:

```bash
npm run build
```

2. Go to Netlify.
3. Create a new site.
4. Connect your GitHub repository.

Or manually upload the:

```text
dist/
```

folder.

For Git integration use:

Build command:

```text
npm run build
```

Publish directory:

```text
dist
```

---

# Deploying to GitHub Pages

For the easiest GitHub Pages setup, you can use a GitHub Actions workflow.

## 1. Install the GitHub Pages helper

Run:

```bash
npm install --save-dev gh-pages
```

## 2. Add a deploy script

Inside `package.json`, add:

```json
"deploy": "npm run build && gh-pages -d dist"
```

## 3. Configure your Vite base path

If your repository is:

```text
username.github.io/my-portfolio
```

Change `vite.config.js` to:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/my-portfolio/",
  plugins: [react()],
});
```

If you use a custom domain or a root user page, your setup may differ.

## 4. Deploy

Run:

```bash
npm run deploy
```

Then enable GitHub Pages in your repository settings if needed.

---

# Troubleshooting

## `npm install` does not work

Check your Node version:

```bash
node -v
```

Install a current LTS version of Node.js and try again.

---

## Port already in use

Vite will usually automatically select another port.

---

## Changes do not appear

Stop the server with:

```text
Ctrl + C
```

Then start again:

```bash
npm run dev
```

Also make sure your JavaScript syntax is valid after editing `profile.js`.

---

# Customization Tips

Start here:

```text
src/data/profile.js
```

This is intentionally the main content file.

Only edit:

```text
src/styles.css
```

when you want to change the design or colors.

You should rarely need to edit:

```text
src/App.jsx
```

unless you want to change the actual website layout or add new functionality.

---

## Made to Be Yours

Replace the default content with your own projects, skills, hobbies, social links, and personality.

Have fun building it. 🚀
