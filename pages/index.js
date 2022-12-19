import Layout from "../comps/ui/layout";
import Hoverbutton from "../comps/ui/hoverbutton";
import Listings from "../comps/listings";
import { useState, useRef } from "react";
import data from "../public/data.json";
import { list } from "postcss";

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
  const [currentListingIndex, setCurrentListingIndex] = useState(null);

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

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (listing, index) => {
    titleRef.current.value = listing.title;
    descriptionRef.current.value = listing.description;
    priceRef.current.value = listing.price;
    addressRef.current.value = listing.address;
    setIsEditing(true);
    setCurrentListingIndex(index);
  };

  // function to edit the title, description, price, and address of a listing at a given index and update our listings state
  const editListing = (index, title, description, price, address) => {
    const newListings = [...listings];
    newListings[index].title = title;
    newListings[index].description = description;
    newListings[index].price = price;
    newListings[index].address = address;
    setListings(newListings);
  };

  const finishEdit = () => {
    editListing(
      currentListingIndex,
      titleRef.current.value,
      descriptionRef.current.value,
      priceRef.current.value,
      addressRef.current.value
    );
    setIsEditing(false);
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    priceRef.current.value = "";
    addressRef.current.value = "";
  };

  return (
    <>
      <Layout title="Next App" desc="Next App">
        <div className="lg:flex h-auto">
          {/*Sidebar Start*/}
          <aside className="lg:w-1/4">
            <div className="lg:fixed lg:w-1/4 lg:flex lg:flex-col lg:justify-start lg:items-start lg:h-screen">
              {/*Listing Fields Start*/}
              {isEditing ? (
                //editing listing fields
                <div className="p-8 flex flex-col gap-4 bg-slate-200 w-full">
                  <h2 className="text-xl font-bold text-center">
                    Editing {listings[currentListingIndex].title}
                  </h2>
                  <label>Listing Title</label>
                  <input
                    className="w-full bg-slate-100 transition-all rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50  text-sm p-1"
                    ref={titleRef}
                    type="text"
                    defaultValue={listings[currentListingIndex].title}
                  />
                  <label>Listing Description</label>
                  <textarea
                    className="w-full bg-slate-100 transition-all rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50  text-sm p-1"
                    ref={descriptionRef}
                    type="text"
                    rows={8}
                    defaultValue={listings[currentListingIndex].description}
                  />
                  <label>Listing Price</label>
                  <input
                    className="w-full bg-slate-100 transition-all rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50  text-sm p-1"
                    ref={priceRef}
                    type="text"
                    defaultValue={listings[currentListingIndex].price}
                  />
                  <label>Listing Address</label>
                  <input
                    className="w-full bg-slate-100 transition-all rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50  text-sm p-1"
                    ref={addressRef}
                    type="text"
                    defaultValue={listings[currentListingIndex].address}
                  />
                </div>
              ) : (
                //normal listing fields
                <div className="p-8 flex flex-col gap-4 bg-slate-100 w-full">
                  <h2 className="text-xl font-bold text-center">New Listing</h2>
                  <label>Listing Title</label>
                  <input
                    className="w-full bg-white transition-all rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-sm p-1"
                    ref={titleRef}
                    type="text"
                    defaultValue={""}
                  />
                  <label>Listing Description</label>
                  <textarea
                    className="w-full bg-white transition-all rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-sm p-1"
                    ref={descriptionRef}
                    type="text"
                    rows={8}
                  />
                  <label>Listing Price</label>
                  <input
                    className="w-full bg-white transition-all rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-sm p-1"
                    ref={priceRef}
                    type="text"
                  />
                  <label>Listing Address</label>
                  <input
                    className="w-full bg-white transition-all rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-sm p-1"
                    ref={addressRef}
                    type="text"
                  />
                </div>
              )}
              <nav className="p-4 lg:w-1/4">
                {isEditing ? (
                  <div className="flex">
                    <button
                      className="text-center text-sm bg-gray-500 text-white rounded py-1 px-3 hover:bg-gray-200 hover:text-gray-400 transition-all border hover:border-gray-500"
                      onClick={() => finishEdit()}
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <ul className="flex gap-2">
                    <button
                      className="text-center text-sm bg-gray-500 text-white rounded py-1 px-3 hover:bg-gray-200 hover:text-gray-400 transition-all border hover:border-gray-500"
                      onClick={() => addListing()}
                    >
                      Add
                    </button>
                  </ul>
                )}
              </nav>
            </div>
          </aside>
          {/*Main Content Start*/}
          <main className="lg:w-3/4 px-2">
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
