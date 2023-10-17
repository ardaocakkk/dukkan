package com.pancarte.ecommerce.controller;

import com.pancarte.ecommerce.model.Address;
import com.pancarte.ecommerce.model.Product;
import com.pancarte.ecommerce.model.User;
import com.pancarte.ecommerce.service.UserService;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RequestMapping(value = "/api/users")
@RestController
@RequiredArgsConstructor
public class UserController {

    @Autowired
    private final UserService userService;


    @GetMapping
    public List<User> getAllUsers(){
        return userService.getUsers();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable int id) {
        return userService.getUserById(id);
    }

    @PostMapping
    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    @PutMapping
    public User updateUser(@RequestBody User theUser) {
        return userService.updateUser(theUser);
    }

    @PatchMapping
    public void addRoles(@RequestBody AddRoleRequest request) {
        userService.addRoleTo(request.getEmail(), request.getRole());
    }

    @Data
    class AddRoleRequest {
        private String email;
        private String role;
    }

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable int id) {
        return userService.deleteUserById(id);
    }

    @PostMapping("/{id}/wishlist/{productId}")
    public User addProductToWishlist(@PathVariable int id, @PathVariable int productId) {
        return userService.addProductToWishlist(id, productId);
    }

    @GetMapping("/{id}/wishlist")
    public List<Product> getWishlist(@PathVariable int id) {
        return userService.getUserWishlist(id);
    }





}
