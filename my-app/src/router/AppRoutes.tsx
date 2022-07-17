import { Route, Routes } from 'react-router-dom'
<<<<<<< HEAD
import { ChangePage, ForgetPage, MainPage, SignIn } from 'src/components/page'
=======
import { ChangePage, ForgetPage, SignIn } from 'src/components/page'
>>>>>>> 3f74201 (add forms)
import { routes } from './config/config.routes'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.default} element={<SignIn />} />
      <Route path={routes.forget} element={<ForgetPage />} />
      <Route path={routes.change} element={<ChangePage />} />
<<<<<<< HEAD
      <Route path={routes.main} element={<MainPage />} />
=======
>>>>>>> 3f74201 (add forms)
    </Routes>
  )
}

export default AppRoutes
