/**
 * 
 */
package com.groceryList.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.groceryList.Boundaries.GroceryListRepository;
import com.groceryList.Entities.Item;

/**
 * @author lowbl
 *
 */
@Service
public class GroceryListService {
	
	@Autowired
	private GroceryListRepository groceryListRepository;
	
	public Item saveOrUpdateItem(Item item) {
		
		return groceryListRepository.save(item);
	}
}
