$(function(){
	$.ajax ({
		url: ""
	});
    // follow links
	$("a[href='#/products']").click(function(){ 
		$(".category-type").css("display", "none");
		$(".product-type").css("display", "block");
		$(".order-type").css("display", "none");
		$(".customer-type").css("display", "none");
		$(".add-product").css("display", "block");
	});
	$("a[href='#/orders']").click(function(){  
		$(".category-type").css("display", "none");
		$(".product-type").css("display", "none");
		$(".order-type").css("display", "block");
		$(".customer-type").css("display", "none");
		$(".add-product").css("display", "none");
	});
	$("a[href='#/customers']").click(function(){ 
		$(".category-type").css("display", "none");
		$(".product-type").css("display", "none");
		$(".order-type").css("display", "none");
		$(".customer-type").css("display", "block");
		$(".add-product").css("display", "none");
	});
	$("a[href='#/categories']").click(function(){ 
		$(".category-type").css("display", "block");
		$(".product-type").css("display", "none");
		$(".order-type").css("display", "none");
		$(".customer-type").css("display", "none");
		$(".add-product").css("display", "none");
	});
	
	// check not-required input !!!!


	$(".btn-add").change(function(){
		var allInput = $(".add-product input");
		if (allInput.length = 0) {
			$(".btn-add").css({"background-color": "#BDBDBD", "color": "gray"});
		}
		else {$(".btn-add").css({"background-color": "green", "color": "white"});}
	});


	// adding new product
	$(".btn-add").click(function(){
		var name = $("#name").val();
		var price = $("#price").val();
		var description = $("#description").val();
		var category = $("#category").val();
		var img = $("#img").val();
		var engine = $("#engine").val();
		var color = $("#color").val();
		if (name != 0 && price != 0 && category != 0 && img != 0 && engine != 0 && color != 0) {
			var tableProdLength = $("#myTable tr").length;
			$("#myTable tbody").append( '<tr class="prod"> <th scope="row">' + tableProdLength + '</th> <td>' + name + '</td><td>' + price + '</td><td>' + description + '</td><td>' + category + '</td><td>' + img + '</td><td>' + engine +'</td><td>' + color + '</td><td><button type="button" class="btn btn-delete">Delete</button><button type="button" class="btn btn-edit">Edit</button></td><td> <input type="checkbox" class="form-check-input" id="exampleCheck1"></td></tr>');
			$(".description-product").get(0).reset(); }
		$(".btn-delete").click(function(){
			$(this).parents(".prod").remove();
		});
		$(".btn-edit").click(function(){
		//	$("")  редактирование
        });
	});

	//adding category
	$(".btn-add-category").click(function(){
		var addCategory = $("#add-categoty").val();
		var tableLength = $("#table-category tr").length;
		if (addCategory != 0) {
			$("#table-category").append('<tr class="categ"> <th>' + tableLength + '</th><th class="categor">' + addCategory +'</th><th><button type="button" class="btn btn-delete-category">Delete</button><button type="button" class="btn btn-edit-category">Edit</button></th></tr>');
			$("form").get(0).reset();  
			$("#category").append('<option class="select-category">' + addCategory + '</option>');
			$(".category-filter").append('<option' + addCategory + '</option>')}
		$(".btn-delete-category").click(function(){
			$(this).parents(".categ").remove();
		});
		$(".btn-edit-category").click(function(e){
			var editing = addClass("edit")
		});
	});

   //search and category-filter




});