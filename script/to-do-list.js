$(document).ready(function () {
    $.getJSON("./script/sample.json", function(data) {

        const calculateProgressPercent = function(length, completed) {
            return length > 0 ? Math.round((completed/length)*100) : 0;
        };

        $("#projectsContainer").empty();
        data.projects.forEach(function (project) {
            const totalTasks = project.tasks.length;
            const completedTasks = project.tasks.filter(t => t.status === "completed").length;

            const progressPercent = calculateProgressPercent(totalTasks, completedTasks)

            const allTasksHTML = project.tasks.map(function(task) {
                const taskChecked = task.status === "completed" ? "checked" : "";

                return `
                    <div class="taskRow">
                        <input id="${task.id}" class="taskCheckbox" type="checkbox" ${taskChecked}>
                        <label class="taskLabel" for="${task.id}">${task.title}</label>
                    </div>
                `
            });

            const projectHTML =  `
                <article id="project${project.id}" class="project">
                    <h2 class="projectTitle">${project.name}</h2>
                    
                    <div class="progressContainer">
                        <div class="progressBar">
                            <div class="progressFill" style="width: ${progressPercent}%;"></div>
                        </div>
                        <span class="progressText">${progressPercent}%</span>
                    </div>

                    <div class="kanban">
                        <div class="toDo">
                            <div class="epic">
                                <h3>To Do</h3>
                                <div class="dropDownIcon">
                                    ^
                                </div>
                            </div>
                            <ul class="tasks">
                                <li class="task">Make A Layout</li>
                                <li class="task">Finish Design</li>
                            </ul>
                        </div>

                        <div class="waiting">
                            <div class="epic">
                                <h3>Waiting</h3>
                                <div class="dropDownIcon">
                                    ^
                                </div>
                            </div>
                            <ul class="tasks">
                                <li class="task">Make A Layout</li>
                                <li class="task">Finish Design</li>
                            </ul>
                        </div>
                        
                        <div class="inProgress">
                            <div class="epic">
                                <h3>In Progress</h3>
                                <div class="dropDownIcon">
                                    ^
                                </div>
                            </div>
                            <ul class="tasks">
                                <li class="task">Make A Layout</li>
                                <li class="task">Finish Design</li>
                            </ul>
                        </div>

                        <div class="finished">
                            <div class="epic">
                                <h3>Finished</h3>
                                <div class="dropDownIcon">
                                    ^
                                </div>
                            </div>
                            <ul class="tasks">
                                <li class="task">Make A Layout</li>
                                <li class="task">Finish Design</li>
                            </ul>
                        </div>
                   </div>
                </article>
            `;
            $("#projectsContainer").append(projectHTML);
        });
    }).fail(function() {
        console.log("Failed to load json file")
    });

    $("#projectsContainer").on("click", ".project", function(event) {
        if ($(event.target).closest(".taskRow").length) {
            return;
        }
        $(this).find(".tasksContainer").slideToggle();
    });

    $("#projectsContainer").on("click", ".taskRow", function(event) {
        event.stopPropagation();

        const $checkbox = $(this).find(".taskCheckbox");
        const $progress = $(this).find(".progressFill")

        if (!$(event.target).is(".taskCheckbox")) {
            if (!$(event.target).is(".taskLabel")) {
                $checkbox.prop("checked", !$checkbox.prop("checked"));
            }
        }
        if ($checkbox.is(":checked")) {
            console.log("Checked task ID:", $checkbox.attr("id"));
            
        }
    });
});