import { useState } from "react";

function AddItem(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const AddItemButtonPressed = () => {
    props.addItem({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
    setName("");
    setBrand("");
    setPrice(0);
    setType("");
  };
  return (
    <div className="container">
      <div className="row">
        <h1>Add a item</h1>

        <label htmlFor="Name-field">Name:</label>
        <input
          id="Name-field"
          type="text"
          value={name}
          className="form-control"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="Price-field">Price:</label>
        <input
          id="Price-field"
          type="number"
          value={price}
          className="form-control"
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="Type-field">Type:</label>
        <input
          id="Type-field"
          type="text"
          value={type}
          className="form-control"
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="Brand-field">Brand:</label>
        <input
          id="Brand-field"
          type="text"
          value={brand}
          className="form-control"
          onChange={(e) => setBrand(e.target.value)}
        />
      </div>
      <div className="row mt-3">
        <div className="col-4" />
        <button
          type="button"
          className="col-4 btn btn-secondary"
          onClick={AddItemButtonPressed}
        >
          Add item
        </button>
      </div>
    </div>
  );
}
export default AddItem;
