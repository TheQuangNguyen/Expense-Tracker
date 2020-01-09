package com.quangnguyen.expense.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@AllArgsConstructor
// the below annotation is so that we dont have to create an empty constructor for jpa to work
@NoArgsConstructor
@Entity
@Data
@Table(name="appUser")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String email;

    @OneToMany
    private Set<Category> category;
}
