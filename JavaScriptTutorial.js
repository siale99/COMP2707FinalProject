document.addEventListener("DOMContentLoaded", function() {
    // Tutorial data
    const tutorials = [
        { title: "Electromagnetic Fields", description: "Introduction to electromagnetic fields.", link: "https://ec.europa.eu/health/scientific_committees/opinions_layman/en/electromagnetic-fields/l-2/1-electromagnetic-fields.htm" },

        { title: "Basics of C and Python Coding", description: "Fundamentals of C and Python programming languages.", link: "https://www.geeksforgeeks.org/c-vs-python/" },
        { title: "Basics of Statistics", description: "Overview of basic statistical concepts.", link: "https://www.britannica.com/science/statistics" },
        { title: "Philosophy and What Is It", description: "Introduction to philosophy and its concepts.", link: "https://www.philosophy-foundation.org/what-is-philosophy" },
        { title: "Software Development", description: "Overview of software development methodologies.", link: "https://www.easyagile.com/blog/software-development-methodologies/" }
    ];

    const tutorialList = document.getElementById("tutorialList");

    // Function to populate tutorial list
    function populateTutorialList(tutorials) {
        tutorialList.innerHTML = "";
        tutorials.forEach(function(tutorial) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<h3>${tutorial.title}</h3>
                                  <p>${tutorial.description}</p>
                                  <a href="${tutorial.link}" target="_blank">View Tutorial</a>`;
            tutorialList.appendChild(listItem);
        });
    }

    // Initial population of tutorial list
    populateTutorialList(tutorials);

    // Function to filter tutorials based on search input
    function filterTutorials(searchTerm) {
        const filteredTutorials = tutorials.filter(function(tutorial) {
            return tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                   tutorial.description.toLowerCase().includes(searchTerm.toLowerCase());
        });
        populateTutorialList(filteredTutorials);
    }

    // Event listener for search input
    document.getElementById("searchInput").addEventListener("input", function() {
        filterTutorials(this.value);
    });
});