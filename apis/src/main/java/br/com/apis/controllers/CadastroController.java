package br.com.apis.controllers;

import br.com.apis.entities.Cadastro;
import br.com.apis.services.CadastroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cadastro")
@CrossOrigin("*")
public class CadastroController {

    @Autowired
    private CadastroService service;

    @PostMapping
    public Cadastro criarCliente(@RequestBody Cadastro cliente) {
        return service.salvarCliente(cliente);
    }

    @GetMapping("/{id}")
    public Cadastro obterCliente(@PathVariable Long id) {
        return service.obterCliente(id);
    }

    @GetMapping
    public List<Cadastro> obterTodosClientes() {
        return service.obterTodos();
    }

}
