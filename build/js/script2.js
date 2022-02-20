$(document).on("click", ".active_inactive_ads_second_item_sorts_btn", function(){

    var data_id = $(this).data("id");
    $(".active_inactive_ads_second_item_sorts_btn").removeClass("active");
    $(this).addClass("active");
    
  
  
    $(".active_inactive_ads_second_items_wrapper").removeClass("open");
    $("#" + data_id).addClass("open");
  });





  $(document).on("click",".inactive_type_btn", function(){
       $(".active_inactive_ads_second_item_child_link").addClass("inactive");
       $(".active_type_btn").removeClass("active");
       $(".inactive_type_btn").addClass("active");

  });


  
  $(document).on("click",".active_type_btn", function(){
    $(".active_inactive_ads_second_item_child_link").removeClass("inactive");
    $(".inactive_type_btn").removeClass("active");
    $(".active_type_btn").addClass("active");
});

$(document).on("click", ".active_inactive_ads_second_item_child_edit_link_delete_btn", function(){
    $(this).parent().parent().parent().hide();
})