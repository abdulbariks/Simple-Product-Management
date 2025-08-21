# Next.js 15 Product Management App

A simple **Next.js 15** application demonstrating public and protected pages with authentication using **NextAuth.js**. Users can view a landing page, browse products, view product details, and, after logging in, access a protected dashboard to add new products.

---

## 🚀 Core Features

1. **Landing Page (`/`)**

   - Sections: Navbar, Hero, Product Highlights, Footer
   - Navigation to login and products
   - No authentication required

2. **Login Page (`/login`)**

   - Social login (Google) or credentials login
   - Redirects to `/products` after successful login

3. **Product List Page (`/products`)**

   - Publicly accessible
   - Fetches and displays products from a mock backend or database
   - Each product shows: name, description, price, and a details button

4. **Product Details Page (`/products/[id]`)**

   - Shows full details of a single product
   - Publicly accessible

5. **Protected Add Product Page (`/dashboard/add-product`)**
   - Accessible only when logged in
   - Form to add new products to the database
   - Redirects unauthenticated users to login

---

## ✨ Optional Enhancements

- Loading spinner on form submission
- Toast notifications on successful product add
- Light/Dark theme toggle

---

## 🛠 Technologies Used

- Next.js 15 (App Router)
- NextAuth.js for authentication
- MongoDB with Mongoose
- Route Handlers (`/api`) for backend APIs
- Tailwind CSS for styling

---

## ⚙️ Setup & Installation

1. **Clone the repository**

git clone https://github.com/abdulbariks/Simple-Product-Management

cd Simple-Product-Management

2. **Install dependencies**

npm install

3. **Setup environment variables**

- MONGODB_URI=your-mongodb-connection-string
- NEXTAUTH_SECRET=your-secret
- GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
- GOOGLE_CLIENT_SECRET=your-google-client-secret

3. **Run the development server**

npm run dev
