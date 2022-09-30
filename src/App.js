import DefaultLayout from './layouts/Default';
import Main from './parts/Main/Main';

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        <Main />
      </DefaultLayout>
    </div>
  );
}

export default App;

