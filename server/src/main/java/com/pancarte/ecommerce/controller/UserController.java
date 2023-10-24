package com.pancarte.ecommerce.controller;

import com.pancarte.ecommerce.model.Product;
import com.pancarte.ecommerce.model.User;
import com.pancarte.ecommerce.service.UserService;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Map;

@CrossOrigin("*")
@RequestMapping(value = "/api/users")
@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;



    @RequestMapping(method = RequestMethod.GET)
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN')")
    public List<User> getAllUsers(){
        return userService.getUsers();
    }

    @GetMapping("/{id}")
    @PreAuthorize("permitAll()")
    public User getUserById(@PathVariable int id) {
        return userService.getUserById(id);
    }


    @RequestMapping(method = RequestMethod.POST)
    @PreAuthorize("permitAll()")
    public User save(@RequestBody User theUser) throws Exception{
        return userService.save(theUser);
    }



    @PutMapping
    public User updateUser(@RequestBody User theUser) {
        return userService.updateUser(theUser);
    }


    @Data
    static class AddRoleRequest {
        private String email;
        private String role;
    }

    @RequestMapping(method = RequestMethod.PATCH)
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN')")
    public void addRoles(@RequestBody AddRoleRequest request) {
        userService.addRoleTo(request.getEmail(), request.getRole());
    }



    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
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

    @RequestMapping("/me")
    public User getAuthenticatedUser(Authentication authentication, Principal principal) {
        return userService.getAuthenticatedUser(authentication, principal);
    }


}
