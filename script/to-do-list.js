$(document).ready(function () {
    $.getJSON("./script/sample.json", function(data) {

        const calculateProgressPercent = function(length, completed) {
            return length > 0 ? Math.round((completed/length)*100) : 0;
        };

        const getTasks = function(project, status) {
            return project.tasks.filter(task => task.status === status);
        };

        const addTasksToContainer = function($container, tasks) {
            $container.empty();
            
            if (tasks.length === 0) {
                $container.append('<li class="no-tasks">Nothing Here</li>');
                return;
            }

            tasks.forEach(task => {
                $container.append(`
                    <li class="taskRow" data-id="${task.id}" draggable="true">
                        <label>
                            ${task.title}
                            <button type="button" class="moreOptionsButton" aria-label="More options">
                                <svg class="moreOptionsIcon" viewbox="0 0 15 30">
                                    <circle cx="8" cy="0" r="5" fill="white" />
                                    <circle cx="8" cy="15" r="5" fill="white" />
                                    <circle cx="8" cy="30" r="5" fill="white" />
                                </svg>
                            </button>
                        </label>
                    </li>
                `);
            });
        };  

        $("#projectsContainer").empty();

        $("#projectsContainer").append(`
            <div id="taskEditor">
                <div id="taskEditorContent">
                    <span class="exit">&times;</span>
                    <button>Edit</button>
                    <button>Delete</button>
                    <button>Move</button>
                </div>
            </div> 
        `);

        data.projects.forEach(function (project) {
            const totalTasks = project.tasks.length;
            const completedTasks = project.tasks.filter(t => t.status === "finished").length;

            const progressPercent = calculateProgressPercent(totalTasks, completedTasks)

            const projectHTML =  `
                <article id="project${project.id}" data-project-id="${project.id}" class="project">
                    <h2 class="projectTitle">${project.name}</h2>
                    
                    <div class="progressContainer">
                        <div class="progressBar">
                            <div class="progressFill" style="width: ${progressPercent}%;"></div>
                        </div>
                        <span class="progressText">${progressPercent}%</span>
                    </div>

                    <div class="kanbanBoard">
                        <div class="columns">
                            <button class="column toDo" data-status="toDo">To Do</button>
                            <button class="column waiting" data-status="waiting">Waiting</button>
                            <button class="column inProgress" data-status="inProgress">In Progress</button>
                            <button class="column finished" data-status="finished">Finished</button>
                        </div>
                        <ul class="tasksContainer">
                        </ul>
                    </div>
                </article>
            `;
            const $projectElement = $(projectHTML);
            $("#projectsContainer").append($projectElement);

            const defaultTasks = getTasks(project, "toDo");
            addTasksToContainer($projectElement.find(".tasksContainer"), defaultTasks);

            $("#projectsContainer").on("click", ".column", function(event) {
                event.stopPropagation(); 

                const status = $(this).data("status"); 
                const projectId = $(this).closest(".project").data("project-id");

                const prosjekt = data.projects.find(p => p.id === projectId);

                if (prosjekt) {
                    const oppgaver = prosjekt.tasks.filter(t => t.status === status);
                    const $container = $(this).closest(".project").find(".tasksContainer");
                    addTasksToContainer($container, oppgaver);
                }
            });
        });
    }).fail(function() {
        console.log("Failed to load json file")
    });

    $("#projectsContainer").on("click", ".project", function(event) {
        if ($(event.target).closest(".taskRow, .column").length) {
            return;
        }
        $(this).find(".kanbanBoard").slideToggle();
    });

    $("#projectsContainer").on("click", ".moreOptionsButton", function(event) {
        event.stopPropagation(); 
        $("#taskEditor").toggle();
    });

    $(document).on("click", ".exit", function() {
        $("#taskEditor").toggle();
    });
});