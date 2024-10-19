import { FC, Fragment, PropsWithChildren } from 'react';
import {
  Dialog,
  Transition,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react';

export type ModalProps = PropsWithChildren & {
  show: boolean;
  onClose: () => void;
};

const Modal: FC<ModalProps> = ({ children, show, onClose }) => {
  return (
    <Transition as={Fragment} show={show}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 flex items-center"
        onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all p-7 mx-auto sm:my-10 sm:w-full sm:max-w-2xl">
          {children}
        </DialogPanel>
      </Dialog>
    </Transition>
  );
};

export default Modal;
