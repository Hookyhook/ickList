package ickList.service;

import java.util.List;

import org.springframework.stereotype.Service;

import ickList.data.WordRepository;
import ickList.model.Word;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class WordService {
   private WordRepository wordRepository;

   public Word createWord(String word, String name){
       return wordRepository.save(new Word(0,word, name));
   }
   public List<Word> getWordList(){
       return wordRepository.findAll();
   }

}
