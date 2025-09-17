import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import PostList from "./components/PostList";
import { store } from "./store";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <PostList />
      <ToastContainer />
    </Provider>
  );
}

export default App;