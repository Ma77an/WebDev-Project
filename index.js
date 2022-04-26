var ads = [
    {
        name: "ad1",
        templateUrl: "templates/templateA.html",
        texts: ["Text 1", "Text 2", "Text 3", "Text 4"],
        imagesUrl: ["images/img1.jpg", "images/img2.jpg"],
        days: [false, true, false, true, false, false, false],
        hours: [6, 12],
        fromDate: [1, 1, 2022],
        toDate: [31, 12, 2022],
        timeDuration: 3,
        screens: {"1": true, "2": true}
    }
    ,
    {
        name: "ad2",
        templateUrl: "templates/templateB.html",
        texts: ["Text 1", "Text 2", "Text 3", "Text 4", "Text 5", "Text 6", "Text 7", "Text 8", "Text 9", "Text 10"],
        imagesUrl: ["images/img1.jpg"],
        days: [false, false, true, true, false, false, false],
        hours: [10, 16],
        fromDate: [1, 3, 2022],
        toDate: [30, 4, 2022],
        timeDuration: 5,
        screens: {"1": true, "3": true}
    },
    {
        name: "ad3",
        templateUrl: "templates/templateC.html",
        texts: [],
        imagesUrl: [],
        days: [true, true, true, true, true, true, true],
        hours: [8, 22],
        fromDate: [1, 5, 2022],
        toDate: [15, 6, 2022],
        timeDuration: 7,
        screens: {"2": true, "3": true}
    },
    {
        name: "ad4",
        templateUrl: "templates/templateA.html",
        texts: ["Text 1", "Text 2"],
        imagesUrl: [],
        days: [false, true, false, false, false, false, false],
        hours: [15, 19],
        fromDate: [29, 3, 2022],
        toDate: [15, 4, 2022],
        timeDuration: 4,
        screens: {"1": true}
    },
    {
        name: "ad5",
        templateUrl: "templates/templateB.html",
        texts: ["לכו תלמדו מדעי המחשב", "סתם לא", "סתם כן", "זה לא כיף בכלל", "אבל", "אחרי התואר", "תעשו שקים💰💰💰💰💰💰"],
        imagesUrl: ["images/img1.jpg", "images/img2.jpg"],
        days: [false, true, true, true, false, false, false],
        hours: [1, 23],
        fromDate: [1, 4, 2022],
        toDate: [30, 4, 2022],
        timeDuration: 6,
        screens: {"3": true}
    }
];

function hourCheck(index, date){
    return ads[index].hours[0]<= date.getHours() && ads[index].hours[1]>date.getHours();
}

// var currentAds = [];

function dateChecker(index) {
    var date = new Date();
    if (ads[index].days[date.getDay()]) {
        if (ads[index].fromDate[2] <= date.getFullYear() && ads[index].toDate[2] >= date.getFullYear()) {
            if (ads[index].fromDate[1] <= date.getMonth() + 1 && date.getMonth() + 1 <= ads[index].toDate[1]) {
                if (ads[index].fromDate[1] == date.getMonth() + 1 && ads[index].fromDate[0] >= date.getDay()) {
                    return (hourCheck(index, date));
                } else if (ads[index].toDate[1] == date.getMonth() + 1 && ads[index].fromDate[0] <= date.getDay()) {
                    return (hourCheck(index, date));
                } else {
                    return (hourCheck(index, date));
                }
            }
        }
    }
}

// var i = 0;
// while (true) {
//     if (dateChecker(i)){
//         $(document).ready( function (){
//           $(`#texts`).load(ads[i].templateUrl);
//           $('#texts').load("<p>"+ads[i].texts.join("</p><p>"+"</p>"));
//         });
//     }
//
//
//     i++;
//     i = i % ads.length;
// }

// for (let i = 0; i < ads.length; i++) {
//     console.log(i);
//     if (dateChecker(i)){
//         console.log(i);
//         $(document).ready( function () {
//             $('#style').load(ads[i].templateUrl);
//             var dispText = "<p>" + ads[i].texts.join("</p><p>") + "</p>";
//             console.log(dispText);
//             console.log(i);
//             $('#texts').html(dispText);
//             var images = "<img src=" + ads[i].imagesUrl.join("> <img src=") + ">";
//
//             console.log(" " + i +" "+ images);
//             $('#images').html(images);
//         });
//     }
// }

// function display(i){
//     console.log(i);
//     if (dateChecker(i)){
//         console.log(i);
//         $(document).ready( function () {
//             $('#style').load(ads[i].templateUrl);
//             var dispText = "<p>" + ads[i].texts.join("</p><p>") + "</p>";
//             console.log(dispText);
//             console.log(i);
//             $('#texts').html(dispText);
//             var images = "<img src=" + ads[i].imagesUrl.join("> <img src=") + ">";
//
//             console.log(" " + i +" "+ images);
//             $('#images').html(images);
//         });
//     }
//     setTimeout(display, )
// }



// // maybe this?:
//
// var i=0;
//
// function display(i) {
//     $(document).ready(() => {
//         $('#style').load(ads[i].templateUrl);
//         var dispText = "<p>" + ads[i].texts.join("</p><p>") + "</p>";
//         console.log(dispText);
//         console.log(i);
//         $('#texts').html(dispText);
//         var images = "<img src=" + ads[i].imagesUrl.join("> <img src=") + ">";
//
//         console.log(" " + i + " " + images);
//         $('#images').html(images);
//     });
//     i++;
//     i = i % currentAds.length;
//     setTimeout(display, 1000*ads[i].timeDuration, i);
// }
//
// for (let j = 0; j < ads.length; j++) {
//     dateChecker(j);
// }
// console.log(currentAds);
// display(i);

var i=0;

function adDisplay() {
    console.log(i);
    if (dateChecker(i)) {
        $(document).ready(function () {
            $('#style').load(ads[i].templateUrl);
            var dispText = "<p>" + ads[i].texts.join("</p><p>") + "</p>";
            console.log(dispText);
            console.log(i);
            $('#texts').html(dispText);
            var images = "<img src=" + ads[i].imagesUrl.join("> <img src=") + ">";
            console.log(" " + i + " " + images);
            $('#images').html(images);
        });

        setTimeout(function () {
            i++;
            i = i % ads.length;
            console.log("next ad");
            adDisplay(i);
        }, ads[i].timeDuration * 1000);
    }
    else{
        setTimeout(function () {
            i++;
            i = i % ads.length;
            console.log("not display, next ad");
            adDisplay(i);
        }, 0);
    }
}

adDisplay();







// function dispp(k) {
//     for (let i = k; i < ads.length; i++) {
//         console.log(i);
//         if (dateChecker(i)) {
//             console.log(i);
//             $(document).ready(function () {
//                 $('#style').load(ads[i].templateUrl);
//                 var dispText = "<p>" + ads[i].texts.join("</p><p>") + "</p>";
//                 console.log(dispText);
//                 console.log(i);
//                 $('#texts').html(dispText);
//                 var images = "<img src=" + ads[i].imagesUrl.join("> <img src=") + ">";
//
//                 console.log(" " + i + " " + images);
//                 $('#images').html(images);
//             });
//         }
//     }
//     setTimeout(dispp, 1000*ads[i].timeDuration, i+1);
// }
