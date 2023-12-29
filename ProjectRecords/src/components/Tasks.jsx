import Input from "./Input";
import Button from "./Button";
import { useRef } from "react";

export default function Tasks({ onHandleAddTask, onDeleteTask, taskList }) {

    const taskInput = useRef();

    function handleAddTask() {

        onHandleAddTask(taskInput.current.value);
        taskInput.current.value = '';

    }

    function hadleDeleteTask(toDeletetask) {

        onDeleteTask(toDeletetask);

    }

    return (
        <main>
            <h2 className="text-2xl font-bold text-stone-800">Tasks</h2>
            <div className="flex items-center gap-4">
                <Input type="text" label="New Tasks" ref={taskInput} />
                <Button onClick={handleAddTask}>Add Task</Button>
            </div>
            {(taskList && taskList.length > 0) && (
                < div className="flex flex-col items-center justify-between bg-stone-100">
                    <ul>
                        {taskList.map((task) => {
                            return (
                                <li key={taskList.indexOf(task)} className="flex">
                                    <p className='text-left mr-11'>{task}</p>
                                    <button
                                        className="text-right text-stone-600 hover:text-stone-950"
                                        onClick={() => hadleDeleteTask(task)}
                                    >
                                        Clear
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
            {(taskList.length === 0) && (
                < div className="flex flex-col items-center justify-between bg-stone-100">
                    <p>Project does not have task yet</p>
                </div>
            )}
        </main >
    );

}