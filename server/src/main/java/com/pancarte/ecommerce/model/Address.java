package com.pancarte.ecommerce.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "user_details")
@Data
@AllArgsConstructor
@Entity
@NoArgsConstructor
public class Address {
    @Id
    private int id;

    private String firstName;
    private String lastName;
    private String address;
    private String city;
    private String country;
    private String postalCode;
    private String phone;

    @JsonBackReference
    @OneToOne(mappedBy = "address")
    private User user;







}
