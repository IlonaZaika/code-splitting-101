
# **React Code Splitting 101**

This repository demonstrates various approaches to implementing code splitting in a React project and explores their impact on performance. It includes four branches, each showcasing a different method of handling code splitting. Additionally, performance investigations are documented with screenshots to provide insights into the size of bundles and chunks created under each approach.

---

## **Branches Overview**
The repository contains the following branches, each corresponding to a specific approach to code splitting:

1. **`no-code-splitting`**:
   - All components are bundled into a single file (`bundle.js`).
   - This approach results in a larger initial bundle size and longer load times for the application.

2. **`manual-code-splitting`**:
   - Components are conditionally imported and loaded manually in the application code.
   - This approach uses `import()` for on-demand loading but manages routes manually with state.

3. **`lazy`**:
   - Implements React's `React.lazy` and `Suspense` for dynamic imports.
   - Automatically splits the code and provides a fallback UI while loading components.

4. **`router`**:
   - Integrates React Router for route-based code splitting.
   - Dynamically loads components corresponding to specific routes using `React.lazy`.

---

## **What Is Code Splitting?**
Code splitting is a technique that allows you to split your application’s code into smaller chunks that can be loaded on demand. Instead of loading the entire application upfront, only the code required for the initial screen is loaded, and the rest is fetched as needed.

### **Why Use Code Splitting?**
- **Improves Performance**:
  - Reduces the size of the initial JavaScript bundle, improving the app's load time.
- **Optimizes User Experience**:
  - Loads only the code needed for the current user action, ensuring faster interactions.
- **Reduces Bandwidth Usage**:
  - Users only download the parts of the app they actually interact with.

### **How Code Splitting Helps in React**
React supports code splitting out of the box via:
- **Dynamic Imports (`import()`)**
- **React.lazy and Suspense**
- **Route-Based Code Splitting with React Router**

By splitting the code, React apps can achieve faster load times, especially for large projects with many routes and components.

---

## **Performance Investigation**
The repository includes screenshots that highlight performance differences in each branch. These screenshots are located in the [`performance-results`](https://github.com/IlonaZaika/code-splitting-101/tree/main/performance-results) folder.

### **Key Observations:**
1. **No Code Splitting (`no-code-splitting`)**:
   - Entire app is bundled into a single `bundle.js` file.
   - Large bundle size increases the initial load time.
   - Example: `bundle.js` size is **302 kB**.

2. **Manual Code Splitting (`manual-code-splitting`)**:
   - Uses dynamic `import()` calls for conditional loading.
   - Separate chunks are created, but routing and chunk management require manual handling.
   - Example: Main bundle is **365 kB**, with additional chunks for individual components.

3. **Lazy Loading (`lazy`)**:
   - Automatically splits code using `React.lazy` and `Suspense`.
   - Clean and easy to implement, with React handling chunk creation and loading.
   - Example: Initial bundle is smaller, with deferred chunks for other components.

4. **Router-Based Code Splitting (`router`)**:
   - Routes are dynamically loaded using `React.lazy` with React Router.
   - Combines the benefits of route-based navigation and automatic code splitting.
   - Example: Minimal initial bundle size and efficient route management.

---

## **How to Run the Project**
1. Clone the repository:
   ``git clone https://github.com/IlonaZaika/code-splitting-101.git``
2. Navigate to the project directory:
`cd code-splitting-101`
3. Install dependencies:
`npm install`
4. Switch to a branch to test different approaches:
`git checkout <branch-name>`
5. Replace <branch-name> with one of the following:
- no-code-splitting
- manual-code-splitting
- lazy
- router
5. Start the development server:
`npm start`
