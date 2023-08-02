import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ProductsPage } from './pages/ProductsPage';
import { Header } from './Header';
import App from './App';
import { HomePage } from './pages/HomePage';
import { ErrorPage } from './pages/ErrorPage';
import { ProductPage } from './pages/ProductPage';
const AdminPage = lazy(() => import('./pages/AdminPage'));
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'admin',
                element: (
                    <Suspense
                        fallback={
                            <div className="text-center p-5 text-xl text-slate-900">
                                Loading ...
                            </div>
                        }>
                        <AdminPage />
                    </Suspense>
                ),
            },
            { index: true, element: <HomePage /> },
            { path: 'products', element: <ProductsPage /> },
            { path: 'products/:id', element: <ProductPage /> },
        ],
    },
]);

export function Routes() {
    return <RouterProvider router={router} />;
}
