package com.web.repository.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.web.entities.Equipo;
import com.web.repository.dao.IEquipoDao;
import com.web.repository.services.EquipoService;

public class EquipoServiceImpl implements EquipoService {

	@Autowired
	private IEquipoDao equipoDao;
	
	@Override
	public List<Equipo> findAll() {
		try {
			 List<Equipo> equipos = (List<Equipo>) equipoDao.findAll();
			 return equipos;
		} catch (Exception e) {
			// TODO: handle exception
		}
		return null;
	}

	@Override
	public Equipo save(Equipo equipo) {
		try {
			return equipoDao.save(equipo);
		} catch (Exception e) {
			// TODO: handle exception
		}
		return null;
	}

}
