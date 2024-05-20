//We strat the server using "npm run dev"
import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
//{items:[], heading: string}

// import { MouseEvent } from "react";//relevant only with the onlick event handler
function ListGroup({ items, heading, onSelectItem }: Props) {
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
      <h1>{heading}</h1>
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
              onSelectItem(items);
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
