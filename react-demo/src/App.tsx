import Button from "./components/Button";

function App() {
  return (
    <>
      <Button color="primary" onClickHandler={() => console.log("Clicked!")}>
        <h1>My button component</h1>
      </Button>
    </>
  );
}

export default App;
