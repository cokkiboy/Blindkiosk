package com.pro.blindkiosk.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Lob;

import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Embeddable
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name="Menu")
public class Menu {
	@Id   
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private int id;
      
	
	   @Column(nullable=false,length=100)
	   //메뉴 이름
	private  String title;
	
	   @Column(nullable=false,length=100)
	  private int  price;
	   //메뉴이미지
	   @Lob
	private String image;
	   
	   //알러지
	   @Column(nullable=false,length=100)
	private String allergy;
	   
	   //메뉴종류
	   @Column(nullable=false,length=100)
	   private String menuType;
	   //칼로리
	   @Column(nullable=false,length=100)
	private int calorie;
	//찬거 뜨거운거 디저트
	private Temp temp;
	   

}
