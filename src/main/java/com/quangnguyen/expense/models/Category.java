package com.quangnguyen.expense.models;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;

@NoArgsConstructor
@Entity
@Data
@Table(name="category")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    // Examples: travel, snacks
    @NonNull
    private String name;

    @ManyToOne(cascade= CascadeType.PERSIST)
    private User user;
}
