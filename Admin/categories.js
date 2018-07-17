
$(document).ready(function () {
    $.get('http://localhost:2403/category/', function (data) {
        console.log('ready', data);
        $("#table-category").html("");
        $('body').on('click', '.btn-add-category', (function (e) {
            //e.preventDefault();
            var addCategory = $("#add-category").val().trim();
            var tableLength = $("#table-category tr").length + 1;
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
                $("#table-category").append('<tr class="categ"> <td>' + indexNew + '</td><td class="categor">' + elem.name + '</td><td><button type="button" class="btn btn-delete btn-delete-category">Delete</button><button type="button" class="btn btn-edit btn-edit-category">Edit</button></td></tr>');
                //console.log('<tr><td>' + index + '</td><td>' + elem.name + '</td></tr>');
                //console.log(elem);
                
            });
           
        
        }));
        //btn-delete
        $('body').on('click', '.btn-delete', (function (e) {
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
                type: 'GET',
                success: function (result) {
                    $(e.target).parents('tr').html('<td></td>\
                    <td><input class="inputEditNew" value="'+ elem.name+'"></td>\
                    <td><button class="btn btn-delete btn-delete-category" >DELETE</button>\
                    <button class="btn btn-success">Save</button></td>');  
                }
                });
            });
        }));
        $('body').on('click', 'btn-success', (function(e){
            data.map(function(elem, index){
                $.ajax({
                    url: 'http://localhost:2403/category/' + elem.id,
                    type: 'POST',
                    data: {name: elem.name},
                });
        $("#table-category").append('<tr class="categ"> <td>' + indexNew + '</td><td class="categor">' + elem.name + '</td><td><button type="button" class="btn btn-delete btn-delete-category">Delete</button><button type="button" class="btn btn-edit btn-edit-category">Edit</button></td></tr>');  
                    
                    
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