import { useState } from "react";

// import { MouseEvent } from "react";//relevant only with the onlick event handler
function ListGroup() {
  let items = ["New York", "Paris", "Cameroon", "Lagos", "London"];
  //hook
  const [SelectedIndex, setSelectedIndex] = useState(-1);
  //{     extra example where this is used
  //   const [name, setNmae] = useState("Clarkson");    }
  //{    Seperate case and application
  //   const arr = useState(-1); other way
  //   arr[0] //variable (SelectedIndex)
  //   arr[1]// updater function     }
  //{   items = [];
  //   items.length == 0 ? <p>No items found</p> : null; other way of implementing    }
  //{  event handler
  //   const handleClick = (event: MouseEvent) => console.log(event);      }
  return (
    <>
      <h1>List</h1>
      {items.length == 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((items, index) => (
          <li
            className={
              SelectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={items}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
