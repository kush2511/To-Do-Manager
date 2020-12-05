$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$('button').click(function(){
        var todoText = $("input[type='text']").val();
        if(todoText != ""){
         $('ul').append('<li><span><i class="fas fa-trash-alt"></i></span> ' + todoText + '</li>');
        todoText = $("input[type='text']").val("");
        }
        else{
            alert("You Have Nothing To Do...!");
        }
    });