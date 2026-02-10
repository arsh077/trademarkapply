# Firebase Setup Instructions

## Step 1: Go to Firebase Console
1. Visit: https://console.firebase.google.com/
2. Select your project: **trademarkapply**

## Step 2: Enable Firestore Database
1. Click on **"Firestore Database"** in the left sidebar
2. Click **"Create database"**
3. Choose **"Start in production mode"** (we'll add rules next)
4. Select your preferred location (e.g., asia-south1 for India)
5. Click **"Enable"**

## Step 3: Set Firestore Rules
1. In Firestore Database, click on **"Rules"** tab
2. Replace the existing rules with the content from `firestore.rules` file:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    
    // Leads Collection Rules
    match /leads/{leadId} {
      // Allow anyone to create (submit form)
      allow create: if true;
      
      // Allow read and delete (for admin dashboard)
      allow read: if true;
      allow delete: if true;
      allow update: if true;
    }
    
    // Deny all other collections by default
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

3. Click **"Publish"**

## Step 4: Test Your Setup
1. Run your app: `npm run dev`
2. Fill out the consultation form
3. Check Firebase Console > Firestore Database
4. You should see a new document in the "leads" collection!

## Step 5: View Leads in Admin Dashboard
1. Go to: http://localhost:3000/
2. Click "Admin" button
3. Login with:
   - Username: `admin`
   - Password: `admin123`
4. You'll see all leads from Firebase!

## Features:
✅ Real-time data sync across all devices
✅ Automatic backup in Firebase
✅ Admin can view, delete, and export leads
✅ Refresh button to fetch latest data
✅ Works offline with localStorage fallback

## Security Note:
Current rules allow anyone to read/write. For production:
1. Enable Firebase Authentication
2. Update rules to check for admin authentication
3. Add user roles and permissions

## Firestore Collections Structure:

### leads
```
{
  name: string,
  email: string,
  phone: string,
  businessName: string,
  brandName: string,
  businessType: string,
  service: string,
  message: string,
  createdAt: timestamp,
  status: string (new/contacted/closed)
}
```
