package com.pancarte.ecommerce.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "stores")
public class Store {

    @Id
    private int id;
    private String name;

    @JsonManagedReference
    @OneToMany(mappedBy = "store", cascade = CascadeType.ALL,  fetch = FetchType.LAZY)
    private List<Product> products;

    @JsonManagedReference
    @OneToOne(cascade = CascadeType.ALL)
    @JoinTable(name = "store_address",
            joinColumns =
                    {@JoinColumn(name = "store_id", referencedColumnName = "id")},
            inverseJoinColumns =
                    {@JoinColumn(name = "store_details_id", referencedColumnName = "id")})
    private StoreDetails storeDetails;


    public String toString() {
        return "Store(id=" + this.getId() + ", name=" + this.getName() + ", products=" + this.getProducts() + ")";
    }

}
