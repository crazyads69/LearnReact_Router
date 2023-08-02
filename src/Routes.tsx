import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import { Header } from './Header';
import App from './App';
import { HomePage } from './pages/HomePage';
import { ErrorPage } from './pages/ErrorPage';
import { ProductPage } from './pages/ProductPage';
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'products', element: <ProductsPage /> },
            { path: 'products/:id', element: <ProductPage /> },
        ],
    },
]);

export function Routes() {
    return <RouterProvider router={router} />;
}
