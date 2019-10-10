package com.pro;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class Controller {
	
	@Autowired
	private Customerservice cs;
	
	@RequestMapping("/technology")
	public List<Technology> getTechnology()
	{
		return cs.getTechnology();
	}
	@RequestMapping("/technology/{id}")
	public Technology getTechnology(@PathVariable Integer id)
	{
		return cs.getTechnology(id);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/technology")
	public void addTechnology(@RequestBody Technology s)
	{
		 cs.addTechnology(s);
	}
	@RequestMapping(method=RequestMethod.PUT,value="/technology/{id}")
	public void updateTechnology(@RequestBody Technology s,@PathVariable Integer id)
	{
		 cs.updateTechnology(s,id);
	}
	@RequestMapping(method=RequestMethod.DELETE,value="/technology/{id}")
	public void deleteTechnology(@PathVariable Integer id)
	{
		 cs.deleteTechnology(id);
	}
	
	

}