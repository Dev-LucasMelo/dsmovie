package com.devsuperior.dsmovie.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmovie.Dto.MovieDto;
import com.devsuperior.dsmovie.Services.MovieService;

@RestController
@RequestMapping(value = "/movies")
public class MovieController {
	
	@Autowired
	private MovieService service;
	
	@GetMapping
	public Page<MovieDto> findAll(Pageable pageable) {
		return service.findALL(pageable);
	}

	@GetMapping(value = "/{id}")
	public MovieDto findById(@PathVariable Long id) {
		return service.findByID(id);
	}

}
