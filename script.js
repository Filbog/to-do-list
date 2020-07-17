$(document).ready(function () {
    //add task
    let addBtn = $('.add-button');
    let field = $('.add-field');
    let tasks = $('.tasks')

    addBtn.on('click', function () {
        let elem = `
            <li class="task">
            <div class="task-checked col-1">
             <input type="checkbox" name="" id="">
             </div>
            <div class="task-text col-2">
             ${field.val()}
             </div>
             <div class="task-remove col-3">

            </div>
        </li>`;
        tasks.append(elem);
        field.val('');
    })


    //remove task
    tasks.on('click', '.task-remove', function () {
        $(this).parent().remove();
    })

    //checked
    tasks.on('change', '.task-checked input', function(){
        //next element within the parent
        $(this).parent().next().toggleClass('checked');
    });

    //sortable
    $('#tasks-list').sortable();
});

