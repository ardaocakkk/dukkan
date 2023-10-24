package com.pancarte.ecommerce.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.pancarte.ecommerce.model.Role;
import com.pancarte.ecommerce.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/roles")
@PreAuthorize("hasAnyAuthority('ROLE_ADMIN')")
@RequiredArgsConstructor

public class RoleController {
    private final UserService userService;

    @RequestMapping(method = RequestMethod.POST)
    public Role save(@RequestBody Role role) {
        return userService.saveRole(role);
    }
    
}
