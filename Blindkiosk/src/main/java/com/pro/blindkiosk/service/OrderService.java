package com.pro.blindkiosk.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Service;

import com.pro.blindkiosk.model.Order;

@Service
public class OrderService {
	//Bean of EntityManager 자동 할당
	@PersistenceContext //영속성 컨텍스트 
	private EntityManager em;
	
	@SuppressWarnings("unchecked")  //경고 억제  검증되지않은 경고
	public List<Order> getAll() {
		return (List<Order>) em.createQuery("from Order").getResultList();
	}
	
	public Order get(int num) {
		return (Order)em.createQuery("from Order where id = " + num).getSingleResult();
	}
	
	public List<Order> find(String str){
		//Criteria 쿼리는 JPQL을 자바 코드로 작성하도록 도와주는 빌더 클래스 API이다.
		CriteriaBuilder builder = em.getCriteriaBuilder();
		
		CriteriaQuery<Order> query = builder.createQuery(Order.class);
		Root<Order> root = query.from(Order.class);
		query.select(root).where(builder.equal(root.get("name"), str));
		
		List<Order> list = null;
		list = (List<Order>)em.createQuery(query).getResultList();
		return list;
	}
}
