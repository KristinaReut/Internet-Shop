$(document).ready(function () {
    $.get('http://localhost:2403/products/', function (prod) {
        //$("#myTable").html("");
        for (var i = 0; i < prod.length; i++) {
            console.log(prod[i]);
            var index = i + 1;
            $("#myTable tbody").append('<tr class="prod"> <td>' + index + '</td> <td>' + prod[i].name + '</td><td>' + prod[i].price + '</td><td>' + prod[i].description + '</td><td>' + prod[i].category + '</td><td>' + prod[i].image + '</td><td>' + prod[i].engine + '</td><td>' + prod[i].color + '</td><td><button type="button" class="btn btn-delete btn-delete-products">Delete</button><button type="button" class="btn editTr">Edit</button></td><td> <input type="checkbox" class="form-check-input" id="exampleCheck1"></td></tr>');
        }
	// check not-required input !!!!
	$(".req").change(function () {
		if ($(".req").length = 0) {
			$(".btn-add").css({ "background-color": "#BDBDBD", "color": "gray" });
		}
		else { $(".btn-add").css({ "background-color": "green", "color": "white" }); }
	});


	// adding new product
	$(".btn-add").click(function (ev) {
		var name = $("#name").val();
		var price = $("#price").val();
		var description = $("#description").val();
		var category = $("#category").val();
		var img = $("#img").val();
		var engine = $("#engine").val();
		var color = $("#color").val();
		var featured = $("#exampleCheck1").val();
		
		if (name != 0 && price != 0 && category != 0 && img != 0 && engine != 0 && color != 0) {
			$.ajax ({
				url: 'http://localhost:2403/products/',
				type: 'POST',
				data: { name: name,
				price: price,
				description: description,
				category: category,
				image: img,
				engine: engine,
				color: color,
			    featured: featured},
            });

			var tableProdLength = $("#myTable tr").length;
			$("#myTable tbody").append('<tr class="prod"> <td>' + tableProdLength + '</td> <td>' + name + '</td><td>' + price + '</td><td>' + description + '</td><td>' + category + '</td><td>' + img + '</td><td>' + engine + '</td><td>' + color + '</td><td><button type="button" class="btn btn-delete btn-delete-products">Delete</button><button type="button" class="btn btn-edit">Edit</button></td><td> <input type="checkbox" class="form-check-input" id="exampleCheck1"></td></tr>');
			$(".description-product").get(0).reset();
        }
    });
    	//btn-delete
	$('body').on('click','.btn-delete',(function(e){
		let tableDelete = $(e.target).parents('.prod').remove();
		console.log(tableDelete)
		$.ajax({
			url: 'http://localhost:2403/category/'+ tableDelete,
			type: 'DELETE',
			success: function(result){
				$(e.target).parents('.categ').remove();
			}
		})
		$.ajax({
			url: 'http://localhost:2403/products/'+ prod.id,
			type: 'DELETE',
			success: function(result){
				$(e.target).parents('.prod').remove();
			}
		})
	}));
    
    $('body').on('click', '.btn-delete-products', (function (e) {

        for (var i = 0; i < prod.length; i++) {
            $.ajax({
                url: 'http://localhost:2403/category/' + prod[i].id,
                type: 'DELETE',
            });
        }

    }));
    //btn-edit
    $('body').on('click', '.editTr', function(e){
        let nameEdit = $(e.target).parents('tr').children('td').eq(1);
        let namePrice = $(e.target).parents('tr').children('td').eq(2);
        let nameDescription = $(e.target).parents('tr').children('td').eq(3);
        let nameCategories = $(e.target).parents('tr').children('td').eq(4);
        let nameImage = $(e.target).parents('tr').children('td').eq(5);
        let nameEngine = $(e.target).parents('tr').children('td').eq(6);
        let nameColor = $(e.target).parents('tr').children('td').eq(7);
        $(e.target).parents('tr').children('td').eq(8).html('<button class="btn btn-danger deleteTr" >DELETE</button>\
        <button class="btn btn-success">Save</button></td>'); 
        nameEdit.html( '<input value="'+ nameEdit.html() +'">');
        namePrice.html( '<input value="'+ namePrice.html() +'">');
        nameDescription.html( '<input value="'+ nameDescription.html() +'">');
        nameImage.html( '<input value="'+ nameImage.html() +'">');
        nameColor.html( '<input value="'+ nameColor.html() +'">');
        nameEngine.html( '<input value="'+ nameEngine.html() +'">');
            prod.map(function (elem, index) {
                $.ajax({
                    url: 'http://localhost:2403/products/' + elem.id,
                    type: 'PUT',
                    data: { name: elem.name,
                        price: elem.price,
                        description: elem.description,
                        category: elem.category,
                        image: elem.img,
                        engine: elem.engine,
                        color: elem.color},
                });
			});
			$('body').on('click', '.btn-success', (function (e) {
				let newValueInput = nameEdit;
				console.log(newValueInput);
				prod.map(function (element, index) {
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
	});


  
    
});
});