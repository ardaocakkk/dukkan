package com.pancarte.ecommerce.service;

import com.pancarte.ecommerce.model.Product;
import com.pancarte.ecommerce.model.Store;
import com.pancarte.ecommerce.model.User;
import com.pancarte.ecommerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductService productService;

    @Autowired
    private StoreService storeService;


    public List<User> getUsers(){
        return userRepository.findAll();
    }

    public User getUserById(int id) {
        return userRepository.findById(id).orElse(null);
    }

    public User addUser(User theUser){
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
}
