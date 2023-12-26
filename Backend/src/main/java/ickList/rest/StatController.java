package ickList.rest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ickList.model.Stat;
import ickList.service.StatService;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/v1/stat")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class StatController {

	StatService statService;
	@GetMapping
	public Stat getStat(){
		return statService.getStat();
	}
}
