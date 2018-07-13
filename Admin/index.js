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