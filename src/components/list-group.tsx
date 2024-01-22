import { useState } from "react";

function ListGroup() {
  const items = ["Banh Mi", "Bun bo", "Hu tieu", "Banh xeo"];
  const [selected, setSelected] = useState(-1);
  return (
    <div>
      <h1 className="text-center">List do an </h1>
      {items.length === 0 && <p className="text-center">Item not found</p>}
      <ul className="list-group w-50 mx-auto d-flex flex-column justify-content-center align-items-start">
        {items.map((item, index) => (
          <li
            onClick={() => {
              setSelected(index);
            }}
            className={
              selected === index ? "list-group-item active" : "list-group-item"
            }
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ListGroup;
