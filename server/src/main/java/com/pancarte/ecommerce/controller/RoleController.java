package com.pancarte.ecommerce.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pancarte.ecommerce.model.Role;
import com.pancarte.ecommerce.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/roles")
@RequiredArgsConstructor

public class RoleController {
    private final UserService userService;

    @PostMapping
    public Role save(@RequestBody Role role) {
        return userService.saveRole(role);
    }
    
}
