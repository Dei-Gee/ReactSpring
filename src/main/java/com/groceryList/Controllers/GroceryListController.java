/**
 * 
 */
package com.groceryList.Controllers;

import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

/**
 * @author lowbl
 *
 */

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.groceryList.Entities.Item;
import com.groceryList.Services.GroceryListService;


@RestController
@RequestMapping("/api/grocerylist")
@CrossOrigin
public class GroceryListController {
	
	@Autowired
	private GroceryListService groceryListService;
	
	@PostMapping("/add")
	public ResponseEntity<?> addItemToGroceryList(@Valid @RequestBody Item item, BindingResult result)
	{
		if(result.hasErrors())
		{
			Map<String, String> error_map = new HashMap<>();
			
			for(FieldError error: result.getFieldErrors()) {
				error_map.put(error.getField(), error.getDefaultMessage());
			}
			
			return new ResponseEntity<Map<String, String>>(error_map, HttpStatus.BAD_REQUEST);	
		}
		
		Item newItem  = groceryListService.saveOrUpdateItem(item);
		
		return new ResponseEntity<Item>(newItem, HttpStatus.CREATED);
	}

//    @Autowired
//    GroceryListRepository groceryListRepository;
//
//    @CrossOrigin(origins = "http://localhost:3000")
//    @GetMapping(path = "/items")
//    public List<Item> getAllItems(){
//        List<Item> items = new ArrayList<>();
//        groceryListRepository.findAll().forEach(items :: add);
//        return items;
//    }
//
//    @CrossOrigin(origins = "http://localhost:3000")
//    @PostMapping(path = "/items")
//    public Item addItem(@RequestBody Item item){
//        groceryListRepository.save(item);
//        return item;
//    }
//
//    @CrossOrigin(origins = "http://localhost:3000")
//    @DeleteMapping(path = "/items/{id}")
//    public void deleteItem(@PathVariable int id){
//            groceryListRepository.deleteById(id);
//    }
}