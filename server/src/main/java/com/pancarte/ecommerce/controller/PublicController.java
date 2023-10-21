package com.pancarte.ecommerce.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/public")
public class PublicController {

    @GetMapping()
    public String welcome() {
        return "Welcome to the Ecommerce API";
    }

    @GetMapping("/test")
    public String test() {
        return "Welcome to the Ecommerce test API";
    }

}
