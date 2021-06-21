import React from 'react';

/**
 * React Class Component was the `original` way to create a React component.
 * The React Class Component has a lifecycle: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 * You can implement your logic at different phase of the component's lifecycle using the Class Component API
 * 
 * Consider this coding methodology `outdated`. 
 * The `new` approach would be to use `Functional component` and `hooks`.
 */


/**
 * Arguments: Are passed in the component's inputs
 */
type ClassComponentExampleArguments = {
  name: string;
}

/** 
 * States: Live inside the component and are used to make the compoennt `stateful`
 */
type ClassComponentExampleState = {
  clickCount: number;
}

/**
 * The component implements the React.Component class
 */
class ClassComponentExample extends React.Component<ClassComponentExampleArguments, ClassComponentExampleState> {

  // Use the constructor to bind methods and states.
  constructor(props: ClassComponentExampleArguments) {
    super(props);

    // Bind and initialize state
    this.state = { clickCount: 0 };

    // Bind the methods
    this.resetCount = this.resetCount.bind(this);
    this.incrementClickCount = this.incrementClickCount.bind(this);

  }

  componentDidMount() {
    /**
     * is invoked immediately after a component is mounted (inserted into the tree). 
     * 
     * https://reactjs.org/docs/react-component.html#componentdidmount
     */
  }

  componentDidUpdate() {
    /**
     * is invoked immediately after updating occurst.
     * 
     * https://reactjs.org/docs/react-component.html#componentdidupdate
     */
  }

  componentWillUnmount() {
    /**
     * is invoked immediately before a component is unmounted and destroyed.
     * 
     * https://reactjs.org/docs/react-component.html#componentwillunmount
     */
  }

  shouldComponentUpdate() {
    /**
     * let React know if a component’s output is not affected by the current change in state or props.
     * 
     * https://reactjs.org/docs/react-component.html#shouldcomponentupdate
     */
    return true;
  }

  /**
   * Component's methods
   */

  resetCount() {
    this.setState({ ...this.state, clickCount: 0 });
  }

  incrementClickCount() {
    this.setState({ ...this.state, clickCount: this.state.clickCount + 1 });
  }

  // Finally, Render is mandatory. It renders your component in the DOM.
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}. You clicked {this.state.clickCount} times.</h1>
        <button onClick={() => this.incrementClickCount()}>Click</button>
        <button onClick={() => this.resetCount()}>Reset click count </button>
      </div>
    )
  }
}
export default ClassComponentExample;