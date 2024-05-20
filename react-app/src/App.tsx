import Message from "./message";
import ListGroup from "./Components/ListGroup";
import Alert from "./Components/Alert";
import Buttons from "./Components/Exercise";
function App() {
  let items = ["New York", "Paris", "Cameroon", "Lagos", "London"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Message></Message>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      {/* //for first example of passing text
      <Alert text="Hi World" /> */}
      <Alert>
        {" "}
        Hello <span>World</span>
      </Alert>

      <Buttons></Buttons>
    </div>
  );
}
export default App;
