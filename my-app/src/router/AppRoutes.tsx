import { Route, Routes } from 'react-router-dom'
<<<<<<< HEAD
<<<<<<< HEAD
import { ChangePage, ForgetPage, MainPage, SignIn } from 'src/components/page'
=======
import { ChangePage, ForgetPage, SignIn } from 'src/components/page'
>>>>>>> 3f74201 (add forms)
=======
import { ChangePage, ForgetPage, MainPage, SignIn } from 'src/components/page'
>>>>>>> c0933a2 (add request)
import { routes } from './config/config.routes'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.default} element={<SignIn />} />
      <Route path={routes.forget} element={<ForgetPage />} />
      <Route path={routes.change} element={<ChangePage />} />
<<<<<<< HEAD
<<<<<<< HEAD
      <Route path={routes.main} element={<MainPage />} />
=======
>>>>>>> 3f74201 (add forms)
=======
      <Route path={routes.main} element={<MainPage />} />
>>>>>>> c0933a2 (add request)
    </Routes>
  )
}

export default AppRoutes
