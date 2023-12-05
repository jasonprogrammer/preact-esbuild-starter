import { createElement, render } from 'preact';

function App() {
  return (
    <>
      <h2>Component 2</h2>
      <div>This is another Preact component.</div>
    </>
  );
}

render(<App />, document.getElementById("component2"));
