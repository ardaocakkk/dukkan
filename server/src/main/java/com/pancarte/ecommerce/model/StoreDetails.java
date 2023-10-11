package com.pancarte.ecommerce.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "store_details")
public class StoreDetails {

    @Id
    private int id;
    private String address;
    private String city;
    private String country;
    private String postalCode;
    private String phone;

    @JsonBackReference
    @OneToOne(mappedBy = "storeDetails")
    private Store store;
}
