package com.web.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.web.entities.Jugador;
import com.web.repository.services.JugadorService;

@RestController
@RequestMapping("/jugador")
public class JugadorController {

	@Autowired
	private JugadorService jugadorService;
	
	@GetMapping("")
	public ResponseEntity<?> getJugadores(){
		try {
			List<Jugador> jugador = (List<Jugador>) jugadorService.findAll();
			return new ResponseEntity<List<Jugador>>(jugador,HttpStatus.OK);
		} catch (DataAccessException d) {
			Map<String,Object> map = new HashMap<String, Object>();
			map.put("error", d.getMostSpecificCause().getMessage());
			
			return new ResponseEntity<Map<String,Object>> (map, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PostMapping("/{idEquipo}")
	public ResponseEntity<?> guardar(@PathVariable int idEquipo , @RequestBody Jugador jugador){
		
//		condicional para mirar si exite el equipo
		try {
			jugador.setIdEquipo(idEquipo);
			Map <String,Object> map =new HashMap <String, Object>();
			map.put("jugador", jugadorService.save(jugador));
			return new ResponseEntity<Map<String,Object>>(map,HttpStatus.CREATED);
		} catch (DataAccessException | InternalError e) {
			Map <String,Object> map =new HashMap <String, Object>();
			map.put("mensaje", "hubo un error inesperado!");
			map.put("error", e.getCause().getMessage());
			return new ResponseEntity<Map<String,Object>>(map,HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
	@GetMapping("/{idJugador}")
	public ResponseEntity<?> listar(@PathVariable int idJugador){
		try {
			Jugador j = jugadorService.findById(idJugador);
			Map <String,Object> map =new HashMap <String, Object>();
			map.put("jugador", j);
			return new ResponseEntity<Map<String,Object>>(map,HttpStatus.FOUND);
		} catch (DataAccessException | InternalError e) {
			Map <String,Object> map =new HashMap <String, Object>();
			map.put("mensaje", "Jugador no encontrado!");
			map.put("error", e.getCause().getMessage());
			return new ResponseEntity<Map<String,Object>>(map,HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/{idJugador}")
	public ResponseEntity<?> eliminar(@PathVariable int idJugador){
		try {
			 jugadorService.delete(idJugador);
				Map <String,Object> map =new HashMap <String, Object>();
				map.put("mensaje", "Jugador eliminado!");
				return new ResponseEntity<Map<String,Object>>(map,HttpStatus.OK);
		} catch (DataAccessException | InternalError e) {
			Map <String,Object> map =new HashMap <String, Object>();
			map.put("mensaje", "Jugador no pudo ser eliminado!");
			map.put("error", e.getCause().getMessage());
			return new ResponseEntity<Map<String,Object>>(map,HttpStatus.NOT_FOUND);
		}
	}
}
