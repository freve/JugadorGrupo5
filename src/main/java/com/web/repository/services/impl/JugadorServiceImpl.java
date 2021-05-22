package com.web.repository.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.entities.Jugador;
import com.web.repository.dao.IJugadorDao;
import com.web.repository.services.JugadorService;

@Service
public class JugadorServiceImpl implements JugadorService {

	@Autowired
	private IJugadorDao jugadorDao;
	
	@Override
	public List<Jugador> findAll() {
		try {
			List<Jugador> jugador = (List<Jugador>)jugadorDao.findAll();
			return jugador;
		} catch (Exception e) {
			// TODO: handle exception
		}
		return null;
	}

	@Override
	public Jugador save(Jugador jugador) {
		try {
			return jugadorDao.save(jugador);
		} catch (Exception e) {
			// TODO: handle exception
		}
		return null;
	}

	@Override
	public Jugador findById(int id) {
		try {
			return jugadorDao.findById(id).orElse(null);
		} catch (Exception e) {
			// TODO: handle exception
		}
		return null;
	}

	@Override
	public String delete(int id) {
		try {
			jugadorDao.deleteById(id);
			return "Jugador eliminado";
		} catch (Exception e) {
			// TODO: handle exception
		}
		return null;
	}

}
