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

function go(url) {
    setTimeout(function () {
        location.href = `${url}`;
    }, 500);
}

$(function () {
    $('[data-toggle="popover"]').popover()
})