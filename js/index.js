$(function () {

    $("div.main").click(function () {
        $("div.Work").addClass("on");
        $("div.Contact").addClass("on");
        $("div.main").removeClass("on");
    });
    $("li.cont").click(function () {
        $("div.Contact").addClass("on");
        $("div.Work").removeClass("on");
        $("div.main").removeClass("on");
    });
});