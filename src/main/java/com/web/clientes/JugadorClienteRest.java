package com.web.clientes;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "servicio-equipo",url="localhost:8081/equipo",decode404 = true)
public interface JugadorClienteRest {

	@GetMapping("/{idEquipo}")
	public ResponseEntity<?> listar(@PathVariable int idEquipo);
}
