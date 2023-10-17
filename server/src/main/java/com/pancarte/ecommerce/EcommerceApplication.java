package com.pancarte.ecommerce;

import java.util.HashSet;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.pancarte.ecommerce.model.Address;
import com.pancarte.ecommerce.model.Role;
import com.pancarte.ecommerce.model.User;
import com.pancarte.ecommerce.service.UserService;

@SpringBootApplication
public class EcommerceApplication {

    public static void main(String[] args) {
        SpringApplication.run(EcommerceApplication.class, args);
    }

    /*
    @Bean
    CommandLineRunner commandLineRunner(UserService userService) {
        return args -> {
            userService.saveRole(Role.builder().name("ROLE_USER").build());
            userService.saveRole(Role.builder().name("ROLE_ADMIN").build());
            userService.addUser(User.builder().email("ardaocak54@gmail.com").password("123").roles(new HashSet<>()).address(null).build());
            userService.addRoleTo("ardaocak54@gmail.com", "ROLE_USER");

        };
    }

     */
}
