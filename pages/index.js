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
  const [listings, setListings] = useState(data);

  const addListing = () => {
    const listing = new Listing("test", "test", "449,999", "Phoenix, Arizona");
    setListings([...listings, listing]);
  };

  const removeAllListings = () => {
    setListings([]);
  };

  return (
    <>
      <Layout title="Next App" desc="Next App">
        <div className="md:flex h-auto">
          <nav className="px-4 py-2 md:w-1/4">
            <ul className="flex gap-2 md:fixed">
              <Hoverbutton onClick={() => addListing()} href="">
                Add Listing
              </Hoverbutton>
              <Hoverbutton onClick={() => removeAllListings()} href="">
                Clear Listings
              </Hoverbutton>
            </ul>
          </nav>
          <main className=" md:w-3/4">
            <Listings listings={listings} />
          </main>
        </div>
      </Layout>
    </>
  );
}
