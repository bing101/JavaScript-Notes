//  Store is a global container for storing states
/* 
    {
        bugs: [
            {
                id: 1,
                description: "",
                resolverd: false | true
            },
            {...},
            {...},
        ],
        moreStates: []
    }
*/
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

export default store;
