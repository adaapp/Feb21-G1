let testStepData = [
    {
        caption: "EGEWGGW",
        id: "STEPpx1jg019o",
        media: "media placeholder",
        stepCount: 1,
        title: "EGWGWGE",
    },
    {
        caption: "HRTHR",
        id: "STEPevlr2u4vt",
        media: "media placeholder",
        stepCount: 2,
        title: "HJTRH",
    },
    {
        caption: "THRRHTRHT",
        id: "STEPvci2z4rip",
        media: "media placeholder",
        stepCount: 3,
        title: "HTRHRTHRT",
    },
    {
        caption: "HTTHRHT",
        id: "STEPlwnhfi2vw",
        media: "media placeholder",
        stepCount: 4,
        title: "RHTRHT",
    },
    {
        caption: "FWEWEFFW",
        id: "STEPm00f9xkns",
        media: "media placeholder",
        stepCount: 5,
        title: "JRJRJRR",
    },
    {
        caption: "RWGRWRGWGRW",
        id: "STEPb9pqwwepx",
        media: "media placeholder",
        stepCount: 6,
        title: "FEWGWGR",
    },
    {
        caption: "GRGRGRGR",
        id: "STEPcpmcfn537",
        media: "media placeholder",
        stepCount: 7,
        title: "GRGRGR",
    }
];

let testTutorialData = {
    category: "EGEGWEG",
    coverImage: "media placeholder",
    description: "EGEGEG",
    id: "TUT1l049rexj",
    title: "GEEGWEGW"
};

function populateSteps() {
    for (let i=0; i<testStepData.length; i++) {
        let stepContainer = document.createElement('div');

        let count = document.createElement('p');
        count.innerText = testStepData[i].stepCount.toString();
        stepContainer.appendChild(count);
            
        let title = document.createElement('h1');
        //title.innerHTML = '<span>' + testStepData[i].stepCount.toString() + '</span>';
        title.innerText = testStepData[i].title;
        console.log(title);
        stepContainer.appendChild(title);

        let media = document.createElement('p'); //change to image tag when we have images working
        media.innerText = testStepData[i].media;
        stepContainer.appendChild(media);

        let caption = document.createElement('p');
        caption.innerText = testStepData[i].caption;
        stepContainer.appendChild(caption);

        document.body.appendChild(stepContainer);
    }
}

window.addEventListener('load', function() {
    populateSteps();
});