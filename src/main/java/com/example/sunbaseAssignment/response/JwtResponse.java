package com.example.sunbaseAssignment.response;

public class JwtResponse {

    private String token;
    private String type = "Bearer";
    private int id;
    private String username;
    private String email;

    public JwtResponse(String token, String type, int id, String username, String email) {
        this.token = token;
        this.type = type;
        this.id = id;
        this.username = username;
        this.email = email;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
