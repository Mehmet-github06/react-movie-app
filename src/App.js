import React from "react";

import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/Auth.Context";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </div>
  );
};

export default App;
