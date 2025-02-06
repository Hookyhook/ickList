package ickList.data;

import org.springframework.data.jpa.repository.JpaRepository;

import ickList.model.Word;

public interface WordRepository extends JpaRepository<Word, Integer> {

}
