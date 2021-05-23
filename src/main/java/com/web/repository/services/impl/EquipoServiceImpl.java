package com.web.repository.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.web.clientes.JugadorClienteRest;
import com.web.repository.services.EquipoService;

@Service
public class EquipoServiceImpl implements EquipoService{

	@Autowired
	private JugadorClienteRest jugadorRest;
	
	@Override
	public ResponseEntity<?> listar(int idEquipo) {
		return jugadorRest.listar(idEquipo);
	}
}
