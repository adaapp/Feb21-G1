//data classes
class Tutorial {
    constructor(id, title, description, coverImage, category) {
        this.id = id,
        this.title = title,
        this.description = description,
        this.coverImage = coverImage,
        this.category = category
    }
}

class Step {
    constructor(id, stepCount, title, media, caption) {
        this.id = id,
        this.stepCount = stepCount
        this.title = title,
        this.media = media,
        this.caption = caption
    }
}

//generated unique id for class objects
function generateId(type) {
    let id = Math.random().toString(36).substr(2, 9);

    //need to check is id already in database? if no then:
    if (type == 'tutorial') {return 'TUT' + id}
    else if (type == 'step') {return 'STEP' + id}
    else {console.log('ERROR: Invalid type')}
}

function validateTextInputs(inputValue, field, dataArray) {
    if (inputValue == '') {alert('The ' + field + ' field is empty.')}
    else {dataArray.push(inputValue)}
}

function beginTutorialCreation() {
//  document.querySelector('#begin-button').classList.add('hidden');
    document.querySelector('#create-tutorial-ui-container').classList.remove('hidden');

    //instantiate classes and set IDs
    let tutorial = new Tutorial;
    tutorial.id = generateId('tutorial');

    let steps = [];

    document.querySelector('#submit-tutorial').addEventListener('click', function() {
        let stepCounter = 0;

        tutorialInputArray = [];

        let inputTutorialTitle = document.querySelector('#input-tutorial-title');
        validateTextInputs(inputTutorialTitle.value, 'tutorial title', tutorialInputArray);

        let inputCategory = document.querySelector('#input-category');
        validateTextInputs(inputCategory.value, 'tutorial category', tutorialInputArray);

        let inputDescription = document.querySelector('#input-description');
        validateTextInputs(inputDescription.value, 'tutorial description', tutorialInputArray);

        let inputCoverImage = document.querySelector('#input-cover-image');
        /*
        if (inputCoverImage.files.length == 0) {alert('upload a file for the step')}
        else {stepInputArray.push(inputCoverImage.files[0])}
        */

        //placeholder
        tutorialInputArray.push(inputCoverImage.value)

        console.log('tutorialInputArray:', tutorialInputArray);
        if (tutorialInputArray.length == 4) {
            tutorial.title = tutorialInputArray[0];
            tutorial.category = tutorialInputArray[1];
            tutorial.description = tutorialInputArray[2];
            tutorial.coverImage = tutorialInputArray[3];
            
            addTutorial(tutorial);
            
            document.querySelector('#create-steps-ui-container').classList.remove('hidden');
            document.querySelector('#new-step').addEventListener('click', function() {
                let step = new Step;
                step.id = generateId('step');
                stepCounter += 1;
                step.stepCount = stepCounter;
                console.log('step.stepCount:', step.stepCount);

                let stepInputArray = [];

                let inputStepTitle = document.querySelector('#input-step-title');
                let inputMedia = document.querySelector('#input-media');
                let inputCaption = document.querySelector('#input-caption');

                //input validation, cannot continue without populating fields
                validateTextInputs(inputStepTitle.value, 'step title', stepInputArray);

                /*
                if (inputMedia.files.length == 0) {alert('upload a file for the step')}
                else {stepInputArray.push(inputMedia.files[0])}
                */
                
                //placeholder
                stepInputArray.push(inputMedia.value)

                validateTextInputs(inputCaption.value, 'step caption', stepInputArray);

                //assign input to new step object of Step class
                if (stepInputArray.length == 3) {
                    step.title = stepInputArray[0];
                    step.media = stepInputArray[1];
                    step.caption = stepInputArray[2];
                    //steps.push(step);

                    addInstuction(tutorial.title,step)
                    

                    inputStepTitle.value = '';
                    inputCaption.value = '';
                }

                console.log('tutorial:', tutorial);
                //console.log('steps:', steps);

                /*
                submit tutorial event listener {
                    input tutorial title, description and cover image
                    set inputs to new tutorial object of Tutorial class 
                }
                */
                
            });
        }

    });


    document.querySelector('#submit-steps').addEventListener('click', function() {
        //take data from steps saved previously in tutorial.steps        
        //create HTML elements to display previous steps
        //populate freshly generated HTML elements with data from previous steps
    });
}

window.addEventListener('load', function() {
    beginTutorialCreation();
});



function addTutorial(tutorial){
    let body = JSON.stringify(tutorial);
    fetch("/api/add-tutorial", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
        credentials: 'same-origin'
    }).then(res => res.json());
}

function addInstuction(title, step){
    stepCount = step.stepCount;
    stepTitle = step.title;
    stepMedia = step.media
    stepInfo = step.caption
    let body = JSON.stringify({ title, stepCount, stepTitle,stepMedia, stepInfo });
    fetch("/api/add-tutorial-step", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body,
            credentials: 'same-origin'
        }).then(res => res.json())
        
}

