$(function () {
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
			$("#myTable tbody").append('<tr class="prod"> <th scope="row">' + tableProdLength + '</th> <td>' + name + '</td><td>' + price + '</td><td>' + description + '</td><td>' + category + '</td><td>' + img + '</td><td>' + engine + '</td><td>' + color + '</td><td><button type="button" class="btn btn-delete">Delete</button><button type="button" class="btn btn-edit">Edit</button></td><td> <input type="checkbox" class="form-check-input" id="exampleCheck1"></td></tr>');
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
			url: 'http://localhost:2403/products/'+ tableDelete,
			type: 'DELETE',
			success: function(result){
				$(e.target).parents('.prod').remove();
			}
		})
	}));
	//btn-edit
	$('body').on('click', '.btn-edit', (function(eb){

		$.ajax({
			url: 'http://localhost:2403/category/'+ trId,
			type: 'PUT',
			success: function(result){
			
			}
		})
		$.ajax({
			url: 'http://localhost:2403/products/'+ trId,
			type: 'PUT',
			success: function(result){
				
			}
		})
	}));
});