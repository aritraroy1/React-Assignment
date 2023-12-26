import Button from "./Button";


export default function Sidebar({ onStartAddProject, projects, openProject, selectedProjectId }) {

    function handleOpenProject(projectId) {

        openProject(projectId);

    }

    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
            <div>
                <Button onClick={onStartAddProject}>
                    +Add Project
                </Button>
            </div>
            <ul className="mt-2">
                {projects.map(project => {

                    let cssClases = 'w-full text-center px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800';
                    if (project.id === selectedProjectId) {

                        cssClases = 'w-full text-center px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 bg-stone-800 hover:bg-stone-800';

                    }

                    return (
                        <li key={project.id}>
                            <button
                                className={cssClases}
                                onClick={() => handleOpenProject(project.id)}
                            >
                                {project.title}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    )

}