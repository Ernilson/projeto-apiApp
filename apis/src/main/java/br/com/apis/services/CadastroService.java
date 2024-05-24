package br.com.apis.services;

import br.com.apis.entities.Cadastro;
import br.com.apis.repositories.CadastroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CadastroService {

    @Autowired
    private CadastroRepository repository;


    public Cadastro salvarCliente(Cadastro cliente) {
        return repository.save(cliente);
    }

    public Cadastro obterCliente(Long id) {
        return repository.findById(id).orElseThrow(() -> new RuntimeException("Cliente não encontrado"));

    }

    public List<Cadastro> obterTodos() {
        return repository.findAll();
    }
}
