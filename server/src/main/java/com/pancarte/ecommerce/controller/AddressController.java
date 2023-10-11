package com.pancarte.ecommerce.controller;

import com.pancarte.ecommerce.model.Address;
import com.pancarte.ecommerce.model.User;
import com.pancarte.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RequestMapping(value = "/api/adresses")
@RestController
public class AddressController {

    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public Address getUserDetails(@PathVariable int id) {
        return userService.getUserById(id).getAddress();
    }

    @PostMapping("/{id}")
    public Address addUserDetails(@PathVariable int id, @RequestBody Address address) {
        User user = userService.getUserById(id);
        user.setAddress(address);
        address.setUser(user);
        return userService.addUser(user).getAddress();
    }

    @PutMapping("/{id}")
    public Address updateUserDetails(@PathVariable int id, @RequestBody Address address) {
        User user = userService.getUserById(id);
        user.setAddress(address);
        address.setUser(user);
        return userService.addUser(user).getAddress();
    }

    @DeleteMapping("/{id}")
    public String deleteUserDetails(@PathVariable int id) {
        User user = userService.getUserById(id);
        user.setAddress(null);
        userService.addUser(user);
        return "Address Removed";
    }



}
