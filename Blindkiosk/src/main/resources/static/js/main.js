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

  var duplicate = false;
  for (i = 0; i < order_list.length; i++) {
      if (order.name == order_list[i].name) {
          order_list[i].number += 1;
          duplicate = true;
      }
  }
  
  if (!duplicate) {
      order_list.push(order);
  }
  
  open_order_list(order_list);

  if (type == "no_option") {
      /**/
  }
}
var numOfCarts = 5;

function createCartElement(cartNumber) {
  var cart = document.createElement('div');
  cart.id = 'order_' + cartNumber;
  cart.className = 'cart';

  var deleteBtn = document.createElement('div');
  deleteBtn.id = 'delete_' + cartNumber;
  deleteBtn.onclick = function () {
    resetItem(cartNumber - 1);
  };
  deleteBtn.innerText = 'X';
  cart.appendChild(deleteBtn);

  var range = document.createElement('div');
  range.id = 'range_' + cartNumber;
  cart.appendChild(range);

  var minusBtn = document.createElement('div');
  minusBtn.id = 'minus_' + cartNumber;
  minusBtn.onclick = function () {
    minus(cartNumber - 1);
  };
  minusBtn.innerText = 'ㅡ';
  cart.appendChild(minusBtn);

  var amount = document.createElement('div');
  amount.id = 'amount_' + cartNumber;
  cart.appendChild(amount);

  var plusBtn = document.createElement('div');
  plusBtn.id = 'plus_' + cartNumber;
  plusBtn.onclick = function () {
    plus(cartNumber - 1);
  };
  plusBtn.innerText = '╋';
  cart.appendChild(plusBtn);

  var itemPrice = document.createElement('div');
  itemPrice.id = 'item_price_' + cartNumber;
  cart.appendChild(itemPrice);

  cart.style.display = 'none';

  return cart;
}

function generateCarts(numOfCarts) {
  var container = document.getElementById('cartContainer');
  
  for (var i = 1; i <= numOfCarts; i++) {
    var cartElement = createCartElement(i);
    container.appendChild(cartElement);
  }
}

var total_list= [0, 0];

function open_order_list(order_list) {
  var total_num = 0;
  var total_price = 0;

  // 모든 아이템 숨기기
  for (var j = 1; j <= numOfCarts; j++) {
    document.getElementById("order_" + j).style.display = 'none';
  }

  for (i = 0; i < order_list.length; i++) {
    var order_id = "order_" + (i + 1);
    document.getElementById(order_id).style.display = 'flex';

    document.getElementById("range_" + (i + 1)).innerText = (i + 1) + ". " + (order_list[i].name);
    document.getElementById("amount_" + (i + 1)).innerText = (order_list[i].number) + "개";
    document.getElementById("minus_" + (i + 1)).setAttribute("onclick", "minus(" + i + ")");
    document.getElementById("plus_" + (i + 1)).setAttribute("onclick", "plus(" + i + ")");
    document.getElementById("delete_" + (i + 1)).setAttribute("onclick", "resetItem(" + i + ")");
    
    total_num += order_list[i].number;
    total_price += order_list[i].price * order_list[i].number;
  }
  document.getElementById("total_price").innerHTML = "총 가격: " + total_price + "원";
  total_list[0] = total_num;
  total_list[1] = total_price;
}

function minus(i) {
  if (order_list[i].number > 0) {
    order_list[i].number -= 1;

    if (order_list[i].number == 0) {
      order_list.splice(i, 1);
    }
  }
  open_order_list(order_list);
}

function resetItem(i) {
  order_list[i].number = 0;
  order_list.splice(i, 1);
  open_order_list(order_list);
}

function plus(i) {
  order_list[i].number += 1;
  open_order_list(order_list);
}

// 생성할 장바구니 수 (예: 5)
generateCarts(numOfCarts);


const toast = document.getElementById('toast');  // id가 toast인 요소 div
 let isToastShown = false;
 // id가 toastButton인 요소를 클릭하면 아래 함수가 호출됨
 document.getElementById('pay-btn').addEventListener('click', function () {
 if (isToastShown) return;   // 토스트 메시지가 띄어져 있다면 함수를 끝냄
 isToastShown = true;
 toast.classList.add('show');    // show라는 클래스를 추가해서 토스트 메시지를 띄우는 애니메이션을 발동시킴
 setTimeout(function () {
  // 2700ms 후에 show 클래스를 제거함
  toast.classList.remove('show');
  isToastShown = false;
  }, 2700);
  });