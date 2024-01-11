package ickList.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import ickList.data.IckRepository;
import ickList.model.Ick;
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

	public Ick updateIck(Ick ick){
		int idOfIckToUpdate = ick.getId();
		Ick ickToUpdate = ickRepository.getReferenceById(idOfIckToUpdate);

		ickToUpdate
				.setIckDescription(ick.getIckDescription());
		ickToUpdate
				.setIckType(ick.getIckType());
		ickToUpdate
				.setGender(ick.getGender());

		return ickRepository.save(ickToUpdate);
	}

	public void deleteIck(int id) {
		ickRepository.deleteById(id);
	}

}
