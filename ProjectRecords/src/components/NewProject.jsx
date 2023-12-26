import Input from "./Input";
import Modal from "./Modal";
import { useRef } from "react";

export default function NewProject({ onSave, onCancel }) {

    const titletRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    const modalRef = useRef();

    function handleSave() {

        const enteredTitle = titletRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredDueDate = dueDateRef.current.value;

        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
            modalRef.current.open();
            return;
        }

        onSave(
            {
                title: enteredTitle,
                description: enteredDescription,
                duedate: enteredDueDate
            }
        );

    }

    function handleCancel() {

        onCancel();

    }

    return (
        <>
            <Modal ref={modalRef} buttonCaption="close">
                <h2 className="text-xl font-bold text-stone-600 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">Looks like u missed ot input a value</p>
                <p className="text-stone-600 mb-4">Make sure that u enter correct value for each filed</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button
                            className="text-stone-800 hover:text-stone-950"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button
                            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={titletRef} label="Title" />
                    <Input ref={descriptionRef} label="Description" textarea />
                    <Input type="date" ref={dueDateRef} label="Due Date" />
                </div>
            </div>
        </>
    );

}