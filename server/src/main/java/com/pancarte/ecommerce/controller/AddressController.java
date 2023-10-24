package com.pancarte.ecommerce.controller;

import com.pancarte.ecommerce.model.Address;
import com.pancarte.ecommerce.model.User;
import com.pancarte.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RequestMapping(value = "/api/address")
@RestController
public class AddressController {

    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public Address getUserDetails(@PathVariable int id) {
        return userService.getUserById(id).getAddress();
    }

    @PostMapping
    public Address addUserDetails(Authentication authentication, @RequestBody Address address) {
        User user = userService.findUserByEmail(authentication.getName());
        user.setAddress(address);
        address.setUser(user);
        return userService.save(user).getAddress();
    }

    @PutMapping("/{id}")
    public Address updateUserDetails(@PathVariable int id, @RequestBody Address address) {
        User user = userService.getUserById(id);
        user.setAddress(address);
        address.setUser(user);
        return userService.save(user).getAddress();
    }

    @DeleteMapping("/{id}")
    public String deleteUserDetails(@PathVariable int id) {
        User user = userService.getUserById(id);
        user.setAddress(null);
        userService.save(user);
        return "Address Removed";
    }



}
