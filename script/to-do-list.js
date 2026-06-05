$(document).ready(function () {
    $.getJSON("./script/sample.json", function(data) {
        $("#projectsContainer").empty();
        data.projects.forEach(function (project) {
            const totalTasks = project.tasks.length;
            const completedTasks = project.tasks.filter(t => t.status === "completed").length;

            const progressPercent = totalTasks > 0 ? Math.round((completedTasks/totalTasks)*100) : 0;

            const nextTask = project.tasks.find(t => t.status !== "completed") || {id : "none", title: "No More Tasks", status: "completed"};
            const isChecked = nextTask.status === "completed" ? "checked" : "";

            const projectHTML =  `
                <article id="project${project.id}" class="project">
                    <h2 class="projectTitle">${project.name}</h2>
                    
                    <div class="progressContainer">
                        <div class="progressBar">
                            <div class="progressFill" style="width: ${progressPercent}%;"></div>
                        </div>
                        <span class="progressText">${progressPercent}%</span>
                    </div>
                    
                    <h3 class="nextTaskHeader">Next Task:</h3>
                    <div class="nextTaskContainer">
                        <input id="${nextTask.id}" type="checkbox" ${isChecked}>
                        <label class="nextTaskLabel" for="${nextTask.id}">${nextTask.title}</label>
                    </div>
                </article>
            `;
            $("#projectsContainer").append(projectHTML);
        });
    }).fail(function() {
        console.log("Failed to load json file")
    });
});