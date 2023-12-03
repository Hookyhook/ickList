package ickList;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/v1/ick")
@AllArgsConstructor
public class IckController {

	IckService ickService;
	@GetMapping
	public List<Ick> getIcks(){
		return ickService.getIcks();
	}
	@GetMapping("/{id}")
	public Optional<Ick> getIck(@PathVariable int id){
		return ickService.getIck(id);
	}
	@PostMapping
	public Ick postIck(@RequestBody Ick ick){
		return ickService.postIck(ick);
	}
	@DeleteMapping("/{id}")
	public void deleteIck(@PathVariable int id){
		ickService.deleteIck(id);
	}

}
