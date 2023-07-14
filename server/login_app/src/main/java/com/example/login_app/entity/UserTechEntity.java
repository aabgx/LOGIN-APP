package com.example.login_app.entity;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name="users_technologies",schema = "login_app_schema")
public class UserTechEntity {
    @EmbeddedId
    private UserTech utid;

    public UserTech getUtid() {
        return utid;
    }

    public void setUtid(UserTech utid) {
        this.utid = utid;
    }
}
