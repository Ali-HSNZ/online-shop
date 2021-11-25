import Header from "../Components/Header/Header";
import Styles from "./Layout.module.css";


const Layout = ({children}) => {
  return (
    <div className={Styles.parent}>
          <div className={Styles.parentCenter}>
                  <Header />
                  {children}
          </div>
    </div>
  );
};

export default Layout;
