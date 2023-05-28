package com.pro.blindkiosk.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pro.blindkiosk.model.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer>{

	public Order findById(int code);
}
