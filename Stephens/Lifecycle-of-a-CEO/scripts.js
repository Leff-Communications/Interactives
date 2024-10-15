var stage1 = document.getElementById('stage1');
var stage2 = document.getElementById('stage2');
var stage3 = document.getElementById('stage3');
var stage4 = document.getElementById('stage4');
var stage5 = document.getElementById('stage5');

var backButton = document.getElementById('stage-button-back');
var nextButton = document.getElementById('stage-button-forward');


backButton.addEventListener('click', function() {
    var activeStage = document.querySelector('.active');
    activeStage.classList.remove('active');
    if (activeStage === stage1) {
        stage5.classList.add('active');
        return;
    }
    activeStage.previousElementSibling.classList.add('active');
    });

nextButton.addEventListener('click', function() {
    var activeStage = document.querySelector('.active');
    activeStage.classList.remove('active');
    if (activeStage === stage5) {
        stage1.classList.add('active');
        return;
    }
    activeStage.nextElementSibling.classList.add('active');
    });

    stage1.classList.add('active');