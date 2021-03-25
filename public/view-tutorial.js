function populateSteps(stepObject) {

    let stepContainer = document.createElement('div');

    let count = document.createElement('p');
    count.innerText = stepObject.step_id.toString();
        
    let title = document.createElement('h1');
    title.innerText = stepObject.step_title;

    let tutorialHeader = document.createElement('div');
    tutorialHeader.classList.add('tutorial-top');
    tutorialHeader.appendChild(count);
    tutorialHeader.appendChild(title);

    stepContainer.appendChild(tutorialHeader);

    var img = document.createElement('img');
    img.src = stepObject.photo_address;
    img.classList.add('step-image');
    

    let tutorialMiddle = document.createElement('div');
    tutorialMiddle.classList.add('tutorial-middle');
    tutorialMiddle.appendChild(img);
    stepContainer.appendChild(tutorialMiddle);
    
    let caption = document.createElement('p');
    caption.innerText = stepObject.step_info;

    tutorialBottom = document.createElement('div');
    tutorialBottom.classList.add('tutorial-bottom');
    tutorialBottom.appendChild(caption);
    stepContainer.appendChild(tutorialBottom);

    const newDiv4 = document.createElement("div");
    const newContent4 = document.createTextNode('');
    newDiv4.appendChild(newContent4);
    newDiv4.classList.add('add-gap')
    stepContainer.appendChild(newDiv4)
    document.querySelector('#tutorial').appendChild(stepContainer);
}

function getTutorial(tutorial_name){
    const container = document.getElementById('tutorial');
    const ol = document.createElement('ol');
    container.appendChild(ol);

    fetch('/api/get-by-id/Lasagne')
        .then((res)=>res.json())
        .then(res=> {console.log(res)
            const heading = document.createElement("h2");
            heading.textContent = res[0].tutorial_title;
            ol.appendChild(heading);

        res.forEach(step => {
            console.log(step);
            populateSteps(step);
        });
    })
}

window.addEventListener('load', function() {
    getTutorial('Lasagne');
});