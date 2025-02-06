package ickList.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ickList.model.Word;

@Repository
public interface WordRepository extends JpaRepository<Word, Integer> {

}
