$(document).ready(function () {
    $.getJSON("./script/sample.json", function(data) {
        $("#projectsContainer").empty();
        data.projects.forEach(function (project) {
            const totalTasks = project.tasks.length;
            const completedTasks = project.tasks.filter(t => t.status === "completed").length;

            const progressPercent = totalTasks > 0 ? Math.round((completedTasks/totalTasks)*100) : 0;

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

                    <div class="tasksContainer contenteditable="true"">
                        ${allTasksHTML}
                    </div>
                </article>
            `;
            $("#projectsContainer").append(projectHTML);
        });
    }).fail(function() {
        console.log("Failed to load json file")
    });

    $("#projectsContainer").on("click", ".project", function() {
        $(this).find(".tasksContainer").slideToggle();
    });
    $("#projectsContainer").on("click", ".taskCheckbox, .taskLabel", function(event) {
        event.stopPropagation();
    });
});