/**
 * 
 */
package com.groceryList.Controllers;

/**
 * @author lowbl
 *
 */
//
//import com.groceryList.Entities.*;
//import com.groceryList.Boundaries.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.groceryList.Services.GroceryListService;

//import java.util.ArrayList;
//import java.util.List;

@RestController
@RequestMapping("/api/items")
@CrossOrigin()
public class GroceryListController {
	
	@Autowired
	private GroceryListService groceryListService;

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