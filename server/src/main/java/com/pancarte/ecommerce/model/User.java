package com.pancarte.ecommerce.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.security.Timestamp;
import java.util.List;
import java.util.Set;

import org.hibernate.validator.constraints.UniqueElements;

@Entity
@Table(name = "users")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotNull
    @Email
    @Column(unique = true)
    private String email;
    @NotNull
    private String password;
    

    @JsonManagedReference
    @OneToOne(cascade = CascadeType.ALL)
    @JoinTable(name = "usr_address",
            joinColumns =
                    {@JoinColumn(name = "user_id", referencedColumnName = "id")},
            inverseJoinColumns =
                    {@JoinColumn(name = "address_id", referencedColumnName = "id")})
    private Address address;



    @ManyToMany
    @JsonBackReference
    @JoinTable(
            name = "wishlist",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id"))
    private List<Product> likedProducts;

    @ManyToMany(fetch = FetchType.LAZY)
    private Set<Role> roles;


    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", address=" + address +
                ", likedProducts=" + likedProducts +
                ", roles=" + roles +
                '}';
    }
}
