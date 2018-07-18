$(document).ready(function () {
    $.get('http://localhost:2403/products/', function (prod, index) {
        //$("#myTable").html("");
        for (var i = 0; i < prod.length; i++) {
            console.log(prod[i]);
            var index = i + 1;
            $("#myTable tbody").append('<tr class="prod"> <td>' + index + '</td> <td>' + prod[i].name + '</td><td>' + prod[i].price + '</td><td>' + prod[i].description + '</td><td>' + prod[i].category + '</td><td>' + prod[i].image + '</td><td>' + prod[i].engine + '</td><td>' + prod[i].color + '</td><td><button type="button" class="btn btn-delete-products">Delete</button><button type="button" class="btn editTr">Edit</button></td><td> <input type="checkbox" class="form-check-input" id="exampleCheck1"></td></tr>');
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
			$("#myTable tbody").append('<tr class="prod"> <td>' + tableProdLength + '</td> <td>' + name + '</td><td>' + price + '</td><td>' + description + '</td><td>' + category + '</td><td>' + img + '</td><td>' + engine + '</td><td>' + color + '</td><td><button type="button" class="btn btn-delete-products">Delete</button><button type="button" class="btn editTr">Edit</button></td><td> <input type="checkbox" class="form-check-input" id="exampleCheck1"></td></tr>');
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
                url: 'http://localhost:2403/products/' + prod[i].id,
				type: 'DELETE',
				success: function(result){
					$(e.target).parents('.prod').remove();
				}
            });
        }

    }));
    //btn-edit
    $('body').on('click', '.editTr', function(e){
        let nameEdit = $(e.target).parents('tr').children('td').eq(1);
        let namePrice = $(e.target).parents('tr').children('td').eq(2);
        let nameDescription = $(e.target).parents('tr').children('td').eq(3);
        let nameImage = $(e.target).parents('tr').children('td').eq(5);
        let nameEngine = $(e.target).parents('tr').children('td').eq(6);
		let nameColor = $(e.target).parents('tr').children('td').eq(7);
		//console.log(nameEdit.html())
        $(e.target).parents('tr').children('td').eq(8).html('<button class="btn btn-danger deleteTr" >DELETE</button>\
        <button class="btn btn-change">Save</button></td>'); 
        nameEdit.html( '<input class="inputEdit" value="'+ nameEdit.html() +'">');
        namePrice.html( '<input class="inputPrice" value="'+ namePrice.html() +'">');
        nameDescription.html( '<input class="inputDescription" value="'+ nameDescription.html() +'">');
        nameImage.html( '<input class="inputImage" value="'+ nameImage.html() +'">');
        nameColor.html( '<input class="inputColor" value="'+ nameColor.html() +'">');
		nameEngine.html( '<input class="inputEngine" value="'+ nameEngine.html() +'">');
          //  prod.map(function (elem, index) {
			//	console.log(prod[index].name);
                // $.ajax({
                //    url: 'http://localhost:2403/products/' + elem.id,
				//	type: 'GET',
                //    data: { name: prod[index].name,
                //        price: prod[index].price,
                //        description: prod[index].description,
                //        category: prod[index].category,
                //        image: prod[index].img,
                //        engine: prod[index].engine,
                //        color: prod[index].color},
               // });
			//});
			
	
	$('body').on('click', '.btn-change', (function (e) {
		let newValueEdit = $('.inputEdit').val();
		console.log(newValueEdit);
		let newValuePrice = $('.inputPrice').val();
		let newValueDescription = $('.inputDescription').val();
		let newValueImage = $('.inputImage').val();
		let newValueEngine = $('.inputEngine').val();
		let newValueColor = $('.inputColor').val();

		console.log(newValueEdit);
		prod.map(function (element, index) {
			$.ajax({
				url: 'http://localhost:2403/products/' + element.id,
				type: 'PUT',
				data: { name: newValueEdit,
					price: newValuePrice,
					description: newValueDescription,
					category: element.category,
					image: newValueImage,
					engine: newValueEngine,
					color: newValueColor},
			});
			var indexNew = index + 1;
			$(e.target).parents('tr').html("");
			var category = $("#category").val();
			$("#myTable tbody").append('<tr class="prod"> <td>' + indexNew + '</td> <td>' + newValueEdit + '</td><td>' + newValuePrice + '</td><td>' + newValueDescription + '</td><td>' + category + '</td><td>' + newValueImage + '</td><td>' + newValueEngine + '</td><td>' + newValueColor + '</td><td><button type="button" class="btn btn-delete btn-delete-products">Delete</button><button type="button" class="btn editTr">Edit</button></td><td> <input type="checkbox" class="form-check-input" id="exampleCheck1"></td></tr>');
			
		});
	}));


});
    
});
});