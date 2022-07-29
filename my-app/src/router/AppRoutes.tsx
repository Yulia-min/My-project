import { Navigate, Route, Routes } from 'react-router-dom'
import { ChangePasswordPage, EditProfilePage, ForgetPasswordPage, MainPage, ProfilePage, SignIn } from 'src/components/page'
import { routes } from './config/config.routes'
import ProtectedRoutes from './ProtectedRoutes'
import PublicRoutes from './PublicRoutes'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.default} element={<PublicRoutes /> }>
        <Route path={routes.default} element={<Navigate to={routes.login} />} />
        <Route path={routes.login} element={<SignIn />} />
        <Route path={routes.forget} element={<ForgetPasswordPage />} />
        <Route path={routes.change} element={<ChangePasswordPage />} />
      </Route>
      <Route path={routes.default} element={<ProtectedRoutes /> }>
          <Route path={routes.profile} element={<ProfilePage /> } />
          <Route path={routes.main} element={<MainPage />} />
          <Route path={routes.edit_user} element={<EditProfilePage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
