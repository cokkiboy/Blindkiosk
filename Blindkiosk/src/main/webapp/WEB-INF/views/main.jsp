<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BlindCoffee</title>
     <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.3/dist/jquery.min.js"></script>
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body>
    <header class="header">
        <div class="header-title">
            <h1> BlindCoffee </h1>
        </div>
        <div class="voice-btn">
            <button>Text to Speech</button>
            <button>Speech To Text</button>
        </div>
    </header>
    <nav>
        <div class="category">
       
          <button title="hot-coffee" onclick="open_menu_table(this.title)">따뜻한 커피(HOT Coffee)</button>
          
          <button title="iced-coffee" onclick="open_menu_table(this.title)">차가운 커피(ICE Coffee)</button>
          <button title="hot-tea" onclick="open_menu_table(this.title)">따뜻한 차(HOT TEA)</button>
          <button title="iced-tea" onclick="open_menu_table(this.title)">차가운 차(ICE TEA)</button>
          <button title="dessert" onclick="open_menu_table(this.title)">디저트(DESSERT)</button>
        </div>
      </nav>
      
    <main>
        <div class="menu-item">
            <div id="hot-coffee">
                <div id="row">
                    <div id="hot_에스프레쏘" title="coffee" data-price="2000" onclick="option(this.id, this.title, this.dataset.price)"><img src="../images/hot-coffee/hot_espresso.jpg" alt="에스프레소(HOT)"> <!-- 금액 + 이름 추가 예정--></div>
                    <div id="hot_아메리카노" title="coffee" data-price="2100" onclick="option(this.id, this.title, this.dataset.price)"><img src="../images/hot-coffee/hot_americano.jpg" alt="아메리카노(HOT)" ><!-- 금액 + 이름 추가 예정--></div>
                </div>
                <div id="row">
                    <div id="hot_카페라떼" title="coffee" data-price="2200" onclick="option(this.id, this.title, this.dataset.price)"><img src="../images/hot-coffee/hot_cafelatte.jpg" alt="카페라떼(HOT)"><!-- 금액 + 이름 추가 예정--></div>
                    <div id="hot_카페모카" title="coffee" data-price="2200" onclick="option(this.id, this.title, this.dataset.price)"><img src="../images/hot-coffee/hot_cafemocha.jpg" alt="카페모카(HOT)"><!-- 금액 + 이름 추가 예정--></div>
                </div>
            </div>
            <div id="iced-coffee">
                <div id="row">
                    <div id="ice_아메리카노" title="coffee" data-price="2200" onclick="option(this.id, this.title, this.dataset.price)"><img src="../images/iced-coffee/iced_americano.jpg" alt="아메리카노(ICE)"><!-- 금액 + 이름 추가 예정--></div>
                    <div id="ice_카페라떼" title="coffee" data-price="2200" onclick="option(this.id, this.title, this.dataset.price)"><img src="../images/iced-coffee/iced_cafelatte.jpg" alt="카페라떼(ICE)"><!-- 금액 + 이름 추가 예정--></div>
                </div>
                <div id="row">
                    <div id="ice_카페모카" title="coffee" data-price="2200" onclick="option(this.id, this.title, this.dataset.price)"><img src="../images/iced-coffee/iced_cafemocha.jpg" alt="카페모카(ICE)"><!-- 금액 + 이름 추가 예정--></div>
                    <div id="ice_카푸치노" title="coffee" data-price="2200" onclick="option(this.id, this.title, this.dataset.price)"><img src="../images/iced-coffee/iced_cappuccino.jpg" alt="카푸치노(ICE)"><!-- 금액 + 이름 추가 예정--></div>
                </div>
            </div>

            <div id="hot-tea">
                <div id="row">
                    <div id="hot_녹차" title="no_option" data-price="2200" onclick="option(this.id, this.title, this.dataset.price)"><img src="../images/hot-tea/hot_greentea.jpg" alt="녹차(HOT)"><!-- 금액 + 이름 추가 예정--></div>
                    <div id="hot_얼그레이" title="no_option" data-price="2200" onclick="option(this.id, this.title, this.dataset.price)"><img src="../images/hot-tea/hot_earlgrey.jpg" alt="얼그레이(HOT)"><!-- 금액 + 이름 추가 예정--></div>
                </div>
                <div id="row">                
                    <div id="hot_사과유자차" title="no_option" data-price="2200" onclick="option(this.id, this.title, this.dataset.price)"><img src="../images/hot-tea/hot_applecitrontea.jpg" alt="사과유자차(HOT)"><!-- 금액 + 이름 추가 예정--></div>
                    <div id="hot_페퍼민트차" title="no_option" data-price="2200" onclick="option(this.id, this.title, this.dataset.price)"><img src="../images/hot-tea/hot_pepperminttea.jpg" alt="페퍼민트차(HOT)"><!-- 금액 + 이름 추가 예정--></div>
                </div>
            </div>

            <div id="iced-tea">
                <div id="row">
                    <div id="ice_복숭아아이스티" title="no_option" data-price="2200" onclick="option(this.id, this.title, this.dataset.price)"><img src="../images/iced-tea/peachicedtea.jpg" alt="복숭아아이스티(ICE)"><!-- 금액 + 이름 추가 예정--></div>
                    <div id="ice_녹차" title="no_option" data-price="2200" onclick="option(this.id, this.title, this.dataset.price)"><img src="../images/iced-tea/ice_greentea.jpg" alt="녹차(ICE)"><!-- 금액 + 이름 추가 예정--></div>
                </div>
                <div id="row">    
                    <div id="ice_사과유자차" title="no_option" data-price="2200" onclick="option(this.id, this.title, this.dataset.price)"><img src="../images/iced-tea/ice_applecitrontea.jpg" alt="사과유자차(ICE)"><!-- 금액 + 이름 추가 예정--></div>
                    <div id="ice_얼그레이" title="no_option" data-price="2200" onclick="option(this.id, this.title, this.dataset.price)"><img src="../images/iced-tea/ice_earlgrey.jpg" alt="얼그레이(ICE)"><!-- 금액 + 이름 추가 예정--></div>
                </div>
            </div>

            <div id="dessert">
                <div id="row">
                    <div id="치즈케이크" title="no_option" data-price="2200" onclick="option(this.id, this.title, this.dataset.price)"><img src="../images/dessert/cheesecake.jpg" alt="치즈케이크"><!-- 금액 + 이름 추가 예정--></div>
                    <div id="허니브레드" title="no_option" data-price="2200" onclick="option(this.id, this.title, this.dataset.price)"><img src="../images/dessert/honeybread.jpg" alt="허니브레드"><!-- 금액 + 이름 추가 예정--></div>
                </div>
                <div id="row">
                    <div id="감자빵" title="no_option" data-price="2200" onclick="option(this.id, this.title, this.dataset.price)"><img src="../images/dessert/potatobread.jpg" alt="감자빵"><!-- 금액 + 이름 추가 예정--></div>
                    <div id="첨벙첨벙간식꾸러미" title="no_option" data-price="2200" onclick="option(this.id, this.title, this.dataset.price)"><img src="../images/dessert/summerkrstdessertpack.jpg" alt="첨벙첨벙간식꾸러미"><!-- 금액 + 이름 추가 예정--></div>
                </div>
            </div>
        </div>
    </main>

   <!-- 하단바 -->
    <aside id="order-details">
        <div id="order-details-tab">
            <h2>Cart</h2>
        </div>
        <div id="order-details-selected-menu">
            <div id="order_list">
                <div id="cartContainer">
  					<!-- 자바스크립트는 여기에 동적으로 cart를 추가합니다 -->
				</div>
        	</div>
        </div>
        <div id="total_price">
            <h3>Total Price: 0원</h3>
        </div>
        <div id="order-details-paybtn">
            <button id="pay-btn" >결제하기</button>
            
        </div>
        <div id="toast">결제되셨습니다!</div>
    </aside>
    <script src="../js/order.js" ></script>
    <script src="../js/main.js" ></script>
</body>
</html>