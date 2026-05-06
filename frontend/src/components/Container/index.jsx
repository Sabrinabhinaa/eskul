import Styles from "./index.module.css";

function Container({ children }) {
    return (
        <div className={Styles.Container}>
            {children}
        </div>
    );
}

export default Container;
