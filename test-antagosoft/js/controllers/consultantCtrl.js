var app =  angular.module("consultantApp");

function Review() {
    this.name = "";
    this.date = "";
    this.message = "";
}

app.controller("consultantCtrl",function($scope){
    $scope.reviews = [
        {
            name: "Самуил",
            date: "13 октября 2011 г.",
            message: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!!!"
        },
        {
            name: "Лилия Семеновна",
            date: "14 октября 2011 г.",
            message: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?"
        },
        {
            name: "Лилия Семеновна",
            date: "14 октября 2011 г.",
            message: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?"
        }
    ];

    $scope.newReviews = new Review();

    $scope.toched = true;


    $scope.send = function (form) {
        if (form.$valid === true) {

            var options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            };
            this.newReviews.date = new Date().toLocaleString("ru", options);
            this.reviews.push(this.newReviews);
            this.newReviews = new Review();
        }
    };

     

    $scope.activeTextarea = function() {
        this.toched = false;
    }

    $scope.onKeyDown = function (e) {
        if ((e.ctrlKey && e.keyCode == 13)) {
            this.send($scope.messageForm);
        }       
    };

    
})