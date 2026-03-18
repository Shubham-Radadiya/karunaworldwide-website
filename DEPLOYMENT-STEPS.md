# Karuna Worldwide – Full Deployment Steps

Your code is on GitHub: **https://github.com/Shubham-Radadiya/karunaworldwide-website**

Follow these steps in order to deploy and connect **karunaworldwide.com** (Hostinger).

---

## PART 1: Deploy on Vercel

### Step 1 – Sign up / Log in to Vercel
- Go to **https://vercel.com**
- Click **Sign Up** (or **Log In**)
- Choose **Continue with GitHub** and authorize Vercel

---

### Step 2 – Import your GitHub project
1. On Vercel dashboard, click **Add New…** → **Project**
2. Under **Import Git Repository**, find **Shubham-Radadiya/karunaworldwide-website**
3. Click **Import** next to it

---

### Step 3 – Configure build (check these)
Before deploying, confirm:

| Field | Value |
|-------|--------|
| **Framework Preset** | Vite |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |

Leave **Root Directory** empty.  
Click **Deploy**.

---

### Step 4 – Wait and test
- Wait 1–2 minutes for the build to finish
- You’ll get a link like: **https://karunaworldwide-website-xxx.vercel.app**
- Open it and check that the site loads (Home, Products, About, Contact)

---

## PART 2: Add your domain in Vercel

### Step 5 – Open Domains
1. Open your **project** on Vercel
2. Go to the **Settings** tab
3. Click **Domains** in the left sidebar

---

### Step 6 – Add both domains
1. In the input under “Add”, type: **karunaworldwide.com**
2. Click **Add**
3. Again type: **www.karunaworldwide.com**
4. Click **Add**

Vercel will show a status like “Invalid Configuration” until DNS is set. Note the records it shows (usually):

- **karunaworldwide.com** → **A** record → **76.76.21.21**
- **www.karunaworldwide.com** → **CNAME** → **cname.vercel-dns.com**

*(Use the exact values Vercel shows on your Domains page.)*

---

## PART 3: Set DNS in Hostinger

### Step 7 – Open DNS in Hostinger
1. Log in at **https://www.hostinger.com**
2. Open **hPanel**
3. Go to **Domains** (or **Websites** → **Domains**)
4. Find **karunaworldwide.com** → click **Manage**
5. Open **DNS Zone** / **Manage DNS** / **Advanced DNS** (the page where you see A, CNAME, etc.)

---

### Step 8 – Add or edit A record (root domain)
1. Find the **A** record with **Name** = **@** (or blank for root)
2. **Edit** it if it exists, or **Add New Record** if not
3. Set:
   - **Type:** A  
   - **Name:** @ (or leave blank)  
   - **Points to / Value:** **76.76.21.21**  
   - **TTL:** 14400 or default  
4. **Save**

---

### Step 9 – Add or edit CNAME record (www)
1. Find the **CNAME** record with **Name** = **www**
2. **Edit** it if it exists, or **Add New Record** if not
3. Set:
   - **Type:** CNAME  
   - **Name:** www  
   - **Points to / Value:** **cname.vercel-dns.com**  
   - **TTL:** 14400 or default  
4. **Save**

---

### Step 10 – Remove wrong records (if any)
- If there is an **A** record for **www**, **delete** it (only **CNAME** for www should remain)
- Keep only one A for **@** pointing to **76.76.21.21**

---

## PART 4: Wait and verify

### Step 11 – Wait for DNS
- DNS can take **5 minutes to 48 hours** (often 15–60 minutes)
- In Vercel → **Settings** → **Domains**, refresh until both domains show **Valid** (green)

---

### Step 12 – Test your site
- Open **https://karunaworldwide.com**
- Open **https://www.karunaworldwide.com**
- Check that the site loads and all pages work (Home, Products, About, Contact)

---

## Quick reference – Hostinger DNS

| Type  | Name | Value / Points to      |
|-------|------|------------------------|
| **A** | **@** | **76.76.21.21**        |
| **CNAME** | **www** | **cname.vercel-dns.com** |

---

## Checklist

- [ ] Step 1–4: Deployed on Vercel, .vercel.app link works  
- [ ] Step 5–6: Added karunaworldwide.com and www in Vercel Domains  
- [ ] Step 7–10: In Hostinger DNS, A for @ = 76.76.21.21, CNAME for www = cname.vercel-dns.com  
- [ ] Step 11–12: DNS Valid in Vercel, https://karunaworldwide.com works  

If any step fails, say which step and what you see (e.g. “Step 8 – Hostinger doesn’t have A record”) and we can fix it.
