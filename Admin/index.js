$(function () {

	// follow links
	$("a[href='#/products']").click(function () {
		$(".category-type").css("display", "none");
		$(".product-type").css("display", "block");
		$(".order-type").css("display", "none");
		$(".customer-type").css("display", "none");
		$(".add-product").css("display", "block");
	});
	$("a[href='#/orders']").click(function () {
		$(".category-type").css("display", "none");
		$(".product-type").css("display", "none");
		$(".order-type").css("display", "block");
		$(".customer-type").css("display", "none");
		$(".add-product").css("display", "none");
	});
	$("a[href='#/customers']").click(function () {
		$(".category-type").css("display", "none");
		$(".product-type").css("display", "none");
		$(".order-type").css("display", "none");
		$(".customer-type").css("display", "block");
		$(".add-product").css("display", "none");
	});
	$("a[href='#/categories']").click(function () {
		$(".category-type").css("display", "block");
		$(".product-type").css("display", "none");
		$(".order-type").css("display", "none");
		$(".customer-type").css("display", "none");
		$(".add-product").css("display", "none");
	});

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
		if ()
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
		//$(".btn-delete").click(function () {
		//	$(this).parents(".prod").remove();
		//});
		//$(".btn-delete-category").click(function () {
		//	$(this).parents("select #category").remove();
		//});
		//$(".btn-edit").click(function () {
			//	$("")  editing
		//});
	});
	//btn-delete
	$('body').on('click','.btn-delete',(function(e){
		let trId = $(e.target).parents('tr').data('id');
		console.log(trId);
		$.ajax({
			url: 'http://localhost:2403/category/'+ trId,
			type: 'DELETE',
			success: function(result){
			
			}
		})
		$.ajax({
			url: 'http://localhost:2403/products/'+ trId,
			type: 'DELETE',
			success: function(result){
				
			}
		})
	}));
	$('body').on('click', '.btn-edit', (function(e){
		let trId = $(e.target).parents('tr').data('id');
		console.log(trId);
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
	

	
	// $(".btn-add-category").click(function () {
	// 	var addCategory = $("#add-categoty").val();
	// 	var tableLength = $("#table-category tr").length;
	// 	if (addCategory != 0) {
	// 		$("#table-category").append('<tr class="categ"> <th>' + tableLength + '</th><th class="categor">' + addCategory + '</th><th><button type="button" class="btn btn-delete-category">Delete</button><button type="button" class="btn btn-edit-category">Edit</button></th></tr>');
	// 		$("form").get(0).reset();
	// 		$("#category").append('<option class="select-category">' + addCategory + '</option>');
	// 		$(".category-filter").append('<option>' + addCategory + '</option>')
	// 	}
	// 	$.ajax({
	// 		url: 'http://localhost:2403/categories/',
	// 		type: 'post',
	// 		data: { name: addCategory },
	// 		success: console.log('submit')
	// 	});
	// });
	



});