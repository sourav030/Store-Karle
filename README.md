# 🚀 STORE KARLE  

**STORE KARLE** is a **cloud storage application** that allows users to store files online, similar to **Google Drive**, with a **2GB storage limit**.  

Built using **Next.js**, **Tailwind CSS**, and **ShadCN**, it leverages **Appwrite** for backend services, authentication, and file storage.  

---

## ✨ Features  

✅ **Upload & store files up to 2GB**  
✅ **Secure authentication using Appwrite**  
✅ **Modern, responsive UI with Tailwind CSS**  
✅ **Seamless cloud storage across devices**  

---

## 🛠 Tech Stack  

- **Frontend:** Next.js, Tailwind CSS, ShadCN  
- **Backend & Storage:** Appwrite  
- **Database:** Appwrite  
- **Authentication:** Appwrite Auth (Email & OTP)  

---

## ⚙️ Getting Started  

To set up the project locally, follow these steps:  

### 🔹 1. Fork & Clone the Repository  

- **Fork** this repository to your GitHub account.  
- **Clone** the forked repository:  

```bash
git clone https://github.com/yourusername/store-karle.git
cd store-karle
```

---

### 🔹 2. Install Dependencies  

```bash
npm install
# or
npm i
```

---

### 🔹 3. Set Up Appwrite  

**1️⃣ Create an Appwrite Project**  
- Go to [Appwrite Console](https://cloud.appwrite.io), sign up, and create a new project.  

**2️⃣ Configure Cloud Storage**  
- Enable and configure the storage feature in Appwrite.  

**3️⃣ Set Up Authentication**  
- Enable **Email & OTP authentication** in the Appwrite console.  

**4️⃣ Get Your Appwrite Credentials**  
- Copy your **Project ID, API Key, Database ID**, and other credentials from the Appwrite console.  

---

### 🔹 4. Configure Environment Variables  

- Create a `.env.local` file at the root of your project and add:  

```ini
NEXT_PUBLIC_APPWRITE_ENDPOINT="https://cloud.appwrite.io/v1"
NEXT_PUBLIC_APPWRITE_PROJECT=<YOUR_PROJECT_ID>
NEXT_PUBLIC_APPWRITE_DATABASE=<YOUR_DATABASE_ID>
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=<YOUR_USER_COLLECTION_ID>
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=<YOUR_FILES_COLLECTION_ID>
NEXT_PUBLIC_APPWRITE_BUCKET=<YOUR_BUCKET_ID>
NEXT_APPWRITE_SECRET=<YOUR_SECRET_KEY>
```

📌 **Make sure to replace the placeholder values with actual credentials from your Appwrite console.**  

---

### 🔹 5. Run the Development Server  

```bash
npm run dev
```

📌 Open **http://localhost:3000** to see your app running!  

---

## 🤝 Contributing  

Want to contribute? Follow these steps:  

1️⃣ **Fork** the repository.  
2️⃣ **Create a new branch**:  

```bash
git checkout -b feature-name
```

3️⃣ **Make your changes & commit**:  

```bash
git commit -am "Add new feature"
```

4️⃣ **Push to GitHub**:  

```bash
git push origin feature-name
```

5️⃣ **Create a Pull Request (PR)**.  

---

### 📝 Credits  

📌 **Initial updates of this project are inspired by JS Mastery.**  
**All credits go to them.** 🙌  
