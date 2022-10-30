import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";

function ProfilModal({ data, open, onClose }) {
  return (
    <div>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={onClose}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-[#161616] bg-opacity-60 transition-opacity" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-[400px] max-w-md p-6  overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="flex justify-center mt-2 ">
                  <Image
                    src="https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                    alt="as"
                    className="rounded-lg mx-auto w-[100%] h-64 shadow-2xl"
                    width={100}
                    height={100}
                  />
                </div>

                <div className="mt-4 z-2">
                  <h1 className="font-bold text-center text-3xl text-gray-900">
                    {data.musicTitle ? data.musicTitle : "adasd"}
                  </h1>
                  <p className="text-center text-sm text-gray-400 font-medium">
                    {data.artistName ? data.artistName : "adasd"}
                  </p>
                  <p>
                    <span></span>
                  </p>
                  <div className="my-5 px-6">
                    <Link href={`${data.musicUrl}`}>
                      <a target="_blank">
                        <button className="w-full text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">
                          Play music
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default ProfilModal;
