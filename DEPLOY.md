# Deploy Karuna Worldwide site to free hosting + connect karunaworldwide.com

Your site is a **static React (Vite) app**. You can host it for **free** and connect **karunaworldwide.com** with no server.

---

## Option 1: Vercel (recommended)

### 1. Create account and deploy

1. Go to **[vercel.com](https://vercel.com)** and sign up (GitHub/Google/Email).
2. Install Vercel CLI (optional) or use the website:
   - **Via website:** Click **Add New → Project**, import your Git repo (GitHub/GitLab/Bitbucket) or **upload** the `company-website` folder.
   - **Via CLI:** In the project folder run:
     ```bash
     npm i -g vercel
     vercel
     ```
     Follow the prompts (link to your account, project name, etc.).
3. For **Build Command** use: `npm run build`  
   **Output Directory:** `dist`  
   (Vercel usually detects this for Vite.)
4. Deploy. You’ll get a URL like `company-website-xxx.vercel.app`.

### 2. Add custom domain karunaworldwide.com

1. In Vercel: **Project → Settings → Domains**.
2. Add:
   - `karunaworldwide.com`
   - `www.karunaworldwide.com` (optional but good for SEO)
3. Vercel will show the **DNS records** you need.

### 3. Set DNS at your domain registrar

Where you bought **karunaworldwide.com** (GoDaddy, Namecheap, Google Domains, etc.):

**For root domain (karunaworldwide.com):**

| Type | Name | Value |
|------|------|--------|
| **A** | `@` | `76.76.21.21` |

**For www (www.karunaworldwide.com):**

| Type | Name | Value |
|------|------|--------|
| **CNAME** | `www` | `cname.vercel-dns.com` |

*(Vercel may show slightly different values; use what they show under **Domains**.)*

Save the DNS changes. It can take from a few minutes up to 48 hours to apply. Vercel will issue SSL (HTTPS) automatically.

---

## Option 2: Netlify

### 1. Deploy

1. Go to **[netlify.com](https://www.netlify.com)** and sign up.
2. **Add New Site → Import from Git** (if you use Git) or **Deploy manually** (drag and drop the **contents** of the `dist` folder after running `npm run build`).
3. If using Git:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy. You’ll get a URL like `random-name-xxx.netlify.app`.

### 2. Custom domain

1. **Site settings → Domain management → Add custom domain**.
2. Add `karunaworldwide.com` and `www.karunaworldwide.com`.
3. Netlify will show the DNS records to add at your registrar (usually an A record and a CNAME for www).

---

## Build the project locally (before upload or Git)

From the `company-website` folder:

```bash
npm run build
```

The built site will be in the **`dist`** folder. You can upload that folder to Netlify (drag-and-drop) or connect the project to Vercel/Netlify via Git so they run `npm run build` for you.

---

## What you need to provide (for domain connection)

1. **Where is karunaworldwide.com registered?** (e.g. GoDaddy, Namecheap, Google Domains, etc.)
2. **Access to DNS settings** for that domain (username/password or access to “DNS / Nameservers / Manage DNS”).
3. After you deploy, the host (Vercel or Netlify) will show the **exact** A and CNAME values; add those in your registrar’s DNS page as shown above.

---

## Quick checklist

- [ ] Run `npm run build` and confirm `dist` is created.
- [ ] Deploy to Vercel or Netlify (Git or manual upload of `dist`).
- [ ] Add domain `karunaworldwide.com` (and `www`) in the host’s dashboard.
- [ ] Add the A and CNAME records at your domain registrar.
- [ ] Wait for DNS to update; HTTPS will be automatic.

If you tell me your domain registrar and which option you prefer (Vercel or Netlify), I can give you the exact DNS values and clicks for that provider.
