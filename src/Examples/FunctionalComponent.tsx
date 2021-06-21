import React from 'react';
import { useState } from 'react';
/**
 * Arguments: Are passed in the component's inputs
 */
type FunctionalComponentExampleArguments = {
  name: string;
}

/**
 * `Functional component` are way simpler than `Class Component`
 * Like `Class component`, a `functional component` takes arguments and can manage states internally.
 * 
 * A `functional component` uses functions called `hooks` to manage its lifecycle.
 * You can declare/use functions/variables inside the `functional component`
 * 
 * Finally, your `functional component` should return the JSX (HTML like code) to be rendered in the tree.
 * 
 */
export default function FunctionalComponentExample(props: FunctionalComponentExampleArguments) {

  /**
   * Each function starting with `use` is called a `hook`.
   * 
   * React ships with the basic following hooc:
   * - useState: Declare a component's state. This function return the state value and a setter function.
   * - useEffect: You give this hook a dependency array and create side effect when the dependencies change.
   * - useContext: React has a special component called `Provider` which can 'provide' data to component. This hook let you get that data.
   * 
   */

  /**
   * In class component you have one global state to the component (this.state).
   * In Functional Component you have a finer control over the states: 
   *    You declare 'useState' for each single state you need which gives getter/setter for THAT state in particular.
   */
  const [clickCount, setClickCount] = useState<number>(0);

  const resetCount = () => { setClickCount(0); }
  const incrementClickCount = () => { setClickCount(c => c + 1); }

  /*
  * With Functional Component we can achieve the same result using less code than Class Component
  */
  return (
    <div>
      <h1>Functional component</h1>
      <p>Hello, {props.name}. You clicked {clickCount} times.</p>
      <button onClick={incrementClickCount}>Click</button>
      <button onClick={resetCount}>Reset click count </button>
    </div>
  )
}