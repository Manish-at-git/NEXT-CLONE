import { NAVBARCLICKED, NAVBARTOGGLED } from "../actionTypes";

const navbarToggle = () => {
  return {
    type: NAVBARTOGGLED,
  };
};

const navbarClose = () => ({
  type: NAVBARCLICKED,
});

export { navbarToggle, navbarClose };
