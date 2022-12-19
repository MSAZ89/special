import { useState } from "react";

export default function Modal(props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="mt-4 block border border-slate-200 text-black font-semibold text-md ease-linear transition-all duration-150 p-2 hover:border-slate-600"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {props.open}
      </button>
      {showModal ? (
        <>
          <div className="justify-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full xl:w-1/2 px-4 my-4 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-8 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl lg:text-3xl font-semibold text-black">
                    {props.title}
                  </h3>
                  <button onClick={() => setShowModal(false)}>
                    <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-8 py-8 flex-auto">
                  <div className="text-slate-700 text-lg leading-relaxed">
                    {props.children}
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-start p-8 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-center text-sm bg-gray-500 text-white rounded py-1 px-3 hover:bg-gray-200 hover:text-gray-400 transition-all border hover:border-gray-500"
                    onClick={() => setShowModal(false)}
                    aria-label="Close Popup Button"
                    type="button"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
