import Layout from "../comps/ui/layout";
import Hoverbutton from "../comps/ui/hoverbutton";
import Listings from "../comps/listings";
import { useState, useRef } from "react";
import data from "../public/data.json";

//listing class with constructor title and description
class Listing {
  constructor(title, description, price, address) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.address = address;
  }
}

export default function Home() {
  //array for all listings
  const [listings, setListings] = useState(data);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const priceRef = useRef(null);
  const addressRef = useRef(null);

  const addListing = () => {
    if (
      titleRef.current.value != "" &&
      priceRef.current.value != "" &&
      addressRef.current.value != ""
    ) {
      const listing = new Listing(
        titleRef.current.value,
        descriptionRef.current.value,
        priceRef.current.value,
        addressRef.current.value
      );
      setListings([...listings, listing]);
      titleRef.current.value = "";
      descriptionRef.current.value = "";
      priceRef.current.value = "";
      addressRef.current.value = "";
    } else {
      alert("Please fill in all fields");
    }
  };

  const removeAllListings = () => {
    setListings([]);
  };

  const handleDelete = (index) => {
    const newListings = listings.filter((listing, i) => i !== index);
    setListings(newListings);
  };

  const handleEdit = (listing, index) => {
    alert("editing " + listing.title + " at index " + index);
  };

  return (
    <>
      <Layout title="Next App" desc="Next App">
        <div className="md:flex h-auto">
          {/*Sidebar Start*/}
          <aside className="md:w-1/4">
            <nav className="px-4 py-2 md:w-1/4">
              <ul className="flex gap-2">
                <Hoverbutton onClick={() => addListing()}>Add</Hoverbutton>
                <Hoverbutton onClick={() => removeAllListings()}>
                  Clear
                </Hoverbutton>
              </ul>
            </nav>
            {/*Listing Fields Start*/}
            <div className="px-4 py-2 flex flex-col gap-4">
              <label>Listing Title</label>
              <input
                className="w-full bg-slate-100 transition-all rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 focus:px-2 focus:py-1 focus:text-lg text-sm p-1"
                ref={titleRef}
                type="text"
              />
              <label>Listing Description</label>
              <textarea
                className="w-full bg-slate-100 transition-all rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 focus:px-2 focus:py-1 focus:text-lg text-sm p-1"
                ref={descriptionRef}
                type="text"
              />
              <label>Listing Price</label>
              <input
                className="w-full bg-slate-100 transition-all rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 focus:px-2 focus:py-1 focus:text-lg text-sm p-1"
                ref={priceRef}
                type="text"
              />
              <label>Listing Address</label>
              <input
                className="w-full bg-slate-100 transition-all rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 focus:px-2 focus:py-1 focus:text-lg text-sm p-1"
                ref={addressRef}
                type="text"
              />
            </div>
            {/*Listing Fields Start*/}
          </aside>
          {/*Main Content Start*/}
          <main className=" md:w-3/4">
            <Listings
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              listings={listings}
            />
          </main>
        </div>
      </Layout>
    </>
  );
}
