package com.example.login_app.entity;

import jakarta.persistence.*;

@Entity
@Table(name="technologies", schema="login_app_schema")
public class Technology {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="tid",nullable = false,unique = true)
    private Integer id;

    @Column(name="name", nullable = false)
    private String name;

    public Technology() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
