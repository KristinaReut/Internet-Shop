
$(function () {

//adding category
$(".btn-add-category").click(function (e) {
    //prevent Default functionality
    e.preventDefault();
    var addCategory = $("#add-categoty").val();
    var tableLength = $("#table-category tr").length;
    if (addCategory.length > 0) {
        $.ajax({
            url: 'http://localhost:2403/category/',
            type: 'POST',
            data: { name: addCategory },
        });
        $("#table-category").append('<tr class="categ"> <th>' + tableLength + '</th><th class="categor">' + addCategory + '</th><th><button type="button" class="btn btn-delete btn-delete-category">Delete</button><button type="button" class="btn btn-edit btn-edit-category">Edit</button></th></tr>');
        $("form").get(0).reset(); 
    }
}); 	

// $.ajax({
//     url: 'http://localhost:2403/dashboard/category/',
//     data: name,
//     success: success,
//     dataType: dataType
// });
});