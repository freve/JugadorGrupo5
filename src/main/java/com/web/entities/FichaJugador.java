package com.web.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the ficha_jugador database table.
 * 
 */
@Entity
@Table(name="ficha_jugador")
@NamedQuery(name="FichaJugador.findAll", query="SELECT f FROM FichaJugador f")
public class FichaJugador implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

	private String pase;

	//bi-directional many-to-one association to Jugador
	@ManyToOne
	@JoinColumn(name="id_jugador")
	private Jugador jugador;

	//bi-directional many-to-one association to Lesion
	@OneToMany(mappedBy="fichaJugador")
	private List<Lesion> lesions;

	public FichaJugador() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPase() {
		return this.pase;
	}

	public void setPase(String pase) {
		this.pase = pase;
	}

	public Jugador getJugador() {
		return this.jugador;
	}

	public void setJugador(Jugador jugador) {
		this.jugador = jugador;
	}

	public List<Lesion> getLesions() {
		return this.lesions;
	}

	public void setLesions(List<Lesion> lesions) {
		this.lesions = lesions;
	}

	public Lesion addLesion(Lesion lesion) {
		getLesions().add(lesion);
		lesion.setFichaJugador(this);

		return lesion;
	}

	public Lesion removeLesion(Lesion lesion) {
		getLesions().remove(lesion);
		lesion.setFichaJugador(null);

		return lesion;
	}

}