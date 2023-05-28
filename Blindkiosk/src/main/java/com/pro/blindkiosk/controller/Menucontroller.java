package com.pro.blindkiosk.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pro.blindkiosk.dto.ResponseDto;
import com.pro.blindkiosk.model.Menu;
import com.pro.blindkiosk.service.MenuService;

@RestController
public class Menucontroller {
	@Autowired  //생성자 setter field 의존성 DI주입
	private MenuService  menuService;
	
	//메뉴삽입
	@PostMapping("/SaveMenu")
	public String  MenuSave(Menu menu) {
		System.out.println("데이터삽입성공");
		menuService.MenuSave(menu);
		return menu.getTitle()+menu.getId()+menu.getAllergy()+menu.getPrice()+menu.getCalorie()+menu.getTemp();
	}
	//메뉴수정
	@PutMapping("/updateMenu/{id}")                               
	public ResponseDto<Integer>update(@PathVariable  int id , @RequestBody   
			Menu menu){
		menuService.MenuUpdate(id, menu);
		
		return new  ResponseDto<Integer>(HttpStatus.OK.value(),1);
	}
	
	//메뉴삭제
   @DeleteMapping("/DeleteMenu")
	public ResponseDto<Integer> Delete(int id) {
	   
	   menuService.MenuDelete(id);
	   return new  ResponseDto<Integer>(HttpStatus.OK.value(),1);
   }
	//모든메뉴검색
   @GetMapping("/selectall")
	public Page<Menu> Select(Pageable st){
	  return  menuService.Menuselect(st);
	   
   }
}
