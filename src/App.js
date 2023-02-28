import Home from "./Components/Home/Home";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles["app__container"]}>
        <Home />
      </div>
    </>
  );
}

export default App;
