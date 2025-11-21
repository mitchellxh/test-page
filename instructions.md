# GitHub Learning Lab: Step-by-Step Instructions

Welcome to the GitHub Learning Lab! Today you'll learn how to use Git and GitHub to create your own website.

## Prerequisites ✅
- Git is already installed on your computer
- You have a GitHub account
- You have a text editor (like VS Code, Notepad++, or any editor you prefer)

---

## Part 1: Getting the Template Files 📁

### Step 1: Clone the Template Repository

Open your terminal and run these commands:

```bash
# Navigate to your Desktop (or wherever you want to save your project)
cd ~/Desktop

# Clone the template repository
git clone https://github.com/mitchellxh/test-page.git

# Go into the project folder
cd test-page
```

### Step 2: Add the Template Files

Copy these files into your test-page folder:
- index.html
- style.css
- script.js
- README.md

Your instructor will provide these files or you can create them from the templates provided.

---

## Part 2: One-Time Setup - Connecting to GitHub 🔐

**Important:** This is the most technical part, but you only need to do it once per computer!

### Step 3: Configure Your Git Identity

Tell Git who you are (use your actual name and email):

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

To verify your settings worked:
```bash
git config --global --list
```

### Step 4: Create SSH Keys for GitHub

SSH keys are like a special password that connects your computer to GitHub securely.

#### 4.1: Check if you already have SSH keys

```bash
ls -la ~/.ssh
```

If you see files named `id_rsa.pub` or `id_ed25519.pub`, you already have keys! Skip to step 4.3.

#### 4.2: Generate new SSH keys (if needed)

```bash
ssh-keygen -t ed25519 -C "your.email@example.com"
```

When prompted:
- Press Enter to accept the default file location
- Press Enter twice to skip setting a passphrase (or set one if you prefer)

#### 4.3: Start the SSH agent

```bash
eval "$(ssh-agent -s)"
```

#### 4.4: Add your SSH key to the agent

```bash
ssh-add ~/.ssh/id_ed25519
```

#### 4.5: Copy your public key

**On Linux/Mac:**
```bash
cat ~/.ssh/id_ed25519.pub
```

**On Windows (Git Bash):**
```bash
cat ~/.ssh/id_ed25519.pub | clip
```

This will display (or copy) a long string starting with `ssh-ed25519`. Select and copy ALL of it.

### Step 5: Add SSH Key to GitHub

1. Go to GitHub.com and log in
2. Click your profile picture (top right) → Settings
3. In the left sidebar, click "SSH and GPG keys"
4. Click the green "New SSH key" button
5. Give it a title (like "My Laptop" or "School Computer")
6. Paste your SSH key into the "Key" field
7. Click "Add SSH key"
8. You may need to enter your GitHub password to confirm

### Step 6: Test Your Connection

```bash
ssh -T git@github.com
```

You should see: "Hi [your-username]! You've successfully authenticated..."

If you see a warning about authenticity, type `yes` and press Enter.

---

## Part 3: Working with Your Repository 📝

### Step 7: Make Your First Changes

1. Open the `index.html` file in your text editor
2. Find the line that says `YOUR_USERNAME` and replace it with your GitHub username
3. Change the heading "Welcome to My GitHub Page!" to something personal
4. Save the file

### Step 8: Check What Changed

```bash
git status
```

You should see your modified files listed in red.

### Step 9: Stage Your Changes

```bash
# Add all changed files
git add .

# Or add specific files
git add index.html
```

Check the status again:
```bash
git status
```

Files should now appear in green!

### Step 10: Commit Your Changes

```bash
git commit -m "Personalize my GitHub page"
```

### Step 11: Connect to YOUR GitHub Repository

First, create a new repository on GitHub:
1. Go to GitHub.com
2. Click the "+" icon (top right) → "New repository"
3. Name it something like "my-first-website"
4. Keep it public
5. DON'T initialize with README (we already have files)
6. Click "Create repository"

Now connect your local folder to GitHub:

```bash
# Remove the old remote (if cloned from template)
git remote remove origin

# Add your repository as the new remote
git remote add origin git@github.com:YOUR_USERNAME/my-first-website.git

# Verify the remote was added
git remote -v
```

### Step 12: Push Your Code to GitHub

```bash
# Push to GitHub (first time)
git push -u origin main
```

If you get an error about 'main' not existing, try:
```bash
git branch -M main
git push -u origin main
```

🎉 **Congratulations!** Your code is now on GitHub!

---

## Part 4: Enable GitHub Pages 🌐

### Step 13: Turn on GitHub Pages

1. Go to your repository on GitHub.com
2. Click "Settings" (in the repository navigation)
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Under "Branch", select "main" (or master)
6. Leave folder as "/ (root)"
7. Click "Save"

### Step 14: View Your Live Website!

After 2-5 minutes, your site will be live at:

```
https://YOUR_USERNAME.github.io/my-first-website/
```

Replace YOUR_USERNAME with your actual GitHub username!

---

## Part 5: Making More Changes 🔄

### Step 15: The Git Workflow

Whenever you want to make changes:

```bash
# 1. Make your changes in the files

# 2. Check what changed
git status

# 3. Stage the changes
git add .

# 4. Commit with a descriptive message
git commit -m "Add new project to portfolio"

# 5. Push to GitHub
git push
```

Remember: **Save → Add → Commit → Push**

---

## Quick Reference Card 📋

### Essential Commands

| Command | What it does |
|---------|-------------|
| `git clone [url]` | Copy a repository to your computer |
| `git status` | See what files have changed |
| `git add .` | Stage all changes for commit |
| `git commit -m "message"` | Save your changes with a description |
| `git push` | Upload changes to GitHub |
| `git pull` | Download changes from GitHub |

### Troubleshooting

**"Permission denied" error:**
- Make sure you're using SSH URL (git@github.com:...)
- Check that your SSH key is added to GitHub

**"Failed to push" error:**
- Try: `git pull` first, then `git push`

**Can't see my GitHub Pages site:**
- Wait 5-10 minutes
- Check the URL is correct
- Make sure GitHub Pages is enabled in Settings

**"Please tell me who you are" error:**
- Run the git config commands from Step 3

---

## Next Steps 🚀

Now that you have the basics, try:

1. **Customize Your Site:**
   - Change colors in `style.css`
   - Add more sections to `index.html`
   - Create new interactive features in `script.js`

2. **Learn More Git:**
   - Create branches: `git branch new-feature`
   - Switch branches: `git checkout new-feature`
   - Merge branches: `git merge new-feature`

3. **Explore GitHub Features:**
   - Create Issues to track tasks
   - Try Pull Requests for collaboration
   - Add a better README.md

4. **Resources to Continue Learning:**
   - [GitHub Skills](https://skills.github.com/)
   - [Pro Git Book](https://git-scm.com/book)
   - [GitHub Pages Documentation](https://docs.github.com/pages)

---

## Congratulations! 🎉

You've successfully:
- ✅ Set up Git on your computer
- ✅ Connected to GitHub with SSH
- ✅ Created a repository
- ✅ Made commits and pushed code
- ✅ Published a live website

Keep practicing these commands and soon they'll become second nature!

---

## Instructor Notes

This lab is designed to take 60-90 minutes:
- Part 1-2 (Setup): 30 minutes
- Part 3 (Git workflow): 20 minutes
- Part 4 (GitHub Pages): 10 minutes
- Part 5 (Practice): 20 minutes
- Troubleshooting buffer: 10 minutes

Common sticking points:
- SSH key setup (have HTTPS as backup)
- Understanding staging area
- Remembering to save files before git add
- GitHub Pages delay (manage expectations)