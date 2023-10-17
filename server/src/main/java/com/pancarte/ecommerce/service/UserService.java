package com.pancarte.ecommerce.service;

import com.pancarte.ecommerce.model.Product;
import com.pancarte.ecommerce.model.Role;
import com.pancarte.ecommerce.model.User;
import com.pancarte.ecommerce.repository.RoleRepository;
import com.pancarte.ecommerce.repository.UserRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
 import org.springframework.http.HttpStatus;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class UserService {
    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private final ProductService productService;

    @Autowired
    private final StoreService storeService;
    @Autowired
    private final RoleRepository roleRepository;


    public List<User> getUsers(){
        return userRepository.findAll();
    }

    public User getUserById(int id) {
        return userRepository.findById(id).orElse(null);
    }

    public User addUser(User theUser){
        var existingUser = userRepository.findByEmail(theUser.getEmail());
        if(existingUser != null){
            throw new HttpClientErrorException(HttpStatus.BAD_REQUEST, "User already exists");
        }        
        return userRepository.save(theUser);
    }

    public String deleteUserById(int id) {
        userRepository.deleteById(id);
        return "User Removed";
    }

    public User updateUser(User theUser){
        User existingUser = userRepository.findById(theUser.getId()).orElse(null);
        existingUser.setEmail(theUser.getEmail());
        existingUser.setPassword(theUser.getPassword());
        return userRepository.save(existingUser);
    }

    public Role saveRole(Role role) {
        return roleRepository.save(role);
    }


    public User addProductToWishlist(int id, int productId) {
        User existingUser = userRepository.findById(id).orElse(null);
        Product existingProduct = productService.getProductById(productId);
        assert existingUser != null;
        existingUser.getLikedProducts().add(existingProduct);
        return userRepository.save(existingUser);
    }

    public List<Product> getUserWishlist(int id) {
        User existingUser = userRepository.findById(id).orElse(null);
        assert existingUser != null;
        List<Product> wishList =  existingUser.getLikedProducts();

        existingUser.setLikedProducts(wishList);
        return wishList;
    }

    public void addRoleTo(String email, String role) {
        User user = userRepository.findByEmail(email);
        Role theRole = roleRepository.findByName(role);
        user.getRoles().add(theRole);
        userRepository.save(user);
    }
}
