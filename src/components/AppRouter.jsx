import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { privateRoutes, publicRoutes } from "../routes";
import { useAuthState } from "react-firebase-hooks/auth";

import { Context } from "../index";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/consts";


function AppRouter() {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return user
    ?
    (
      <Routes>
        {privateRoutes.map(({ path, element }) => <Route key={path} path={path} element={element} />)}
        <Route path="*" element={<Navigate replace to={CHAT_ROUTE} />} />
      </Routes>
    )
    :
    (
      <Routes>
        {publicRoutes.map(({ path, element }) => <Route key={path} path={path} element={element} />)}
        <Route path="*" element={<Navigate replace to={LOGIN_ROUTE} />} />
      </Routes>
    )
}

export default AppRouter