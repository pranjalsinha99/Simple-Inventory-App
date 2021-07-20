import "./App.css";
import SearchBar from "./SearchBar";
import AddItem from "./Additem";
import ItemDisplay from "./ItemDisplay";
import { useState, useEffect } from "react";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((data) => setData({ items: data }));
  }, []);

  const deleteItem = (item) => {
    const items = data["items"];
    const requestOptions = {
      method: "DELETE",
    };
    fetch(`http://localhost:3000/items/${item.id}`, requestOptions).then(
      (response) => {
        if (response.ok) {
          const idx = items.indexOf(item);
          items.splice(idx, 1);
          setData({ items: items });
        }
      }
    );
  };

  const updateFilters = (SearchParams) => {
    setFilters(SearchParams);
  };

  const addItemToData = (item) => {
    let items = data["items"];

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    };
    fetch("http://localhost:3000/items", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        items.push(data);
        setData({ items: items });
      });
  };

  const filterdata = (data) => {
    const filteredData = [];
    if (!filters.name) return data;

    for (const item of data) {
      if (filters.name !== "" && item.name !== filters.name) continue;
      if (filters.price !== 0 && item.price > filters.price) continue;
      if (filters.brand !== "" && item.brand !== filters.brand) continue;
      if (filters.type !== "" && item.type !== filters.type) continue;

      filteredData.push(item);
    }
    return filteredData;
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <SearchBar updateSearchParams={updateFilters} />
      </div>
      <div className="row mt-4">
        <AddItem addItem={addItemToData} />
      </div>
      <div className="row mt-4">
        <ItemDisplay
          deleteItem={deleteItem}
          items={filterdata(data["items"])}
        />
      </div>

      {/* <td>Name: {data["name"]}</p>
      <p>Price:{data["price"]}</p>
      <td>Type:{data["type"]}</p>
      <p>Brand:{data["brand"]}</p> */}
    </div>
  );
}

export default App;
