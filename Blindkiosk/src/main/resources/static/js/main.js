



// 카테고리 및 메뉴 데이터
//const categories = [...] // 이곳에 스프링 프레임워크로부터 전달받은 카테고리 데이터를 넣습니다.
/*const menu = [
    "음료": [
      { name: "아메리카노", price: 3000 },
      { name: "카페라떼", price: 3500 },
      { name: "카페모카", price: 4000 },
      { name: "아이스티", price: 3000 },
      { name: "핫초코", price: 4000 },
    ],
  "빵": [
    { name: "크로와상", price: 2000 },
    { name: "마늘빵", price: 2500 },
    { name: "치즈빵", price: 2500 },
    { name: "식빵", price: 3000 },
    { name: "통밀빵", price: 3500 },
  ],
  "샌드위치": [
    { name: "치킨샌드위치", price: 4500 },
    { name: "햄치즈샌드위치", price: 4000 },
    { name: "에그마요샌드위치", price: 4000 },
    { name: "쉬림프샌드위치", price: 5000 },
    { name: "베이컨샌드위치", price: 5000 },
  ] 
]*/
function open_menu_table(id) {
  all_menu_none();
  document.getElementById(id).style.display = 'block';
}

function all_menu_none() {
  document.getElementById("hot-coffee").style.display = 'none';
  document.getElementById("iced-coffee").style.display = 'none';
  document.getElementById("hot-tea").style.display = 'none';
  document.getElementById("iced-tea").style.display = 'none';
  document.getElementById("dessert").style.display = 'none';
}
/** 
window.onload=function(){
  document.getElementById("hot-coffee").style.display = 'none';
  document.getElementById("iced-coffee").style.display = 'none';
  document.getElementById("hot-tea").style.display = 'none';
  document.getElementById("iced-tea").style.display = 'none';
  document.getElementById("dessert").style.display = 'none';
}
*/
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("hot-coffee").style.display = 'none';
  document.getElementById("iced-coffee").style.display = 'none';
  document.getElementById("hot-tea").style.display = 'none';
  document.getElementById("iced-tea").style.display = 'none';
  document.getElementById("dessert").style.display = 'none';
});
// 메뉴 랜더링 로직
function renderMenu(category) {
  // 이곳에서 스프링 프레임워크로 전달받은 메뉴 데이터에 따라 메뉴를 구성하고 화면에 랜더링합니다.
}

// 주문 등록 및 결제 로직
function addToOrder(menu, quantity) {
  // 이곳에서 사용자가 선택한 메뉴와 수량에 따라 주문에 추가하고 총 가격을 계산합니다.
}


// 내비게이션 탭 바 이벤트
const orderDetails = document.getElementById("order-details");
const orderDetailsTab = document.getElementById("order-details-tab");

orderDetailsTab.addEventListener("click", () => {
  orderDetails.classList.toggle("open");
});


function Item(name, price) {
  this.name = name;
  this.number = 0;
  this.price = parseInt(price);
}

var order_list = [];
function option(id, type, price) {
  var drink = document.getElementById(id);
  drink.style.borderStyle = 'solid';
  drink.style.borderColor = 'red';

  var order = new Item(id, price);
  order.number += 1;

  var cnt = 0;
  for (i = 0; i < order_list.length; i++) {
      if (order.name == order_list[i].name) {
          order_list[i].number += 1;
          cnt += 1;
      }
  }
  if (cnt == 0 || order_list.length == 0) {
      order_list.push(order);
  }
  
  open_order_list(order_list);

  if (type == "no_option") {
      /**/
  }
}



function delete_item(index) {
  order_list = order_list.splice(index, 1);
  open_order_list(order_list);
}


/*order_list에 표시하기*/
var total_list= [0, 0];
function open_order_list(order_list) {
  var total_num = 0;
  var total_price = 0;

  for (i = 0; i < order_list.length; i++) {
      var order_id = "order_" + (i + 1);
      document.getElementById(order_id).style.display = 'flex';

      document.getElementById("range_" + (i + 1)).innerText = (i + 1) + ". " + (order_list[i].name);
      document.getElementById("amount_" + (i + 1)).innerText = (order_list[i].number) + "개";
      document.getElementById("item_price_" + (i + 1)).innerText = (order_list[i].price) * (order_list[i].number) + "원";
      
      total_num += order_list[i].number;
      total_price += (order_list[i].price)*(order_list[i].number);
  }
  document.getElementById("total_price").innerHTML = "총 가격: " + (total_price)+"원";
  total_list[0] = total_num;
  total_list[1] = total_price;

}


function delete_item(index) {
  order_list = order_list.splice(index, 1);
  open_order_list(order_list);
}


function hide_order_list() {
  var list = document.getElementsByClassName("cart");
  for (i = 0; i < list.length; i++) {
      list[i].style.display = 'none';
  }
}

function hideCart(elem) {
  let cartElem = elem.closest(".cart");
  if (cartElem) {
      cartElem.style.display = "none";
  }
}