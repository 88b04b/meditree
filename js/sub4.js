$(document).ready(function() {
    $(".faq").hide();
    $(".faq:first").show();

    $("ul.faq_menu li").click(function () {
        $("ul.faq_menu li").removeClass("active");
        $(this).addClass("active");
    });

    $(".faq_menu li:first").click(function(){
        $(".faq").hide();
        $(".faq:first").show();
    });
    $(".faq_menu li:eq(1)").click(function(){
        $(".faq").hide();
        $(".faq:eq(1)").show();
    });
    $(".faq_menu li:eq(2)").click(function(){
        $(".faq").hide();
        $(".faq:eq(2)").show();
    });
    $(".faq_menu li:eq(3)").click(function(){
        $(".faq").hide();
        $(".faq:eq(3)").show();
    });
    $(".faq_menu li:eq(4)").click(function(){
        $(".faq").hide();
        $(".faq:eq(4)").show();
    });
});
    $(function () {
        $(".s1_row2> ul> li").click(function () {
            $(this).children(".answer").slideToggle();
            $(this).siblings().children(".answer").slideUp();
        });
    });
    $(function () {
        $(".s1_row2> ul> li").click(function () {
            $(this).toggleClass("turn");

            if ($(this).hasClass("turn") === true) {
                $(this).siblings().removeClass("turn");
        }
    });
});
$(function () {
    $(".submit").click(function () {
        alert("제출되었습니다.");
    });
});
let samt = 0;
window.addEventListener('scroll', function() {
samt <= 10 ? samt++ : AOS.refresh();
});