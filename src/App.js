import logo from "./logo.svg";
import "./App.css";
import Profile from "./component/Profile";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userSlice from "./store/userSlice";

const store = configureStore({
  reducer: {
    // key : value
    user: userSlice,
  },
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Profile />
      </div>
    </Provider>
  );
}

export default App;
