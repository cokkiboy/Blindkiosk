package com.pro.blindkiosk.model;



import java.sql.Timestamp;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data	//어노테이션을 활용하여 toString, getter, setter 등 자동완성
@Entity
@NoArgsConstructor  //빈생성자
@AllArgsConstructor  //모든 파라미터를 받은  생성자
@Builder
@Table(name="OrderTable") //테이블이름 정할떄 sql문이랑 같지않게 해야한다 !!
public class Order {
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)//기본키 생성 DB에 위임
	//table 컬럼이 DB에 매핑될 때 컬럼명 부여
	private int id;//주문 번호

	
   
	@ManyToOne(  fetch=FetchType.EAGER,cascade=CascadeType.REMOVE )  //Fk 하나의 주문자가 여러 메뉴 주문가능  xxtoOne일 경우에 EAGER 타입 즉시로딩 사용
	@JoinColumn(name ="Id")  
	 private Menu menu;
	private int code;	//번호
	//하나의 메뉴는 여러주문가능하다

	
	private String title;	//메뉴 이름

	@Column(nullable=false,length=100)
	private int count;	//메뉴 수량

	@Column(nullable=false,length=100)
	private int price;	//메뉴 가격

	@Column(nullable=false,length=100)
	private int sum_price;	//총 가격
	
  //@CreationTimestamp

	private Timestamp createDate;  // 이거쓴 이유 실시간으로 저장되는거 주문날짜 실시간으로  sql저장
	//import java.sql.Timestamp; 임포트할떄 꼭이걸로하자
	
	//private List<Order> orderList; //List 주문내용 리스트타입 
}
