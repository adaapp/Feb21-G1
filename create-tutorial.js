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
    constructor(id, title, media, caption) {
        this.id = id,
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
    document.querySelector('#begin-button').classList.add('hidden');
    document.querySelector('#create-tutorial-ui-container').classList.remove('hidden');

    //instantiate classes and set IDs
    let tutorial = new Tutorial;
    tutorial.id = generateId('tutorial');

    let steps = [];

    document.querySelector('#submit-tutorial').addEventListener('click', function() {
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
        tutorialInputArray.push('media placeholder')

        console.log('tutorialInputArray:', tutorialInputArray);
        if (tutorialInputArray.length == 4) {
            tutorial.title = tutorialInputArray[0];
            tutorial.category = tutorialInputArray[1];
            tutorial.description = tutorialInputArray[2];
            tutorial.coverImage = tutorialInputArray[3];

            document.querySelector('#create-steps-ui-container').classList.remove('hidden');
            document.querySelector('#new-step').addEventListener('click', function() {
                let step = new Step;
                step.id = generateId('step');

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
                stepInputArray.push('media placeholder')

                validateTextInputs(inputCaption.value, 'step caption', stepInputArray);

                //assign input to new step object of Step class
                if (stepInputArray.length == 3) {
                    step.title = stepInputArray[0];
                    step.media = stepInputArray[1];
                    step.caption = stepInputArray[2];
                    steps.push(step);

                    inputStepTitle.value = '';
                    inputCaption.value = '';
                }

                console.log('tutorial:', tutorial);
                console.log('steps:', steps);

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
    document.querySelector('#begin-button').addEventListener('click', beginTutorialCreation);
});