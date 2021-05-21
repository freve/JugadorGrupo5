package com.web.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;


/**
 * The persistent class for the lesion database table.
 * 
 */
@Entity
@NamedQuery(name="Lesion.findAll", query="SELECT l FROM Lesion l")
public class Lesion implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

	@Temporal(TemporalType.DATE)
	@Column(name="fecha_fin")
	private Date fechaFin;

	@Temporal(TemporalType.DATE)
	@Column(name="fecha_inicio")
	private Date fechaInicio;

	private String observaciones;

	private String tratamiento;

	//bi-directional many-to-one association to FichaJugador
	@ManyToOne
	@JoinColumn(name="id_ficha_jugador")
	private FichaJugador fichaJugador;

	public Lesion() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getFechaFin() {
		return this.fechaFin;
	}

	public void setFechaFin(Date fechaFin) {
		this.fechaFin = fechaFin;
	}

	public Date getFechaInicio() {
		return this.fechaInicio;
	}

	public void setFechaInicio(Date fechaInicio) {
		this.fechaInicio = fechaInicio;
	}

	public String getObservaciones() {
		return this.observaciones;
	}

	public void setObservaciones(String observaciones) {
		this.observaciones = observaciones;
	}

	public String getTratamiento() {
		return this.tratamiento;
	}

	public void setTratamiento(String tratamiento) {
		this.tratamiento = tratamiento;
	}

	public FichaJugador getFichaJugador() {
		return this.fichaJugador;
	}

	public void setFichaJugador(FichaJugador fichaJugador) {
		this.fichaJugador = fichaJugador;
	}

}