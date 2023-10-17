package com.pancarte.ecommerce.repository;


import com.pancarte.ecommerce.model.Role;
import com.pancarte.ecommerce.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
    User findByEmail(String email);
    Boolean existsByEmail(String email);
}
