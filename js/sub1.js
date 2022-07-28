$(function () {
    $(".dot").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    $(".dot:nth-child(2)").click(function () {
        $(".bubble").css({ "top": "95px" });
        $(".r3_image>img:first-child").css({ "opacity": "1"}).siblings().css({"opacity":"0"});
    });
    $(".dot:nth-child(3)").click(function () {
        $(".bubble").css({ "top": "280px" });
        $(".r3_image>img:nth-child(2)").css({ "opacity": "1"}).siblings().css({"opacity":"0"});
    });
    $(".dot:nth-child(4)").click(function () {
        $(".bubble").css({ "top": "465px" });
        $(".r3_image>img:nth-child(3)").css({ "opacity": "1"}).siblings().css({"opacity":"0"});
    });
    $(".dot:last-child").click(function () {
        $(".bubble").css({ "top": "650px" });
        $(".r3_image>img:last-child").css({ "opacity": "1"}).siblings().css({"opacity":"0"});
    });
    $(".r3_text1").click(function () {
        $(".dot:nth-child(2)").addClass("active").siblings().removeClass("active");
        $(".bubble").css({ "top": "95px" });
        $(".r3_image>img:first-child").css({ "opacity": "1"}).siblings().css({"opacity":"0"});
    });
    $(".r3_text2").click(function () {
        $(".dot:nth-child(3)").addClass("active").siblings().removeClass("active");
        $(".bubble").css({ "top": "280px" });
        $(".r3_image>img:nth-child(2)").css({ "opacity": "1"}).siblings().css({"opacity":"0"});
    });
    $(".r3_text3").click(function () {
        $(".dot:nth-child(4)").addClass("active").siblings().removeClass("active");
        $(".bubble").css({ "top": "465px" });
        $(".r3_image>img:nth-child(3)").css({ "opacity": "1"}).siblings().css({"opacity":"0"});
    });
    $(".r3_text4").click(function () {
        $(".dot:last-child").addClass("active").siblings().removeClass("active");
        $(".bubble").css({ "top": "650px" });
        $(".r3_image>img:last-child").css({ "opacity": "1"}).siblings().css({"opacity":"0"});
    });
});