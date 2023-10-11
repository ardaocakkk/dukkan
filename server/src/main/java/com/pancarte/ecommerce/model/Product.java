package com.pancarte.ecommerce.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;

@Table(name = "products")
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    private String description;
    private String href;
    private Long price;
    private int quantity;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "store_id", nullable = false)
    private Store store;


    @ManyToMany(mappedBy = "likedProducts")
    @JsonIgnore
    private List<User> likedUsers;



    public String toString() {
        return "Product(id=" + this.getId() + ", title=" + this.getTitle() + ", description=" + this.getDescription() + ", href=" + this.getHref() + ", price=" + this.getPrice() + ", quantity=" + this.getQuantity() +", storeId=" + this.getStore().getId() + ")";
    }


}
