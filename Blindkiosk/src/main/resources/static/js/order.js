let index ={
	 init :function(){
		   $("#pay-btn").on("click", ()=>{ // function(){} , ()=>{} this를 바인딩하기 위해서!! 
				this.pay();
			});
	},
	pay: function(){
			//alert('user의 save함수 호출됨');
			let data = {
				order_details_selected_menu:$("#order-details-selected-menu").val(),
				menu_item: $("#menu-item").val(),
					order_list: $("#order_list").val(),
				total_price: $("#total_price").val()
			};

	

			// ajax호출시 default가 비동기 호출
			// ajax 통신을 이용해서 3개의 데이터를 json으로 변경하여 insert 요청!!
			// ajax가 통신을 성공하고 서버가 json을 리턴해주면 자동으로 자바 오브젝트로 변환해주네요.
			$.ajax({ 
				type: "POST",
				url: "/",
				data: JSON.stringify(data), // http body데이터
				contentType: "application/json; charset=utf-8",// body데이터가 어떤 타입인지(MIME)
				dataType: "json" // 요청을 서버로해서 응답이 왔을 때 기본적으로 모든 것이 문자열 (생긴게 json이라면) => javascript오브젝트로 변경
			}).done(function(resp){
				
				if(resp.status===500){
				   alert("주문완료");	
				}
				else{
					alert("주문완료");
					location.href="/";
				}
				
				console.log(resp);
				
			}).fail(function(error){
				alert(JSON.stringify(error));
			}); 
}

}

