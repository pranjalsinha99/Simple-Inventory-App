import { useState } from "react";

function SearchBar(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const SearchButtonPressed = () => {
    console.log(name);
    props.updateSearchParams({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
  };
  return (
    <div className="container">
      <div className="row">
        <h1>Search for an item</h1>
        <div className="col">
          <label htmlFor="Name-field">Name:</label>
          <input
            id="Name-field"
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col">
          <label htmlFor="Price-field">Price:</label>
          <input
            id="Price-field"
            type="number"
            value={price}
            className="form-control"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="col">
          <label htmlFor="Type-field">Type:</label>
          <input
            id="Type-field"
            type="text"
            value={type}
            className="form-control"
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div className="col">
          <label htmlFor="Brand-field">Brand:</label>
          <input
            id="Brand-field"
            type="text"
            className="form-control"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-4" />
        <button
          type="button"
          className="col-4 btn btn-primary"
          onClick={SearchButtonPressed}
        >
          Search
        </button>
      </div>
    </div>
  );
}
export default SearchBar;
