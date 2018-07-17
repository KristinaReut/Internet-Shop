
$(document).ready(function () {
    $.get('http://localhost:2403/category/', function (data) {
        console.log('ready', data);
        
        $(".btn-add-category").click(function (e) {
            e.preventDefault();
            var addCategory = $("#add-categoty").val();
            data.map(function(elem, index){
                var indexNew = index + 1;
                console.log (elem.name.length);
                if (elem.name.length > 0) {
                $("#table-category").append('<tr class="categ"> <td>' + indexNew + '</td><td class="categor">' + elem.name + '</td><td><button type="button" class="btn btn-delete btn-delete-category">Delete</button><button type="button" class="btn btn-edit btn-edit-category">Edit</button></td></tr>');
                //console.log('<tr><td>' + index + '</td><td>' + elem.name + '</td></tr>');
                //console.log(elem);
                }
               // for (var i = 0; i < elem.length; i++) {
               
            });
            var tableLength = $("#table-category tr").length;
            if (addCategory.length > 0) {
                $.ajax({
                    url: 'http://localhost:2403/category/',
                    type: 'POST',
                    data: { name: addCategory },
                });
    
                $("form").get(0).reset();
                $("#category").append('<option>' + addCategory + '</option');
                $(".category-filter").append('<option>' + addCategory + '</option');
            }
        
        });

        //btn-delete
        $('body').on('click', '.btn-delete', (function () {
    //        let tableDelete = $(".categ").attr("id");
            console.log(elem)
            $.ajax({
                url: 'http://localhost:2403/category/' + elem.id,
                type: 'DELETE',
            });
        }));

        //btn-edit
        $('body').on('click', '.btn-edit', (function (e) {

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