$(document).ready(function () {

    $("div.main").click(function () {
        $("div.Work").addClass("on");
        $("div.Contact").addClass("on");
        $("div.main").removeClass("on");
    });
    // $("li.cont").click(function () {
    //     $("div.Contact").addClass("on");
    //     $("div.Work").removeClass("on");
    //     $("div.main").removeClass("on");
    // });

    $(".close").click(function () {
        $(".close").addClass("ononon");
        colsole.log(2);
        alert('heel0');
    });
});


// html include
window.addEventListener('load', function () {
    var allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function (el) {
        var includePath = el.dataset.includePath;
        if (includePath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.outerHTML = this.responseText;
                }
            };
            xhttp.open('GET', includePath, true);
            xhttp.send();
        }
    });
});