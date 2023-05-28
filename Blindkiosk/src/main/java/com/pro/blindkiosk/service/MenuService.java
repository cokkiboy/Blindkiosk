package com.pro.blindkiosk.service;



import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.pro.blindkiosk.model.Menu;
import com.pro.blindkiosk.repository.Menureposiory;

@Service // 서비스 뜻대로 기능을 만들어준다 
public class MenuService {
	@Autowired
	  private Menureposiory menureposiory;
	
	 
	 @Transactional   //메뉴삭제
	 public  void MenuDelete( int id) {
		 menureposiory.deleteById(id);
		 
	 }
	 @Transactional  // 메뉴등록
	 public void MenuSave(Menu menu) {
        menureposiory.save(menu);
	 }
	 
	  @Transactional  //메뉴 목록
	 public Page<Menu> Menuselect(Pageable pageble) {
		 return menureposiory.findAll(pageble);
	 }
	 //메뉴수정
	 @Transactional
	 public void MenuUpdate (int id ,Menu requestMenu) {
		 Menu menu = menureposiory.findById(id)
				                    .orElseThrow(()->{
				                    	 return new IllegalArgumentException("메뉴수정안됩니다");
				                    });
		 menu.setAllergy(requestMenu.getAllergy());
		 menu.setCalorie(requestMenu.getCalorie());
		 menu.setImage(requestMenu.getTitle());
		 menu.setImage(requestMenu.getImage());
		 
		 
	 }
}
