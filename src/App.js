// import React, { Component } from "react";
// import Candidates from "./component/candidates/Candidates";
// //import "./styles/foundation.min.css";
// //import "./styles/custom.css";
// import Routes from "./routes";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       appName: "Vikash Sharma"
//     };
//   }

//   render() {
//     return (
//       <div className="off-canvas-wrapper">
//         <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
//           <div className="off-canvas-content" data-off-canvas-content>
//             {/* <Candidates /> */}
//             <Routes />
//             <hr />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import "./App.css";
import Routes from "./routes";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
export const store = createStoreWithMiddleware(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
