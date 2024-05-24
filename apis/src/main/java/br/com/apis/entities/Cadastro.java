package br.com.apis.entities;

import jakarta.persistence.*;

@Entity
@Table(name="tb_cadastro")
public class Cadastro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String email;
    private String zap;

    public Cadastro() {
    }

    public Cadastro(Long id, String nome, String email, String zap) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.zap = zap;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getZap() {
        return zap;
    }

    public void setZap(String zap) {
        this.zap = zap;
    }
}
