$(function(){
    //Hide all sublists
    $(".sublist").hide();
    //Show Shop sublist when hovered
    $(".shop-nav").hover(function (){
        $(".shop-sub").slideDown(750);

    }, function (){
        $(".shop-sub").slideUp(300);
    });
    //Show Partner sublist when hovered
    $(".partners-nav").hover(function (){
        $(".partners-sub").slideDown(750);

    }, function (){
        $(".partners-sub").slideUp(300);
    });
});