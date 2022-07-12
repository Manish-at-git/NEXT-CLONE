import { useDispatch, useSelector } from "react-redux";
import { navbarToggle } from "../redux/actions/index";

import { wrapper } from "../redux/store";
import { END } from "redux-saga";

export default function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.state);
  // console.log(data);

  const changeState = () => {
    dispatch(navbarToggle());
  };
  return (
    <div>
      <button onClick={changeState}>Click me</button>
    </div>
  );
}

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    console.log("context");
    store.dispatch(navbarToggle());
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);
