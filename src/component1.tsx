import { createElement, render } from 'preact';

function App() {
  return (
    <>
    <h2>Component 1</h2>
    <div>This is a Preact component.</div>
    </>
  );
}

render(<App />, document.getElementById("component1"));
