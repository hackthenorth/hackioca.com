const someMethod = (): void => console.log("test method");

export interface Methods {
  someMethod: () => void;
}

export default {
  someMethod
};
