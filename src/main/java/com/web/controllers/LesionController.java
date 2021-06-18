package com.web.controllers;

import java.util.ArrayList;
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
import com.web.entities.Lesion;
import com.web.repository.services.JugadorService;
import com.web.repository.services.LesionService;

@RestController
@RequestMapping("/lesion")
public class LesionController {

	@Autowired
	private LesionService lesionService;
	
	@Autowired
	private JugadorService jugadorService;
	
	@GetMapping("")
	public ResponseEntity<?> listar(){
		try {
			List<Lesion> lesiones = (List<Lesion>) lesionService.findAll();
			return new ResponseEntity<List<Lesion>>(lesiones,HttpStatus.OK);
		} catch (DataAccessException d) {
			Map<String,Object> map = new HashMap<String, Object>();
			map.put("error", d.getMostSpecificCause().getMessage());
			
			return new ResponseEntity<Map<String,Object>> (map, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PostMapping("/save/{idJugador}")
	public ResponseEntity<?> guardar(@PathVariable int idJugador, @RequestBody Lesion lesion){
		Map <String,Object> map =new HashMap <String, Object>();
		try {
			Jugador jugador = jugadorService.findById(idJugador);
			if(jugador == null) {
				map.put("error", "jugador no existe!");
				return new ResponseEntity<Map<String,Object>>(map,HttpStatus.BAD_REQUEST);
			}
			
			List<Lesion> lesiones = new ArrayList<>();
			lesiones.add(lesion);
			lesion.setFichaJugador(jugador);
			map.put("lesion", lesionService.save(lesion));
			return new ResponseEntity<Map<String,Object>>(map,HttpStatus.CREATED);
		} catch (DataAccessException d) {
			map.put("error", d.getMostSpecificCause().getMessage());		
			return new ResponseEntity<Map<String,Object>> (map, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("{idJugador}")
	public ResponseEntity<?> lesionesJugador(@PathVariable int idJugador){
		Map <String,Object> map =new HashMap <String, Object>();
		try {
			Jugador jugador = jugadorService.findById(idJugador);
			if(jugador == null) {
				map.put("error", "jugador no existe!");
				return new ResponseEntity<Map<String,Object>>(map,HttpStatus.BAD_REQUEST);
			}
			List<Lesion> lesionesJugador = lesionService.listarPorJugador(idJugador);
			return new ResponseEntity<List<Lesion>>(lesionesJugador, HttpStatus.OK);
		} catch (DataAccessException d) {
			map.put("error", d.getMostSpecificCause().getMessage());		
			return new ResponseEntity<Map<String,Object>> (map, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/{idLesion}")
	public ResponseEntity<?> eliminar(@PathVariable int idLesion){
		Map <String,Object> map =new HashMap <String, Object>();
		try {
			lesionService.delete(idLesion);
			return new ResponseEntity<Object>(HttpStatus.OK);
		} catch (DataAccessException d) {
			map.put("error", d.getMostSpecificCause().getMessage());		
			return new ResponseEntity<Map<String,Object>> (map, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
		
}
