# Deploy Karuna Worldwide + Connect Hostinger Domain (karunaworldwide.com)

Complete steps: deploy the site on **Vercel** (free) and point your **Hostinger** domain to it.

---

## Part 1: Deploy the site on Vercel

### Step 1.1 – Create a Vercel account

1. Open **https://vercel.com**
2. Click **Sign Up**
3. Sign up with **GitHub**, **GitLab**, **Bitbucket**, or **Email**

---

### Step 1.2 – Push your project to GitHub (so Vercel can use it)

1. Create a **GitHub** account at https://github.com if you don’t have one.
2. Create a **new repository** (e.g. name: `karunaworldwide-website`), leave it empty (no README).
3. On your PC, open a terminal in the **company-website** folder:
   ```bash
   cd "c:\Users\msi gaming\Downloads\Projects\company-website"
   git init
   git add .
   git commit -m "Initial commit - Karuna Worldwide website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/karunaworldwide-website.git
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your GitHub username. Use your GitHub login when asked.

**If you don’t want to use Git:** you can deploy by uploading the project folder to Vercel (see Step 1.4 alternative).

---

### Step 1.3 – Import the project in Vercel

1. In Vercel, click **Add New…** → **Project**
2. If you used GitHub: choose **Import Git Repository**, select your **karunaworldwide-website** repo, click **Import**
3. **Configure Project** (Vercel usually fills these for Vite):
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Click **Deploy**
5. Wait 1–2 minutes. When it’s done you’ll see a URL like:  
   **https://company-website-xxxx.vercel.app**  
   Open it to confirm the site works.

---

### Step 1.4 – Alternative: Deploy without Git (upload folder)

1. In the project folder run:
   ```bash
   npm run build
   ```
2. In Vercel: **Add New…** → **Project**
3. Choose **Deploy without Git** (or “Upload”)
4. Drag and drop the **entire `company-website` folder** (the one that contains `package.json` and `dist` after build), or the **`dist`** folder only if the option says to upload the built output
5. Set **Build Command:** `npm run build` and **Output Directory:** `dist` if asked
6. Deploy. Note the **.vercel.app** URL.

---

## Part 2: Add your domain in Vercel

### Step 2.1 – Add domain

1. In Vercel, open your **project**
2. Go to **Settings** → **Domains**
3. In “Add domain”, type: **karunaworldwide.com** → **Add**
4. Add again: **www.karunaworldwide.com** → **Add**

### Step 2.2 – Note the DNS records Vercel shows

After adding, Vercel will show something like:

- For **karunaworldwide.com** (root):  
  **A** record → **76.76.21.21**
- For **www.karunaworldwide.com**:  
  **CNAME** record → **cname.vercel-dns.com**

*(If Vercel shows different values, use exactly what they show.)*

---

## Part 3: Point Hostinger domain to Vercel (DNS)

### Step 3.1 – Open DNS in Hostinger

1. Log in to **https://www.hostinger.com** → **hPanel**
2. Go to **Domains** (or **Website** → **Domains**)
3. Find **karunaworldwide.com** and click **Manage**
4. Open **DNS / Nameservers** or **Advanced DNS** or **Zone** (the place where you add A, CNAME, etc.)

---

### Step 3.2 – Add/update A record (for karunaworldwide.com)

1. Find the **A** record for **@** (or “root” / “karunaworldwide.com”).
2. **If it already exists:** edit it.  
   **If not:** click **Add record** / **Add new record**.
3. Set:
   - **Type:** **A**
   - **Name:** **@** (or leave blank if Hostinger uses “@” for root)
   - **Points to / Value / Target:** **76.76.21.21**
   - **TTL:** 14400 or 3600 (default is fine)
4. Save.

---

### Step 3.3 – Add/update CNAME record (for www.karunaworldwide.com)

1. Find the **CNAME** record for **www**.
2. **If it exists:** edit it.  
   **If not:** click **Add record**.
3. Set:
   - **Type:** **CNAME**
   - **Name:** **www**
   - **Points to / Value / Target:** **cname.vercel-dns.com**
   - **TTL:** 14400 or default
4. Save.

---

### Step 3.4 – Remove conflicting records (if any)

- If there is an **A** record for **www**, remove it (so only **CNAME** for **www** remains).
- If Hostinger had old **A** or **CNAME** for this domain pointing to Hostinger hosting, replacing them with the values above is correct.

---

## Part 4: Wait for DNS and SSL

1. **DNS:** Changes can take from **5 minutes** up to **24–48 hours**. Often it’s within 1–2 hours.
2. In Vercel → **Settings** → **Domains**, you’ll see a status for **karunaworldwide.com** and **www.karunaworldwide.com**. Wait until both show **Valid** (green).
3. **HTTPS:** Vercel will issue free SSL. Once DNS is valid, **https://karunaworldwide.com** and **https://www.karunaworldwide.com** will work.

---

## Quick checklist

- [ ] Vercel account created
- [ ] Project on Vercel (from Git or upload), site opens on **.vercel.app** URL
- [ ] In Vercel: Domains added → **karunaworldwide.com** and **www.karunaworldwide.com**
- [ ] In Hostinger: **A** for **@** → **76.76.21.21**
- [ ] In Hostinger: **CNAME** for **www** → **cname.vercel-dns.com**
- [ ] No conflicting A for **www**; only CNAME for **www**
- [ ] Wait for DNS to show **Valid** in Vercel, then test **https://karunaworldwide.com**

---

## If something doesn’t work

- **Site not loading on domain:** Wait longer for DNS, then clear browser cache or try in incognito.
- **Vercel shows “Invalid configuration”:** Double-check A and CNAME in Hostinger match exactly what Vercel shows (no extra spaces, correct **@** and **www**).
- **Only www works or only root works:** Ensure both A (@) and CNAME (www) are set; remove any other A for **www**.

If you tell me at which step you’re stuck (e.g. “I’m at Hostinger DNS” or “Vercel says invalid”), I can give you the exact clicks and values for that step.
