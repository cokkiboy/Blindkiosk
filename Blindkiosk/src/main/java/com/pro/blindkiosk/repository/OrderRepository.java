package com.pro.blindkiosk.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pro.blindkiosk.model.Order;

public interface OrderRepository extends JpaRepository<Order, Integer>{
	public Order findById(int code);

}
