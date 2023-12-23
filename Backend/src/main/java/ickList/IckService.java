package ickList;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class IckService {

	private final IckRepository ickRepository;

	public Ick postIck(Ick ick) {
		return ickRepository.save(ick);
	}

	public Optional<Ick> getIck(int id) {
		return ickRepository.findById(id);
	}

	public List<Ick> getIcks() {
		return ickRepository.findAll();
	}

	public void deleteIck(int id) {
		ickRepository.deleteById(id);
	}

}
