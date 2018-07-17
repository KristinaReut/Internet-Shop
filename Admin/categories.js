
$(document).ready(function () {
    $.get('http://localhost:2403/category/', function (data) {
        console.log('ready', data);
        
        $(".btn-add-category").click(function (e) {
            e.preventDefault();
            var addCategory = $("#add-category").val();
            var tableLength = $("#table-category tr").length;
            if (addCategory.length > 0) {
                $.ajax({
                    url: 'http://localhost:2403/category/',
                    type: 'POST',
                    data: { name: addCategory },
                });
                $("#table-category").append('<tr class="categ"> <td>' + tableLength + '</td><td class="categor">' + addCategory + '</td><td><button type="button" class="btn btn-delete btn-delete-category">Delete</button><button type="button" class="btn btn-edit btn-edit-category">Edit</button></td></tr>');
                $("form").get(0).reset();
                $("#category").append('<option>' + addCategory + '</option');
                $(".category-filter").append('<option>' + addCategory + '</option');
            }
            data.map(function(elem, index){
                var indexNew = index + 1;
                //console.log (elem.name.length);
                $("#table-category").val("").append('<tr class="categ"> <td>' + indexNew + '</td><td class="categor">' + elem.name + '</td><td><button type="button" class="btn btn-delete btn-delete-category">Delete</button><button type="button" class="btn btn-edit btn-edit-category">Edit</button></td></tr>');
                //console.log('<tr><td>' + index + '</td><td>' + elem.name + '</td></tr>');
                //console.log(elem);
            });
           
        
        });
        //btn-delete
        $('body').on('click', '.btn-delete', (function () {
            data.map(function(elem, index){
                $.ajax({
                    url: 'http://localhost:2403/category/' + elem.id,
                    type: 'DELETE',
                });
            }) 
        }));

        //btn-edit
        $('body').on('click', '.btn-edit', (function (e) {
            data.map(function(elem, index){
            $.ajax({
                url: 'http://localhost:2403/category/' + elem.id,
                type: 'PUT',
                success: function (result) {
                
                }
                });
            });
            
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