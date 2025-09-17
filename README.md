
# Post Manager

A React-based Post Manager application with full CRUD functionality, built using TypeScript, Tailwind CSS, Redux Toolkit Query, and the JSONPlaceholder API. The app allows users to view, create, update, delete, and search posts with server-side pagination, form validation, and toast notifications.

## Features
- **CRUD Operations**: Create, read, update, and delete posts using the JSONPlaceholder API.
- **Server-Side Pagination**: Fetch posts with `_page` and `_limit` query parameters.
- **Search Functionality**: Filter posts by title using client-side filtering with debounced input.
- **TypeScript**: Strong typing for props, state, and API responses.
- **Form Validation**: Client-side validation using `react-hook-form`.
- **Toast Notifications**: Success/error messages using `react-toastify`.
- **State Management**: Caching and mutations with Redux Toolkit Query.
- **Styling**: Responsive UI with Tailwind CSS.
- **Testing**: Unit tests with React Testing Library and Vitest.
- **Linting & Formatting**: ESLint and Prettier for code quality.
- **CI Pipeline**: GitHub Actions for automated testing and linting.

## Tech Stack
- **React**: Frontend framework
- **TypeScript**: Type safety
- **Redux Toolkit Query**: State management and API caching
- **Tailwind CSS**: Styling
- **Axios**: API requests
- **React Hook Form**: Form handling and validation
- **React Toastify**: Notifications
- **Lodash Debounce**: Search input debouncing
- **Vitest & React Testing Library**: Unit testing
- **ESLint & Prettier**: Code quality
- **GitHub Actions**: CI/CD

## Setup Instructions

### Prerequisites
- Node.js (>=16)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/<wralak>/post-manager.git
   cd post-manager
