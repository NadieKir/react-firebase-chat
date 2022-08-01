import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { privateRoutes, publicRoutes } from "../routes";

function AppRouter() {
  const user = true;
  return user
    ?
    (
      <Routes>
        {privateRoutes.map(({ path, element }) => <Route path={path} element={element} />)}
        <Route path="*" element={<Navigate replace to={CHAT_ROUTE} />} />
      </Routes>
    )
    :
    (
      <Routes>
        {publicRoutes.map(({ path, element }) => <Route path={path} element={element} />)}
        <Route path="*" element={<Navigate replace to={LOGIN_ROUTE} />} />
      </Routes>
    )
}

export default AppRouter