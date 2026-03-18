# Push code to GitHub

Your project is already committed locally. Follow these steps to create the repo on GitHub and push.

---

## Step 1: Create a new repository on GitHub

1. Open **https://github.com/new**
2. **Repository name:** `karunaworldwide-website` (or any name you like)
3. **Description (optional):** Karuna Worldwide LLP company website
4. Choose **Public**
5. **Do not** check "Add a README", "Add .gitignore", or "Choose a license" (the project already has these)
6. Click **Create repository**

---

## Step 2: Connect and push from your PC

Open **PowerShell** or **Command Prompt**, then run (replace `YOUR_USERNAME` with your GitHub username):

```powershell
cd "c:\Users\msi gaming\Downloads\Projects\company-website"

git remote add origin https://github.com/YOUR_USERNAME/karunaworldwide-website.git

git push -u origin main
```

When asked, sign in with your **GitHub username** and **password**.  
If you use 2FA, use a **Personal Access Token** instead of the password:  
GitHub → Settings → Developer settings → Personal access tokens → Generate new token (with `repo` scope).

---

## If you used a different repo name

If your repo is e.g. `https://github.com/YOUR_USERNAME/my-website.git`, use that URL in the `git remote add` command instead.

---

## After pushing

- Your code will be at: **https://github.com/YOUR_USERNAME/karunaworldwide-website**
- You can then **import this repo in Vercel** (Add New → Project → Import Git Repository) and follow **DEPLOY-HOSTINGER.md** to connect your Hostinger domain.
