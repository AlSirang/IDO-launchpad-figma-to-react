import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CloseIcon } from "@/icons/close-icon";

export default function UntakeModal({ isOpen = false, onClose = () => null }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => null}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-cdark-500  p-6 py-10 text-left align-middle shadow-xl transition-all relative">
                  <div className="absolute top-2 right-2">
                    <button
                      onClick={onClose}
                      className="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center hover:bg-gray-600 hover:text-white outline-0"
                    >
                      <CloseIcon className="w-5 h-5" />
                      <span className="sr-only">Close menu</span>
                    </button>
                  </div>
                  <Dialog.Title
                    as="div"
                    className="text-lg font-medium leading-6 "
                  >
                    <div className="text-center">
                      <h3 className="font-semibold text-lg">Unstake</h3>
                    </div>
                  </Dialog.Title>
                  <div className="mt-5 grid gap-3">
                    <div className="flex justify-between">
                      <p>Token</p>
                      <p className="font-semibold">BTC</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Staking</p>
                      <p className="font-semibold">10000.20</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Withdrawal delay time</p>
                      <p className="font-semibold">8 days</p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="text-sm mb-2">Unstake amount</p>
                    <div className="relative border border-cpink-100 rounded-md px-1">
                      <input className="bg-transparent outline-0 border-none w-full py-2 px-1" />
                      <p className="absolute right-3 top-2">BTC</p>
                    </div>

                    <p className="text-sm mt-2">Balance: 0.00</p>
                  </div>

                  <div className="flex gap-5 mt-3">
                    <span className="w-[25%] border border-cpink-100 rounded-md px-3 py-1 flex justify-center hover:cursor-pointer hover:bg-pink-600">
                      25%
                    </span>
                    <span className="w-[25%] border border-cpink-100 rounded-md px-3 py-1 flex justify-center hover:cursor-pointer hover:bg-pink-600">
                      50%
                    </span>
                    <span className="w-[25%] border border-cpink-100 rounded-md px-3 py-1 flex justify-center hover:cursor-pointer hover:bg-pink-600">
                      75%
                    </span>
                    <span className="w-[25%] border border-cpink-100 rounded-md px-3 py-1 flex justify-center hover:cursor-pointer hover:bg-pink-600">
                      100%
                    </span>
                  </div>

                  <div className="mt-10 flex gap-5">
                    <button className="rounded-md bg-cpink-100 w-full hover:bg-pink-600 transition-all">
                      <span className="inline-block py-1 px-5 text-lg font-medium">
                        Unstake
                      </span>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
