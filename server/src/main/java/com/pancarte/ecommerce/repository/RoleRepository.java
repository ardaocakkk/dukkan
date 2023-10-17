package com.pancarte.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pancarte.ecommerce.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long>{
    Role findByName(String name);
    Role save(Role role);
    
}
