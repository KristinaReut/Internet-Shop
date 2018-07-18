
$(document).ready(function () {
    $.get('http://localhost:2403/category/', function (data) {
        $("#table-category").html("");
        $("#category").html("");
        $("#table-category").html("");
        for (var i = 0; i < data.length; i++) {
            console.log(data[i]);
            var index = i + 1;
            $("#category").append('<option>' + data[i].name + '</option');
            $(".category-filter").append('<option>' + data[i].name + '</option');
            $("#table-category").append('<tr class="categ"> <td>' + index + '</td><td class="categor">' + data[i].name + '</td><td><button type="button" class="btn btn-delete btn-delete-category">Delete</button><button type="button" class="btn btn-edit btn-edit-category">Edit</button></td></tr>');
        }
        $('body').on('click', '.btn-add-category', (function (e) {
            //e.preventDefault();
            var addCategory = $("#add-category").val().trim();
            console.log(addCategory);
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
            //data.map(function(elem, index){
            //var indexNew = index + 1;
            //console.log (elem.name.length);
            //  $("#table-category").append('<tr class="categ"> <td>' + indexNew + '</td><td class="categor">' + elem.name + '</td><td><button type="button" class="btn btn-delete btn-delete-category">Delete</button><button type="button" class="btn btn-edit btn-edit-category">Edit</button></td></tr>');
            //console.log('<tr><td>' + index + '</td><td>' + elem.name + '</td></tr>');
            //console.log(elem);

            //});


        }));
        //btn-delete
        $('body').on('click', '.btn-delete', (function (e) {

            for (var i = 0; i < data.length; i++) {
                $.ajax({
                    url: 'http://localhost:2403/category/' + data[i].id,
                    type: 'DELETE',
                });
            }

        }));

        //btn-edit
        $('body').on('click', '.btn-edit', (function (e) {
            data.map(function (elem, index) {
                $.ajax({
                    url: 'http://localhost:2403/category/' + elem.id,
                    type: 'PUT',
                    data: { name: elem.name },
                    success: function (result) {
                        $(e.target).parents('tr').html('<td></td>\
                    <td><input class="inputEditNew" value="'+ elem.name + '"></td>\
                    <td><button class="btn btn-delete btn-delete-category" >DELETE</button>\
                    <button class="btn btn-success">Save</button></td>');
                    }
                });
            });
        }));
        $('body').on('click', '.btn-success', (function (e) {
            let newValueInput = $('.inputEditNew').val();
            console.log(newValueInput);
            data.map(function (element, index) {
                $.ajax({
                    url: 'http://localhost:2403/category/' + element.id,
                    type: 'PUT',
                    data: { name: newValueInput },
                });
                var indexNew = index + 1;
                $(e.target).parents('tr').html("");
                $("#table-category").append('<tr class="categ"> <td>' + indexNew + '</td><td class="categor">' + newValueInput + '</td><td><button type="button" class="btn btn-delete btn-delete-category">Delete</button><button type="button" class="btn btn-edit btn-edit-category">Edit</button></td></tr>');
                $("#category").append('<option>' + newValueInput + '</option');
                $(".category-filter").append('<option>' + newValueInput + '</option');
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