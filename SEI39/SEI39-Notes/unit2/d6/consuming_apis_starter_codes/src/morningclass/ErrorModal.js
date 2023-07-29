// import React from "react";

// import styles from "./ErrorModal.module.css";
// import Button from "./Button";

// const ErrorModal = (props) => {
//   return (
//     <div className={styles.backdrop} onclick={props.okayClicked}>
//       <div className={`${styles.board} ${styles.modal}`}>
//         <header className={styles.header}>
//           <h2>{props.title}</h2>
//         </header>
//         <div className={styles.content}>
//           <p>{props.message}</p>
//         </div>
//         <footer className={styles.actions}>
//           <Button onClick={props.okayClicked}>Okay</Button>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default ErrorModal;

//Below codes modify the top errormodal codes such that modal appears at the front of everything
//rmb to reference the modal root in index.html
import React from "react";
import ReactDOM from "react-dom";

import styles from "./ErrorModal.module.css";
import Button from "./Button";

const OverLay = (props) => {
  return (
    <div className={styles.backdrop} onclick={props.okayClicked}>
      <div className={`${styles.board} ${styles.modal}`}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.okayClicked}>Okay</Button>
        </footer>
      </div>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <OverLay title={props.title} message={props.message} okayClicked={props.okayClicked} />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default ErrorModal;
