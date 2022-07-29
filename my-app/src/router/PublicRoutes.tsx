import { Navigate, Outlet} from 'react-router-dom'
import { isAuthenticated } from 'src/helper/constants'
import { routes } from './config/config.routes'

const PublicRoutes = () => {
  return !isAuthenticated ? <Outlet /> : <Navigate to={routes.login} />
}

export default PublicRoutes