package com.pancarte.ecommerce.service;

import com.pancarte.ecommerce.model.Product;
import com.pancarte.ecommerce.model.Role;
import com.pancarte.ecommerce.model.User;
import com.pancarte.ecommerce.repository.RoleRepository;
import com.pancarte.ecommerce.repository.UserRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.HttpClientErrorException;
 import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class UserService implements UserDetailsService {
    private final UserRepository userRepository;
    private final ProductService productService;
    private final StoreService storeService;
    private final RoleRepository roleRepository;


    @Autowired
    private final BCryptPasswordEncoder bCryptPasswordEncoder;




    public List<User> getUsers(){
        return userRepository.findAll();
    }

    public User getUserById(int id) {
        User user = userRepository.findById(id).orElse(null);
        System.out.println(user.getRoles());
        return user;
    }

    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
    @Transactional
    public User save(User theUser){
        try {
            Objects.requireNonNull(theUser.getEmail());
            Objects.requireNonNull(theUser.getPassword());
        } catch (NullPointerException e) {
            throw new HttpClientErrorException(HttpStatus.BAD_REQUEST, "Email and password are required");
        }
        theUser.setPassword(bCryptPasswordEncoder.encode(theUser.getPassword()));
        Set<Role> newRole = (Set<Role>) roleRepository.findByName("ROLE_USER");
        theUser.setRoles(newRole);

        return userRepository.save(theUser);
    }


    public Map<String, Object> getAuthenticatedUser(@AuthenticationPrincipal User user) {
        return Map.of("email", user.getEmail(), "roles", user.getRoles().stream().map(Role::getName).collect(Collectors.toList()));
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

    @Transactional
    public void addRoleTo(String email, String role) {
        User user = userRepository.findByEmail(email);
        Role theRole = roleRepository.findByName(role);
        user.getRoles().add(theRole);
        userRepository.save(user);
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email);
        if(user == null){
            throw new UsernameNotFoundException("User not found");
        }
        List<SimpleGrantedAuthority> authorities =  user.getRoles().stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
        return org.springframework.security.core.userdetails.User.builder().username(user.getEmail()).password(user.getPassword()).authorities(authorities).build();
    }
}
