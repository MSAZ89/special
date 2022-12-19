import Modal from "./ui/modal";

export default function Listings({ listings }) {
  return (
    <section>
      <ul className="md:grid md:grid-cols-2 lg:grid-cols-3 p-4 overflow-hidden">
        {listings != null
          ? listings.map((listing, index) => (
              <li
                key={index}
                className="shadow-md hover:shadow-xl bg-slate-50 px-4 py-8 my-2 flex flex-col justify-between gap-2 transition-all hover:gray-300 hover:bg-white"
              >
                <h2 className="text-2xl font-bold">{listing.title}</h2>
                <p>{listing.address}</p>
                <p className="text-sm mb-2">{listing.description}</p>
                <p className="text-green-700 text-md mb-4">${listing.price}</p>
                <Modal
                  open="wtf"
                  title={
                    <h2 className="text-2xl font-bold">{listing.title}</h2>
                  }
                >
                  <p>{listing.address}</p>
                  <p className="text-sm mb-2">{listing.description}</p>
                  <p className="text-green-700 text-md mb-4">
                    ${listing.price}
                  </p>
                </Modal>
              </li>
            ))
          : null}
      </ul>
    </section>
  );
}
