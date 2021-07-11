import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import "./Modal.css";

const animationTiming = {
	enter: 400,
	exit: 1000,
};
// transition meh state seh h and Css transition meh classNames define krke h
const modal = (props) => {
	return (
		<CSSTransition
			mountOnEnter
			unmountOnExit
			in={props.show}
			timeout={animationTiming}
			classNames={{
				enter: "",
				enterActive: "ModalOpen",
				exit: "",
				exitActive: "ModalClose",
				appear: "",
				appearActive: "",
			}}
			// in sab new classes ko merge krdeta h inmpeh
		>
			<div className="Modal">
				<h1>A Modal</h1>
				<button className="Button" onClick={props.closed}>
					Dismiss
				</button>
			</div>
		</CSSTransition>
	);
};

export default modal;
