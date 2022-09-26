import "./styles.css";
import { Filter } from "./components/Filter";
import { Products } from "./components/Products";

export default function App() {
  return (
    <div className="App">
      <Filter />
      <Products />
    </div>
  );
}
