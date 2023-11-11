import React from "react";
import { Route, Routes } from "react-router-dom";
import { BooksListPage, NotFoundPage, SignInPage, SignUpPage } from "../pages";
const RouterPage = () => {
  return (
      <Routes>
        <Route path="/" element={<BooksListPage />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  );
};

export default RouterPage;

