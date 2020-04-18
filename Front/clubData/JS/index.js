const studyData = [
    {
        "title": "제목",
        "content": "내용",
        "uploadDate": "2019/01/01",
    }
];

const studyFrame = ({ title, content, uploadDate }) => {
    let study = `<article class="contentsContainer">
        <h3>${title}</h3>
        <p>${content}</p>
        <p id="uploadDate">${uploadDate}</p>
    </article>`;
    return study;
};

document.getElementById("studySection").insertAdjacentHTML("beforeend", studyFrame(studyData[0]));