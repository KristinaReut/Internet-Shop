
$(document).ready(function () {
    $.get('http://localhost:2403/category/', function (data) {
        console.log('ready', data);
        $(".btn-add-category").click(function (e) {
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
                $("#category").append('<option>' + addCategory + '</option');
                $(".category-filter").append('<option>' + addCategory + '</option');
            }
        });

        //btn-delete
        $('body').on('click', '.btn-delete', (function (e) {
            let tableDelete = $(".categ").attr("id");
            console.log(tableDelete)
            $.ajax({
                url: 'http://localhost:2403/category/' + tableDelete,
                type: 'DELETE',
            });
        }));

        //btn-edit
        $('body').on('click', '.btn-edit', (function (eb) {

            $.ajax({
                url: 'http://localhost:2403/category/' + trId,
                type: 'PUT',
                success: function (result) {

                }
            })
            $.ajax({
                url: 'http://localhost:2403/products/' + trId,
                type: 'PUT',
                success: function (result) {

                }
            })
        }));

        // $.ajax({
        //     url: 'http://localhost:2403/dashboard/category/',
        //     type: GET,
        //     data: name,
        //     success: success,
        //     dataType: dataType
        // });
    });
});