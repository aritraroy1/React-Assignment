import noprojectImage from '../assets/no-projects.png';
import Button from "./Button";

export default function NoProjectSelected({ onStartAddProject }) {

    return (
        <div className="mt-24 text-center w-2/3">
            <img
                src={noprojectImage}
                alt="An empty task list"
                className="w-16 h-17 object-contain mx-auto" />
            <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
            <p className='text-stone-400 mb-4'>Create a Project or select one</p>
            <p>
                <Button onClick={onStartAddProject}>Create a new Project</Button>
            </p>
        </div>
    );
}