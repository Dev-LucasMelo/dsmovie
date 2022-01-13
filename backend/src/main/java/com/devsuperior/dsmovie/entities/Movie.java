package com.devsuperior.dsmovie.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_movie")

public class Movie {
	
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id; 
   private String title;
   private Double score; 
   private Integer count; 
   private String Image;
   
   public Movie () {
	   
   }

public Movie(Long id, String tittle, Double score, Integer count, String image) {
	this.id = id;
	this.title = tittle;
	this.score = score;
	this.count = count;
	Image = image;
}

public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

public String getTittle() {
	return title;
}

public void setTittle(String tittle) {
	this.title = tittle;
}

public Double getScore() {
	return score;
}

public void setScore(Double score) {
	this.score = score;
}

public Integer getCount() {
	return count;
}

public void setCount(Integer count) {
	this.count = count;
}

public String getImage() {
	return Image;
}

public void setImage(String image) {
	Image = image;
}
   


}
