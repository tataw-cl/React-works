import Message from "./message";
import ListGroup from "./Components/ListGroup";
import Alert from "./Components/Alert";
import Buttons from "./Components/Exercise";
import { useState } from "react";
function App() {
  const [alertVisible, setAlertVisible] = useState(false);
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
      <Alert onClose={() => setAlertVisible(false)}>
        {" "}
        Hello <span>World</span>
      </Alert>
      {/* //works if we want to always set the value of the color in the app with no default value
      <Buttons color="secondary" onnClick={() => console.log("Clicked")}>
        My Button
      </Buttons> */}
      {/* //using a default optional color style */}
      {/* <Buttons onnClick={() => console.log("Clicked")}>My Button</Buttons> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Buttons onnClick={() => setAlertVisible(true)}>My Button</Buttons>
    </div>
  );
}
export default App;
