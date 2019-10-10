package com.pro;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Customerservice {

	@Autowired
	private Repository sr;
	
	public List<Technology> getTechnology() {
		List<Technology> ls=new ArrayList<>();
		sr.findAll().forEach(ls::add);
		return ls;
	}
	
	public Technology getTechnology(Integer id) {
		// TODO Auto-generated method stub
		//return ls.stream().filter(t->t.getStateid().equals(id)).findFirst().get();
		return sr.findById(id).orElse(null);
	}
	
	public void addTechnology(Technology s) {
		sr.save(s);
	}
	public void updateTechnology(Technology s,Integer id) {
		sr.save(s);
	}
	public void deleteTechnology(Integer id) {
		sr.deleteById(id);
	}


	

	
	
}