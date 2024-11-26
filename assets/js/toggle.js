function toggleContent(entry) {
    const content = entry.querySelector(".hidden-content");
    const button = entry.querySelector(".toggle-btn");

    entry.classList.toggle("active"); // Add or remove active class on the entry

    if (button !== null) {
        button.classList.toggle("active");
    }

    if (content.classList.contains("show")) {
        content.classList.remove("show");
        content.style.maxHeight = "0px"; // Collapse the content
    } else {
        content.classList.add("show");
        content.style.maxHeight = content.scrollHeight + "px"; // Expand to full height
    }
}

function toggleAboutContent(entry) {
    const excerpt = document.querySelector('.excerpt').classList.toggle('hidden');
    toggleContent(entry)
}