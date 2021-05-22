package com.web.repository.services;

import org.springframework.http.ResponseEntity;

public interface EquipoService {

	public ResponseEntity<?>listar(int idEquipo);
}
