package com.pro.blindkiosk.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class ApiController {
	
	@GetMapping({"","/"})
    public String Main() {
    	
		return "main";
    }
}
