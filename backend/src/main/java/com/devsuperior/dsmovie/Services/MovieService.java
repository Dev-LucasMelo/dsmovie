package com.devsuperior.dsmovie.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovie.Dto.MovieDto;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.repositories.MovieRepository;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository repository;
	
	@Transactional(readOnly = true) 
	public Page<MovieDto> findALL(Pageable pageable) {
		Page<Movie> result = repository.findAll(pageable);
		Page<MovieDto> page = result.map(x -> new MovieDto(x));
		
		return page;
	}
	@Transactional(readOnly = true) 
	public MovieDto findByID(Long Id) {
		Movie result = repository.findById(Id).get();
		MovieDto Dto =  new MovieDto(result);
		
		return Dto;
	}
}
