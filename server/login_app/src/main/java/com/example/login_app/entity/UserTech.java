package com.example.login_app.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import java.io.Serializable;

@Embeddable
public class UserTech implements Serializable {
    @Column(name="user_id",nullable = false)
    private Integer idUuser;
    @Column(name="technology_id",nullable = false)
    private Integer idTech;

    public Integer getIdUuser() {
        return idUuser;
    }

    public void setIdUuser(Integer idUuser) {
        this.idUuser = idUuser;
    }

    public Integer getIdTech() {
        return idTech;
    }

    public void setIdTech(Integer idTech) {
        this.idTech = idTech;
    }
}
