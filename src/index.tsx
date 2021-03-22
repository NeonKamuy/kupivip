import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./assets/index.scss";
import { store } from "./redux/store";
import App from "./views/App";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
