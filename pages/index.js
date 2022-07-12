import { useDispatch, useSelector } from "react-redux";
import { navbarToggle } from "../redux/actions/index";

export default function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.state);
  console.log(data);

  const changeState = () => {
    dispatch(navbarToggle());
  };
  return (
    <div>
      <button onClick={changeState}>Click me</button>
    </div>
  );
}
