# STORE KARLE

**STORE KARLE** is a cloud storage application that allows users to store files on the cloud (similar to Google Drive) with a storage limit of 2GB. This application is built using **Next.js**, styled with **Tailwind CSS** and **SHADCN**, and uses **Appwrite** for the database and backend services.

---

## Features

- Upload and store files up to 2GB on the cloud.
- User authentication and management via Appwrite.
- Responsive UI with modern design using Tailwind CSS.
- Cloud storage that syncs seamlessly across devices.

---

## Tech Stack

- **Frontend:** Next.js, Tailwind CSS, ShadCN
- **Backend:** Appwrite (for file storage, authentication, and database)
- **Database:** Appwrite
- **Authentication:** Appwrite Auth (Email & OTP)

---

## Getting Started

To set up the application locally, follow the steps below:

### 1. Fork & Clone the Repository

- Fork this repository to your GitHub account.
- Clone the forked repository to your local machine:

```bash
git clone https://github.com/yourusername/store-karle.git
cd store-karle
```
### 2. Install Dependencies

- Install the required dependencies using npm
```
npm install
# or
npm i
```

### 3. Setup Appwrite

**Create an Appwrite Project:**
- Go to Appwrite Console, sign up, and create a new project.

**Set Up Cloud Storage:**
- Enable and configure the storage feature in Appwrite.
  
**Set Up Authentication:**
- Enable email/otp authentication in the Appwrite console.
  
**Get Your Appwrite Credentials:**
- Copy your Project ID, API Key, and other credentials from the Appwrite console.

### 4. Environment Variables
- Create a .env.local file at the root of your project and add the following configuration, based on the env.example file:

```
NEXT_PUBLIC_APPWRITE_ENDPOINT="https://cloud.appwrite.io/v1"
NEXT_PUBLIC_APPWRITE_PROJECT=<YOUR PROJECT ID>
NEXT_PUBLIC_APPWRITE_DATABASE=<YOUR DATABASE ID>
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=<YOUR USER COLLECTION ID>
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=<YOUR FILES COLLECTION ID>
NEXT_PUBLIC_APPWRITE_BUCKET=<YOUR BUCKET ID>
NEXT_APPWRITE_SECRET=<YOUR SECRET KEY>
```

**Note:** Make sure to replace the placeholder values with the actual ones from your Appwrite console.

### 5. Run The Developement Server
-Once everything is set up, start the development server:

```
npm run dev
```

# Contributing #
- Fork the repository.
- Create a new branch (git checkout -b feature-name).
- Make your changes.
- Commit your changes (git commit -am 'Add new feature').
- Push to the branch (git push origin feature-name).
- Create a pull request.

### INITIAL UPDATE OF THIS PROJECT ARE INSPIRED OR COPIED FROM JS MASTERY, ALL CREDIT GOES TO THEM.
