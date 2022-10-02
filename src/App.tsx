import React from 'react';
import Form from './components/form'
import Navigator from './components/navigator'

function App(): JSX.Element {
  return (
    <div className="App">
      <Navigator />
      <Form />
    </div>
  );
}

export default App;
