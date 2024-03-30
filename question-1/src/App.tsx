import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './App.css'
import Home from './pages/home/home'
import NotFound from './pages/notFound/NotFound'

const App = () => {
	const Layout = () => {
		return (
			<div className="app">
				<Outlet />
			</div>
		)
	}
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					path: '/',
					element: <Home />,
				},
			],
		},
		{
			path: '/*',
			element: <NotFound />,
		},
	])

	return (
		<div>
			<RouterProvider router={router} />
		</div>
	)
}

export default App
