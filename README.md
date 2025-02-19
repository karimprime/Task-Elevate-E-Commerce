```markdown
# Task Elevate - E-Commerce

## 🚀 Project Description
Task Elevate is a **fully responsive E-Commerce products gallery** that fetches product details from the **Fake Store API** and provides a smooth user experience with dynamic navigation and modern UI design. Built with **Angular 19**, Tailwind CSS, and Flowbite, the application ensures a high-performance, structured, and visually appealing shopping experience.

## 🎯 Features
- **Products Listing Page**: Fetch and display products with their **name, image, price, and short description**.
- **Product Details Page**: View a product's **full details, including name, image, description, price, and category**.
- **Dynamic Routing**: Click on a product to navigate to its details page.
- **Search Functionality**: Easily find products by name.
- **Loading Indicators**: Smooth UX with loading states while fetching data.
- **Modern UI**: Styled using **Tailwind CSS & Flowbite** for a clean and professional look.
- **Fully Responsive**: Works seamlessly across desktop, tablet, and mobile devices.

## 📸 Live Demo
🔗 [Task Elevate E-Commerce](https://task-elevate-e-commerce.vercel.app/#/home)

## 🛠️ Tech Stack
- **Frontend**: Angular 19, TypeScript
- **Styling**: Tailwind CSS, Flowbite
- **API**: Fake Store API
- **Deployment**: Vercel

## ⚙️ Installation & Setup
Follow these steps to run the project locally:

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/karimprime/Task-Elevate-E-Commerce.git
cd Task-Elevate-E-Commerce
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
ng serve
```
Access the app at: `http://localhost:4200/`

## 📝 API Integration
The project fetches product data from the **Fake Store API**:
```
https://fakestoreapi.com/products
```

## ✅ Evaluation Criteria (Completed)
✔️ Fetch and display products dynamically.  
✔️ Implement product detail pages with **dynamic routing**.  
✔️ Ensure a fully **responsive UI** using Tailwind CSS.  
✔️ Implement **search and loading states**.  
✔️ Implement **Dynamic Routing**.  
✔️ Maintain **clean, reusable, and structured** code.  
✔️ Provide **clear documentation** (this README!).

## 📂 Project Structure
```
Task-Elevate-E-Commerce/
│── public/
│── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── services/
│   │   │   │   ├── flowbite/
│   │   │   │   ├── e-commerce/
│   │   │   │   │   ├── products/
│   │   │   │   ├── mode/
│   │   │   ├── interceptors/
│   │   │   │   ├── loading/
│   │   │   │   ├── success/
│   │   │   │   ├── errors/
│   │   │   ├── Environment/
│   │   ├── features/
│   │   │   ├── layout/
│   │   │   │   ├── navbar/
│   │   │   │   ├── footer/
│   │   │   │   ├── product-card/
│   │   │   ├── pages/
│   │   │   │   ├── home/
│   │   │   │   ├── product-details/
│   │   ├── shared/
│   │   │   ├── interface/
│   │   │   ├── pipes/
│   ├── styles/
│   ├── appConfig/
│── angular.json
│── package.json
│── README.md
```

## 🤝 Contributing
Want to improve the project? Feel free to fork the repo, make changes, and submit a pull request.

## 📩 Contact
For any questions, reach out to me at: 
📧 **karimashraf000@gmail.com**

---
🎯 Built with passion by **Karim Ashraf** 🚀
```
