$(".show-sidebar-btn").on("click", function () {
    $(".sidebar").animate({
        marginLeft: 0,
    });
});

$(".hide-sidebar-btn").on("click", function () {
    $(".sidebar").animate({
        marginLeft: "-100%",
    });
});