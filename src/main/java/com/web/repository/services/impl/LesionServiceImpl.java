package com.web.repository.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.entities.Lesion;
import com.web.repository.dao.ILesionDao;
import com.web.repository.services.LesionService;

@Service
public class LesionServiceImpl implements LesionService {

	@Autowired
	private ILesionDao lesionDao;
	
	@Override
	public List<Lesion> findAll() {
		try {
			return (List<Lesion>)lesionDao.findAll();
		} catch (Exception e) {
			// TODO: handle exception
		}
		return null;
	}

	@Override
	public Lesion save(Lesion lesion) {
		try {
			return lesionDao.save(lesion);
		} catch (Exception e) {
			// TODO: handle exception
		}
		return null;
	}

	@Override
	public Lesion findById(int idLesion) {
		try {
			Lesion lesion = lesionDao.findById(idLesion).orElse(null);
			return lesion;
		} catch (Exception e) {
			// TODO: handle exception
		}
		return null;
	}

	@Override
	public void delete(int idLesion) {
		try {
			lesionDao.deleteById(idLesion);
		} catch (Exception e) {
			// TODO: handle exception
		}
		
	}

	@Override
	public List<Lesion> listarPorJugador(int idJugador) {
		try {
			return lesionDao.listarPorJugador(idJugador);
		} catch (Exception e) {
			// TODO: handle exception
		}
		return null;
	}

	
}
