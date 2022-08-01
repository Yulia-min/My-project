import { Navigate, Outlet} from 'react-router-dom'
import { routes } from './config/config.routes'

const ProtectedRoutes = () => {
  const isAuthenticated = localStorage.getItem('access')
  return isAuthenticated ? <Outlet /> : <Navigate to={routes.login} />
}

export default ProtectedRoutes