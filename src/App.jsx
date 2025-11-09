import Home from "./pages/Home/Home/Home";
import useUserHook from "./hooks/useUserHook";

const App = () => {
  const { user } = useUserHook();
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
