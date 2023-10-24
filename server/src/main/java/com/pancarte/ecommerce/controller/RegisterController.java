package com.pancarte.ecommerce.controller;

import com.pancarte.ecommerce.model.Role;
import com.pancarte.ecommerce.model.User;
import com.pancarte.ecommerce.repository.RoleRepository;
import com.pancarte.ecommerce.service.UserService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.aspectj.lang.annotation.After;
import org.springframework.scheduling.annotation.Async;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/register")
public class RegisterController {

    private final UserService userService;
    private final RoleRepository roleRepository;


    @PostMapping
    public User addUser(@RequestBody User theUser) {
        return userService.save(theUser);
    }

    @Data

    static class AddRoleRequest {
        private String email;
        private String role;
    }
    @PatchMapping()
    @PreAuthorize("permitAll()")
    public void addRoles(@RequestBody AddRoleRequest request) {
        userService.addRoleTo(request.getEmail(), request.getRole());
    }


}
