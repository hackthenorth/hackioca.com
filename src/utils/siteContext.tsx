import React, { createContext, useReducer } from "react";


interface State {
  // basically our spec for what we want to store in global state
};

interface StateUpdate {
  type: string;
  data?: object | string; // not sure what the most encompassing type here is
};


// The initial state and also the state returned by SiteContext
// if there is no parent Provider.
const INITIAL_STATE: State = {};


// The reducer for the state. Resolves actions to return a new copy of
// the state since we want state to stay immutable.
const siteReducer = (state: State, action: StateUpdate) => {
  switch (action.type) {
    case "RESET":
      return INITIAL_STATE;

    // What a state update from an action would look like
    // case "SOME_STATE_UPDATE":
    //   return {
    //     ...state,
    //     someField: action.data.updatedSomeField
    //   }

    default:
      return state;
  }
};


// Context for the site.
const SiteContext: React.Context<State> = createContext(INITIAL_STATE);
export default SiteContext;


// The consumer for SiteContext. This is how you would consume from a parent
// provider in the primitive pre-hooks age, but with the useContext hook,
// you now do not have to use this at all.
export const SiteContextConsumer = SiteContext.Consumer;


// The provider allows calls to be dispatched to SiteContext
// by employing the useReducer hook to resolve complicated state changes.
export const SiteContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(siteReducer, INITIAL_STATE);
  const value = { state, dispatch };

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};


// Maps the state in SiteContext to props that the wrapped
// component will receive.
// Similar to redux's connect function.
// Kind of obselete with the useContext hook, but useful without hooks.
export const connectSiteContext = (
  mapContextStateToProps = (data: object) => data
) => <P extends object>(
    Component: React.ComponentType<P>
  ) => (
      props: any
    ) => (
        <SiteContextConsumer>
            {data => <Component {...mapContextStateToProps(data)} {...props} />}
        </SiteContextConsumer>
      );
