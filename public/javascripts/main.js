//jquery to send it to route delete

$(document).ready(function(){
    //target to div with class delete-note
    //onclick do function below
    $('.delete-note').on('click', function(e){
        $target = $(e.target);
        //const variable id = data-id (is defined on the button)
        const id = $target.attr('data-id');
        //send type delete to task (is route from delete) with id
        $.ajax({
            type:'DELETE',
            url: '/~s1133868/P2_NodeJS_Opdracht/999/task',
            data: {
                'id': id
            },
            success: function(response){
                alert('Deleting task' + id);
                window.location.href='/~s1133868/P2_NodeJS_Opdracht/999/tasks';
            },
            error: function(err){
                console.log(err);
            }
        });
    });
});