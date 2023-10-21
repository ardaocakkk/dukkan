package com.pancarte.ecommerce.controller;

import com.pancarte.ecommerce.model.User;
import com.pancarte.ecommerce.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/register")
public class RegisterController {

    private final UserService userService;


    @PostMapping
    public User registerUser(@RequestBody User theUser) throws Exception {
        return userService.save(theUser);
    }
}
