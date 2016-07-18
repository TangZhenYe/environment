var flag1 = true;
$(document).ready(function () {
    setInterval("autoCange()", 2000);
});

function autoCange() {
    if (flag1) {
        $("#content-box-1").css("left","0");
        $("#content-box-1").animate({
            left: "-1000px"
        }, 1000);
        $("#content-box-2").css("left","1000px");
        $("#content-box-2").animate({
            left: "0px"
        }, 1000);
        flag1 = !flag1;
    } else {
        $("#content-box-2").css("left","0");
        $("#content-box-2").animate({
            left: "-1000px"
        }, 1000);
        $("#content-box-1").css("left","1000px");
        $("#content-box-1").animate({
            left: "0px"
        }, 1000);
        flag1 = !flag1;
    }

}