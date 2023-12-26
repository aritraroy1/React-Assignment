import Tasks from "./Tasks";
import Button from "./Button";
import { useRef } from "react";

export default function ProjectDetails({ project, deleteProject, addTask, deleteTask }) {

    const formattedDate = new Date(project.duedate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });

    function handleAddTask(taskDetails) {

        addTask(taskDetails);

    }

    function hadleDeleteTask(toDeletetask) {

        deleteTask(toDeletetask);

    }

    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                    <Button
                        className="text-stone-600 hover:text-stone-900"
                        onClick={deleteProject}
                    >
                        Delete
                    </Button>
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            <Tasks
                onHandleAddTask={handleAddTask}
                onDeleteTask={hadleDeleteTask}
                taskList={project.taskList}
            />
        </div>
    );


}